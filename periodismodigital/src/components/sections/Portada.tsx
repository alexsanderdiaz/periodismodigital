export default function Hero() {
  return (
    <section
      style={{ position: "relative", height: "100svh", overflow: "hidden" }}
    >
      {/* Imagen de fondo */}
      <img
        src="/poster-malverde.png"
        alt="Póster Malverde"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Overlay oscuro para legibilidad */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
        }}
      />

      {/* Contenido */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 1.5rem",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#e8c97a",
            marginBottom: "1.5rem",
          }}
        >
          Un cortometraje de Claudia Gordillo
        </p>

        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(72px, 14vw, 160px)",
            letterSpacing: "8px",
            color: "#e8c97a",
            margin: "0 0 1.5rem",
            lineHeight: 1,
          }}
        >
          MALVERDE
        </h1>

        <p
          style={{
            maxWidth: "600px",
            fontSize: "clamp(14px, 2vw, 17px)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.75)",
            margin: "0 0 2.5rem",
          }}
        >
          Narra los ritmos de una tierra sembrada con caña de azúcar,
          codificando la naturaleza nativa y las formas en las que los cuerpos
          humanos y no humanos se mueven para sobrevivir.
        </p>

        <a
          href="#cronica"
          style={{
            display: "inline-block",
            padding: "12px 36px",
            border: "1px solid #e8c97a",
            color: "#e8c97a",
            fontFamily: "'Barlow', sans-serif",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "background 0.25s, color 0.25s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "#e8c97a";
            (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "#e8c97a";
          }}
        >
          Explorar
        </a>
      </div>

      {/* Flecha scroll */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        />
      </div>
    </section>
  );
}
