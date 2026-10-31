export function StoryVideo({
  youtubeId,
  title = "Blossom talks about her love for acting",
}) {
  return (
    <section className="my-10">
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "2rem auto",
          aspectRatio: "16 / 9",
          overflow: "hidden",
          borderRadius: "16px",
          border: "1px solid var(--border)",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          style={{
            width: "100%",
            height: "100%",
            border: "0",
            display: "block",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}