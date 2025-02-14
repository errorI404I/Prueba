Mejoras para la Página de Inicio del Centro de Entrenamiento

Objetivo

Actualizar la página de inicio (pages/index.js o app/page.tsx) para que tenga un diseño atractivo, moderno y alineado con el estilo del ejemplo proporcionado.

Requisitos de Diseño

Colores: Usar tonos verdosos y azul aguado para el diseño.

Secciones:

Hero Section: Una imagen de fondo llamativa con un mensaje inspirador y un botón de acción.

Sobre Nosotros: Pequeña introducción con una imagen representativa.

Servicios: Tarjetas o iconos representando los cursos y certificaciones.

Testimonios: Opiniones de usuarios con un diseño atractivo.

Call to Action (CTA): Un botón prominente para registrarse o conocer más.

Tipografía: Moderna y legible.

Animaciones: Pequeñas transiciones y efectos de hover para mejorar la interactividad.

Implementación en Código

1. Instalar Tailwind CSS (si no está instalado):

npm install tailwindcss

2. Actualizar index.js o page.tsx con el nuevo diseño:

Incluir un Hero Section con una imagen de fondo y un botón llamativo.

Agregar tarjetas (cards) con información de los cursos.

Incluir testimonios estilizados.

Ejemplo de estructura en JSX:

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-green-400 to-blue-300 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-white">Bienvenido a Nuestro Centro de Entrenamiento</h1>
        <p className="text-lg text-gray-200 mt-4">Transforma tu vida con nuestros cursos y certificaciones</p>
        <Link href="/cursos" className="mt-6 px-6 py-3 bg-white text-green-600 font-bold rounded-lg shadow-lg hover:bg-gray-200">
          Ver Cursos
        </Link>
      </section>

      {/* Sección de Servicios */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold text-green-600">Certificaciones</h3>
          <p className="text-gray-600">Obtén certificados avalados internacionalmente.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold text-green-600">Cursos</h3>
          <p className="text-gray-600">Aprende con expertos en entrenamiento.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold text-green-600">Blog</h3>
          <p className="text-gray-600">Descubre consejos y novedades.</p>
        </div>
      </section>
    </div>
  );
}

Tareas para Cursor AI

Aplicar diseño atractivo a la Home Page siguiendo esta estructura.

Optimizar código para que sea más limpio y modular.

Agregar imágenes o placeholders en donde sea necesario.

Incluir animaciones suaves para mejorar la experiencia de usuario.

💡 Cursor AI debe asegurarse de que la página de inicio sea responsiva, con buen diseño y cumpla con los requerimientos visuales.

