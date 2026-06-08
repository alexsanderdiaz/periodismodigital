import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Crónica", href: "/#cronica" },
  { name: "Poster", href: "/#poster" },
  { name: "Podcast", href: "/#podcast" },
  { name: "Video", href: "/#video" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#0a0a0a",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "'Barlow', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
          height: "60px",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "26px",
            letterSpacing: "3px",
            color: "#e8c97a",
            textDecoration: "none",
          }}
        >
          MAL<span style={{ color: "#fff" }}>VERDE</span>
        </Link>

        <ul
          className="nav-links"
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
          style={{
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
                transform:
                  i === 0 && isOpen
                    ? "translateY(6.5px) rotate(45deg)"
                    : i === 2 && isOpen
                      ? "translateY(-6.5px) rotate(-45deg)"
                      : "none",
                opacity: i === 1 && isOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {isOpen && (
        <div
          className="nav-mobile"
          style={{
            backgroundColor: "#0d0d0d",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "1rem 1.5rem",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{
                  borderBottom:
                    i < navLinks.length - 1
                      ? "1px solid rgba(255,255,255,0.05)"
                      : "none",
                }}
              >
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "block",
                    padding: "1rem 0",
                    fontSize: "13px",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
