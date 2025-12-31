export default function Stars() {
  return (
    <>
      <div className="stars">
        {Array.from({ length: 80 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
    </>
  );
}
