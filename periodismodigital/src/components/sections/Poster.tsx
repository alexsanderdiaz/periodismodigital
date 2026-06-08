export default function Poster() {
  return (
    <section
      id="poster"
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
          Poster
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
          EL MONSTRUO VERDE
        </h2>

        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "1px",
            margin: "0 0 3rem",
          }}
        >
          Crónica visual · 2026
        </p>

        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          <img
            src="/poster-cronica.jpg"
            alt="Poster Malverde 2026"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.6,
              maxWidth: "500px",
              margin: 0,
            }}
          >
            Narra los ritmos de una tierra sembrada con caña de azúcar,
            codificando la naturaleza nativa y las formas en las que los cuerpos
            humanos y no humanos se mueven para sobrevivir.
          </p>

          <a
            href="/poster-cronica.jpg"
            download="Poster-Malverde-2026.jpg"
            style={{
              padding: "10px 24px",
              border: "1px solid #e8c97a",
              color: "#e8c97a",
              fontSize: "10px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Descargar poster
          </a>
        </div>
      </div>
    </section>
  );
}
