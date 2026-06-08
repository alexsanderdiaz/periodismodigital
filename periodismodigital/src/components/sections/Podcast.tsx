import { useState, useRef, useEffect } from "react";

export default function Podcast() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  const handleEnded = () => setIsPlaying(false);

  const formatTime = (s: number) => {
    if (isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section
      id="podcast"
      style={{
        backgroundColor: "#0a0a0a",
        padding: "6rem 1.5rem",
        fontFamily: "'Barlow', sans-serif",
      }}
    >
      <audio
        ref={audioRef}
        src="/podcast-malverde.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        {/* Encabezado */}
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#e8c97a",
            margin: "0 0 1rem",
          }}
        >
          Podcast
        </p>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(36px, 6vw, 56px)",
            letterSpacing: "4px",
            color: "#fff",
            margin: "0 0 0.5rem",
            lineHeight: 1,
          }}
        >
          MALVERDE
        </h2>
        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "1px",
            margin: "0 0 3rem",
          }}
        >
          Periodismo Digital · 2026
        </p>

        {/* Reproductor */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "2rem",
            backgroundColor: "#0f0f0f",
          }}
        >
          {/* Barra de progreso */}
          <div style={{ marginBottom: "1.25rem", position: "relative" }}>
            <div
              style={{
                position: "relative",
                height: "2px",
                backgroundColor: "rgba(255,255,255,0.08)",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: `${progress}%`,
                  backgroundColor: "#e8c97a",
                  transition: "width 0.1s linear",
                }}
              />
            </div>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              style={{
                position: "absolute",
                top: "-6px",
                left: 0,
                width: "100%",
                opacity: 0,
                cursor: "pointer",
                height: "16px",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "11px",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "1px",
              }}
            >
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controles */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar" : "Reproducir"}
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                border: "1px solid #e8c97a",
                backgroundColor: "transparent",
                color: "#e8c97a",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#e8c97a";
                (e.currentTarget as HTMLButtonElement).style.color = "#0a0a0a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#e8c97a";
              }}
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
