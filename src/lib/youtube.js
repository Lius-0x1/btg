const UPLOADS_PLAYLIST_ID = "UUPCLC9jVRvoj79RBRYduUlA";

// Anything shorter than this is treated as a Short/reel/teaser, not a full
// episode. Raise or lower if that assumption stops holding.
const MIN_EPISODE_SECONDS = 180;

function parseDuration(iso) {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);
  return hours * 3600 + minutes * 60 + seconds;
}

async function fetchDurations(videoIds, apiKey) {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds.join(",")}&key=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) {
    console.error("YouTube duration lookup failed:", await res.text());
    return {};
  }
  const data = await res.json();
  const map = {};
  for (const item of data.items || []) {
    map[item.id] = parseDuration(item.contentDetails.duration);
  }
  return map;
}

/**
 * Fetches recent full episodes from the channel, newest first — Shorts and
 * reels filtered out by duration. Returns an ARRAY, not a single video,
 * because more than one recent episode can be sitting without a builder
 * profile at once. Callers decide how many of these are "pending"
 * (no matching builder yet) vs already profiled.
 * Cached for 1 hour via Next.js's fetch revalidation.
 */
export async function getFullEpisodes(candidatePoolSize = 10) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    console.error("YOUTUBE_API_KEY is not set");
    return [];
  }

  const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=${candidatePoolSize}&key=${apiKey}`;

  try {
    const res = await fetch(playlistUrl, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error("YouTube API error:", await res.text());
      return [];
    }

    const data = await res.json();
    const items = data.items || [];
    if (items.length === 0) return [];

    const videoIds = items.map((item) => item.contentDetails.videoId);
    const durations = await fetchDurations(videoIds, apiKey);

    return items
      .filter((item) => {
        const duration = durations[item.contentDetails.videoId];
        return duration && duration >= MIN_EPISODE_SECONDS;
      })
      .map((item) => {
        const videoId = item.contentDetails.videoId;
        return {
          videoId,
          title: item.snippet.title,
          publishedAt: item.snippet.publishedAt,
          durationSeconds: durations[videoId],
          thumbnail:
            item.snippet.thumbnails?.high?.url ||
            `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        };
      });
  } catch (err) {
    console.error("YouTube fetch failed:", err);
    return [];
  }
}

/** Back-compat convenience: just the single newest full episode. */
export async function getLatestEpisode() {
  const episodes = await getFullEpisodes();
  return episodes[0] || null;
}

export function findBuilderByVideoId(videoId, builders) {
  if (!videoId) return null;
  return builders.find((b) => b.episodeUrl?.includes(videoId)) || null;
}

export function extractVideoId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]+)/);
  return match ? match[1] : null;
}

export function episodeNumber(episodeStr) {
  const match = episodeStr?.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}