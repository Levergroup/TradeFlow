/**
 * Renders one or more JSON-LD schema objects as a script tag. Server component —
 * no client JS shipped. Pass a single object or an array.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Schema is built from trusted, static site config — safe to inline.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
