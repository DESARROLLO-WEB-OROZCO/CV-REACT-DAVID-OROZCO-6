import React from "react";
import "./StackTecnologias.css";

const tecnologias = [
  { name: "JavaScript", level: "intermedio" },
  { name: "React", level: "intermedio" },
  { name: "Node.js", level: "basico" },
  { name: "HTML", level: "avanzado" },
  { name: "CSS", level: "avanzado" },
  { name: "Git", level: "intermedio" },
  { name: "SQL", level: "basico" },
  { name: "TypeScript", level: "basico" },
  { name: "Vite", level: "intermedio" },
  { name: "Express", level: "basico" }
];

function colorClass(name) {
  const key = name.toLowerCase();
  if (key.includes("react")) return "tag-react";
  if (key.includes("javascript") || key.includes("js")) return "tag-js";
  if (key.includes("node")) return "tag-node";
  if (key.includes("css")) return "tag-css";
  if (key.includes("html")) return "tag-html";
  if (key.includes("git")) return "tag-git";
  return "tag-default";
}

export default function StackTecnologias() {
  return (
    <section>
      <h2>Stack de Tecnologías</h2>
      {tecnologias && tecnologias.length > 0 ? (
        <div className="tags-container">
          {tecnologias.map((tech, idx) => (
            <span
              key={idx}
              className={`tag ${colorClass(tech.name)}`}
              title={`Nivel: ${tech.level}`}
            >
              {tech.name} {tech.level === "avanzado" ? "★" : tech.level === "intermedio" ? "✶" : "•"}
            </span>
          ))}
        </div>
      ) : (
        <p>No hay tecnologías registradas.</p>
      )}
    </section>
  );
}
