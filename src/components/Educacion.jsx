import React from "react";

const formacion = [
  { institucion: "SENA", curso: "Técnico en Programación", año: 2023 },
  { institucion: "Udemy", curso: "React - De cero a experto", año: 2024 },
  { institucion: "Platzi", curso: "Curso de Git y GitHub", año: 2024 },
  { institucion: "Coursera", curso: "Fundamentos de JavaScript", año: 2022 },
  { institucion: "SENA", curso: "Diplomado Desarrollo Web", año: 2023 },
  { institucion: "Escuela X", curso: "Node.js Básico", año: 2021 },
  { institucion: "Academia Y", curso: "CSS avanzado", año: 2020 },
  { institucion: "Bootcamp Z", curso: "Metodologías Ágiles", año: 2022 },
  { institucion: "Universidad W", curso: "Bases de Datos", año: 2019 },
  { institucion: "Taller Local", curso: "Accesibilidad web", año: 2024 }
];

export default function Educacion() {
  return (
    <section>
      <h2>Educación y Cursos</h2>
      <ul>
        {formacion.map((f, i) => (
          <li key={i}>
            <strong>{f.institucion}</strong> — {f.curso} ({f.año})
          </li>
        ))}
      </ul>
    </section>
  );
}
