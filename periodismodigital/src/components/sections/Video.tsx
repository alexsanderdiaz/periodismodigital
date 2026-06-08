export default function Video() {
  return (
    <section
      id="video"
      style={{
        backgroundColor: "#0a0a0a",
        padding: "6rem 1.5rem",
        fontFamily: "'Barlow', sans-serif",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#e8c97a",
            margin: "0 0 1rem",
          }}
        >
          Video
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
          Cortometraje documental · Claudia Gordillo · 2026
        </p>

        {/* Contenedor del video 16:9 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/8pjw8-h1xSE"
            title="Malverde — Cortometraje documental"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>

        {/* Descripción */}
        <div
          style={{
            marginTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Narra los ritmos de una tierra sembrada con caña de azúcar,
            codificando la naturaleza nativa y las formas en las que los cuerpos
            humanos y no humanos se mueven para sobrevivir. Un cortometraje de
            Claudia Gordillo.
          </p>
        </div>
      </div>
    </section>
  );
}
