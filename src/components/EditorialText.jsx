
export default function EditorialText({ text = "" }) {
  const parts = text.split(/(\[\[.*?\]\])/g);

  return (
    <>
      {parts.map((part, index) => {
        const isHighlight =
          part.startsWith("[[") && part.endsWith("]]");

        if (!isHighlight) return part;

        return (
          <strong className="story-inline-highlight" key={index}>
            {part.slice(2, -2)}
          </strong>
        );
      })}
    </>
  );
}
