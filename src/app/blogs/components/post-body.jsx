export default function PostBody({ content = [] }) {
  return (
    <div className="prose prose-neutral max-w-none prose-headings:scroll-mt-24 prose-h2:text-[#0b3a74] prose-a:text-[#0b3a74]">
      {content.map((block, i) => {
        if (block.type === "p") {
          return <p key={i}>{block.text}</p>;
        }
        if (block.type === "h2") {
          return <h2 key={i}>{block.text}</h2>;
        }
        if (block.type === "ul") {
          return (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote key={i}>
              <p>{block.text}</p>
            </blockquote>
          );
        }
        if (block.type === "img") {
          // eslint-disable-next-line @next/next/no-img-element
          return (
            <figure key={i}>
              <img
                src={block.src || "/placeholder.svg"}
                alt={block.alt || ""}
                className="w-full rounded-xl"
              />
              {block.caption ? (
                <figcaption className="text-sm text-gray-500">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }
        return null;
      })}
    </div>
  );
}
