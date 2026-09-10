import "./AmbientBackground.css";

const blobs = [
  {
    id: 1,
    size: "32rem",
    top: "8%",
    left: "6%",
    color: "rgba(74, 144, 255, 0.22)",
    delay: "0s",
    duration: "24s"
  },
  {
    id: 2,
    size: "38rem",
    top: "18%",
    right: "8%",
    color: "rgba(92, 124, 255, 0.16)",
    delay: "-6s",
    duration: "28s"
  },
  {
    id: 3,
    size: "28rem",
    bottom: "12%",
    left: "18%",
    color: "rgba(72, 196, 255, 0.15)",
    delay: "-12s",
    duration: "26s"
  },
  {
    id: 4,
    size: "34rem",
    bottom: "8%",
    right: "12%",
    color: "rgba(160, 112, 255, 0.16)",
    delay: "-10s",
    duration: "30s"
  },
  {
    id: 5,
    size: "26rem",
    top: "42%",
    left: "42%",
    color: "rgba(164, 214, 255, 0.1)",
    delay: "-18s",
    duration: "33s"
  },
  {
    id: 6,
    size: "22rem",
    top: "12%",
    left: "56%",
    color: "rgba(255, 255, 255, 0.08)",
    delay: "-20s",
    duration: "29s"
  },
  {
    id: 7,
    size: "30rem",
    bottom: "22%",
    right: "30%",
    color: "rgba(103, 214, 255, 0.12)",
    delay: "-24s",
    duration: "31s"
  }
];

function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-noise" />
      <div className="ambient-overlay" />

      {blobs.map((blob) => (
        <span
          key={blob.id}
          className="ambient-blob"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            right: blob.right,
            bottom: blob.bottom,
            left: blob.left,
            background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.26), rgba(255,255,255,0.06) 18%, transparent 50%), radial-gradient(circle at 60% 45%, ${blob.color}, transparent 58%)`,
            animationDelay: blob.delay,
            animationDuration: blob.duration
          }}
        />
      ))}
    </div>
  );
}

export default AmbientBackground;
