const autores = [
  "Alejandra Banguera",
  "Fanny Portela",
  "Geraldine Ortegón",
  "Julieth Méndez",
  "Felipe Heredia",
  "Alejandra Paternina",
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "3rem 1.5rem 1.5rem",
        fontFamily: "'Barlow', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Sección superior */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2.5rem",
            justifyContent: "space-between",
            marginBottom: "2.5rem",
          }}
        >
          {/* Logo y tagline */}
          <div style={{ maxWidth: "260px" }}>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "28px",
                letterSpacing: "3px",
                color: "#e8c97a",
                margin: "0 0 8px",
              }}
            >
              MAL<span style={{ color: "#fff" }}>VERDE</span>
            </p>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Proyecto académico de
              <br />
              periodismo digital
            </p>
          </div>

          {/* Autores */}
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                margin: "0 0 1rem",
                fontWeight: 500,
              }}
            >
              Equipo
            </p>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "6px 2rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {autores.map((nombre) => (
                <li
                  key={nombre}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      backgroundColor: "#e8c97a",
                      flexShrink: 0,
                    }}
                  />
                  {nombre}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            margin: "0 0 1.25rem",
          }}
        />

        {/* Pie */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "1px",
              color: "rgba(255,255,255,0.2)",
              margin: 0,
            }}
          >
            © 2026 Malverde — Todos los derechos reservados
          </p>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "1px",
              color: "rgba(255,255,255,0.2)",
              margin: 0,
            }}
          >
            Materia:{" "}
            <span style={{ color: "#e8c97a" }}>Periodismo Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
