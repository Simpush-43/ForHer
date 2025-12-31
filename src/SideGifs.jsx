const gifs = [
  "/gifs/bubu-dudu-sseeyall (1).webp",
  "/gifs/bubu-dudu-sseeyall.webp",
  "/gifs/love-love.gif",
  "/gifs/new year.webp",
  "/gifs/quby-dance.webp",
  '/gifs/quby-girl.webp',
  '/gifs/quby-hearts.webp',
  '/gifs/quby-tory-hat-dance.webp',
  '/gifs/tkthao219-quby.webp',
];
export default function SideGifs() {
  return (
    <>
      {gifs.map((gif, i) => {
        const side = i % 2 === 0 ? "left" : "right";
        const top = 10 + Math.random() * 70; // random vertical position
const xOffset = Math.random() * 40; // overlap horizontally
        const scale = 0.8 + Math.random() * 0.5;
        const zIndex = 20 + Math.floor(Math.random() * 10);
        const delay = Math.random() * 6;


        return (
          <img
            key={i}
            src={gif}
            className={`side-gif ${side}`}
            style={{
             top: `${top}%`,
              transform: `translateX(${side === "left" ? xOffset : -xOffset}px) scale(${scale})`,
              zIndex,
              animationDelay: `${delay}s`,
            }}
            alt="cute gif"
          />
        );
      })}
    </>
  );
}
