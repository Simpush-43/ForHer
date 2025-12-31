import "./rose.css";

export default function Rose({ bloom }) {
  return (
    <div className={`rose-container ${bloom ? "bloom" : ""}`}>
      <div className="glass"></div>

      <div className="glow"></div>

      <div className="rose-leaves">
        <div className="stem"></div>
        <div class="side-stems">
          <div class="mini-stem left">
            <div class="mini-bud"></div>
          </div>

          <div class="mini-stem right">
            <div class="mini-bud"></div>
          </div>
        </div>

        <div className="leaf"></div>
      </div>
      <div class="fallen-petals">
        <div class="fallen f1"></div>
        <div class="fallen f2"></div>
      </div>

      <div className="thorns">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="rose-petals">
        <div className="petal p1"></div>
        <div className="petal p2"></div>
        <div className="petal p3"></div>
        <div className="petal p4"></div>
        <div className="petal p5"></div>
        <div className="petal p6"></div>
        <div className="petal p7"></div>
      </div>

      <div className="sparkles">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    </div>
  );
}
