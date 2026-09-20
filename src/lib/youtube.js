const UPLOADS_PLAYLIST_ID = "UUPCLC9jVRvoj79RBRYduUlA";

// Anything shorter than this is treated as a Short/reel/teaser, not a full
// episode. BTG episodes are long-form interviews (many minutes), so 3
// minutes is a safe cutoff — raise or lower this if you start posting
// longer promotional clips that aren't full episodes either.
const MIN_EPISODE_SECONDS = 180;

function parseDuration(iso) {
  // Parses YouTube's ISO 8601 duration format, e.g. "PT15M33S", "PT1H2M10S".
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
 * Fetches the most recent FULL EPISODE from the BTG channel — Shorts and
 * reels are filtered out by duration. Pulls a batch of recent uploads
 * (not just the single latest) because the most recent upload could well
 * be a Short, so we need candidates to check.
 * Cached for 1 hour via Next.js's fetch revalidation.
 */
export async function getLatestEpisode() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    console.error("YOUTUBE_API_KEY is not set");
    return null;
  }

  const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=10&key=${apiKey}`;

  try {
    const res = await fetch(playlistUrl, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error("YouTube API error:", await res.text());
      return null;
    }

    const data = await res.json();
    const items = data.items || [];
    if (items.length === 0) return null;

    const videoIds = items.map((item) => item.contentDetails.videoId);
    const durations = await fetchDurations(videoIds, apiKey);

    // Playlist is already newest-first, so the first item whose duration
    // clears the threshold is the most recent full episode.
    const fullEpisode = items.find((item) => {
      const duration = durations[item.contentDetails.videoId];
      return duration && duration >= MIN_EPISODE_SECONDS;
    });

    // All 10 most recent uploads were Shorts — genuinely nothing to show.
    // Caller should fall back to hardcoded data rather than break.
    if (!fullEpisode) return null;

    const videoId = fullEpisode.contentDetails.videoId;
    return {
      videoId,
      title: fullEpisode.snippet.title,
      publishedAt: fullEpisode.snippet.publishedAt,
      durationSeconds: durations[videoId],
      thumbnail:
        fullEpisode.snippet.thumbnails?.high?.url ||
        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  } catch (err) {
    console.error("YouTube fetch failed:", err);
    return null;
  }
}

/**
 * Matches a fetched video against your builders.js data by episodeUrl,
 * so the hero card can auto-display the correct guest name/department
 * once a profile exists. Returns null if no builder matches yet.
 */
export function findBuilderByVideoId(videoId, builders) {
  if (!videoId) return null;
  return builders.find((b) => b.episodeUrl?.includes(videoId)) || null;
}

/**
 * Pulls the YouTube video ID out of a full episodeUrl string
 * (e.g. "https://youtu.be/hG-vauNujn0" -> "hG-vauNujn0"), so grids can
 * build thumbnail/link URLs straight from builders.js without a
 * separately maintained youtubeId field.
 */
export function extractVideoId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]+)/);
  return match ? match[1] : null;
}

/** Pulls the first number out of an "episode" string like "Episode 2" -> 2. */
export function episodeNumber(episodeStr) {
  const match = episodeStr?.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}