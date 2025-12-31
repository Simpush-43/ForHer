import { useState } from "react";
import  Rose from './assets/First_Rose.jpeg';
import Collage from './assets/Her_Collage.jpg';
import Whatif from './assets/What_if.jpeg';
function MemoryCarousel() {
  const memories = [
    {
      title: "✨ The first rose u gave",
      text: "This is the first rose that u gave it to me.I dont have exact date remembered but it was i guess nov 2024...",
      image:Rose,
    },
    {
      title: "Some of best images 2025..",
      image:Collage
    },
    {
      title: "Whattt iff we met,...🤧🤌",
      text: "What if ham mile...",
      image:Whatif,
    }
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="moment carousel">
      <h3>{memories[index].title}</h3>
            {/* IMAGE (only if exists) */}
      {memories[index].image && (
        <img
          src={memories[index].image}
          alt="memory"
          className="carousel-img"
        />
      )}
      <p>{memories[index].text}</p>

      <div className="carousel-controls">
        <button onClick={() => setIndex((index - 1 + memories.length) % memories.length)}>
          ‹
        </button>
        <span>{index + 1} / {memories.length}</span>
        <button onClick={() => setIndex((index + 1) % memories.length)}>
          ›
        </button>
      </div>
    </div>
  );
}

export default MemoryCarousel;
