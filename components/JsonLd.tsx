/** Renders one or more JSON-LD objects. Null entries are skipped. */
export function JsonLd({ data }: { data: (object | null)[] | object | null }) {
  const items = (Array.isArray(data) ? data : [data]).filter(Boolean) as object[];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Escape "<" so content can never close the script tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
