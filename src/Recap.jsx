import MemoryCarousel from "./Caraousel";
import SideGifs from './SideGifs'
export default function Recap({ onClose }) {
  return (
    <div className="recap-screen">
      <SideGifs/>
      <h2>Our Best Moments of 2025 ❤️</h2>

      <div className="moments">
        <div className="moment letter">
          <h3>🌸 The first time we…</h3>
          <p>
            {/* yahan tum apne words likhoge */}
            This part is special, so I wanted to write it slowly, like a letter… 💌
            not rushed, not perfect — just honest.So Although this year had some great and some bad 
            memories like this was kind of movie scene matlab hamara alg hoga na then out of box wapis mil
            sa jana 💗...Then baat chhet hona and sab mast ho jana Fir tumhara mujhe 19 ocotber ko dhanteras ke din accept krna and starting of new beginingss ...
            like hamari fights bhi huii yuu tumhara naraj ho jana fir mera mannaa finding flowers for uu 🌹...
            ya mai naraj houn toh tumhara manana being with my ups and downs sharing everythingg toghether ..
            2025 was so great that i would say it one of my best yearss ....🥰🤌 I will wishh we keep staying toghether everytime and that i would all say thankuuu soo muchh jeryyy 💗🌹My Love I love youuuuu soo muchhhh itnnaa kii bata bhi ny skta kitnaa
            💌💝
           </p>
        </div>
        <MemoryCarousel />
      </div>

      <button className="close-btn" onClick={onClose}>
        Back to the rose 🌹
      </button>
    </div>
  );
}
