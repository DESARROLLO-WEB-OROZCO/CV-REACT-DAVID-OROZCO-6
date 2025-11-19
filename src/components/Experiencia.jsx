import React from "react";

const experiencias = [
  { cargo: "Desarrollador Front-End", empresa: "Empresa A", año: 2024, descripcion: "Desarrollo de interfaces con React y optimización de rendimiento." },
  { cargo: "Desarrollador Junior", empresa: "Empresa B", año: 2023, descripcion: "Implementación de funcionalidades en aplicaciones web." },
  { cargo: "Practicante TI", empresa: "Empresa C", año: 2022, descripcion: "Soporte técnico y desarrollo de pequeñas herramientas internas." },
  { cargo: "Freelance - Landing Page", empresa: "Cliente D", año: 2021, descripcion: "Diseño y desarrollo de landing page responsiva." },
  { cargo: "DevOps Básico", empresa: "Empresa E", año: 2024, descripcion: "Automatización de despliegues y scripts de CI." },
  { cargo: "Proyecto Académico - Portafolio", empresa: "Proyecto U", año: 2020, descripcion: "Portafolio personal con React y Vite." },
  { cargo: "Tester Manual", empresa: "Empresa F", año: 2019, descripcion: "Pruebas funcionales y reporte de incidencias." },
  { cargo: "Asistente de Proyecto", empresa: "ONG G", año: 2018, descripcion: "Coordinación de tareas y documentación técnica." },
  { cargo: "Mantenimiento Web", empresa: "Empresa H", año: 2017, descripcion: "Actualizaciones de contenido y corrección de bugs." },
  { cargo: "Proyecto Final SENA", empresa: "SENA", año: 2023, descripcion: "Entrega de aplicación web con integración de API." }
];

export default function Experiencia() {
  return (
    <section>
      <h2>Experiencia</h2>
      {experiencias.map((exp, idx) => (
        <article key={idx} style={{ marginBottom: "1rem" }}>
          <h3>{exp.cargo} — <small>{exp.empresa}</small></h3>
          <p><strong>{exp.año}</strong> · {exp.descripcion}</p>
        </article>
      ))}
    </section>
  );
}
