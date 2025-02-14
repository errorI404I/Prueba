Mejoras para la Página de Inicio del Centro de Entrenamiento

Objetivo

Actualizar la página de inicio (pages/index.js o app/page.tsx) para que tenga un diseño atractivo, moderno y alineado con el estilo del ejemplo proporcionado.

Requisitos de Diseño

Colores: Usar tonos verdosos y azul aguado para el diseño.

Secciones:

Menú Superior: Barra de navegación fija con enlaces a todas las secciones.

Hero Section: Una imagen de fondo llamativa con un mensaje inspirador y un botón de acción.

Sobre Nosotros: Pequeña introducción con una imagen representativa.

Servicios: Tarjetas o iconos representando los cursos y certificaciones, con más espacio entre ellas.

Testimonios: Opiniones de usuarios con un diseño atractivo.

Call to Action (CTA): Un botón prominente para registrarse o conocer más.

Página de Registro: Un formulario donde los usuarios puedan registrarse y los datos se envíen a MongoDB.

Páginas por Sección: Cada sección tendrá su propia página independiente como prueba.

Tipografía: Moderna y legible.

Animaciones: Pequeñas transiciones y efectos de hover para mejorar la interactividad.

Inspiración de diseño: Basado en IONOS Digital Guide.

Implementación en Código

1. Instalar Tailwind CSS (si no está instalado):

npm install tailwindcss

2. Actualizar index.js o page.tsx con el nuevo diseño:

Incluir un Menú Superior con enlaces a todas las secciones.

Incluir un Hero Section con una imagen de fondo y un botón llamativo.

Agregar tarjetas (cards) con información de los cursos, aumentando el espacio entre ellas.

Incluir testimonios estilizados.

Crear una Página de Registro con un formulario que guarde datos en MongoDB.

Ejemplo de estructura en JSX:

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-green-400 to-blue-300 min-h-screen">
      {/* Menú Superior */}
      <nav className="bg-white shadow-md fixed w-full py-4 px-6 flex justify-between">
        <h2 className="text-green-600 font-bold text-xl">Centro de Entrenamiento</h2>
        <div>
          <Link href="/about" className="mx-4 text-gray-700">Quiénes Somos</Link>
          <Link href="/cursos" className="mx-4 text-gray-700">Cursos</Link>
          <Link href="/certificaciones" className="mx-4 text-gray-700">Certificaciones</Link>
          <Link href="/blog" className="mx-4 text-gray-700">Blog</Link>
          <Link href="/registro" className="mx-4 bg-green-500 text-white px-4 py-2 rounded-lg">Registrarse</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-32">
        <h1 className="text-5xl font-bold text-white">Bienvenido a Nuestro Centro de Entrenamiento</h1>
        <p className="text-lg text-gray-200 mt-4">Transforma tu vida con nuestros cursos y certificaciones</p>
        <Link href="/cursos" className="mt-6 px-6 py-3 bg-white text-green-600 font-bold rounded-lg shadow-lg hover:bg-gray-200">
          Ver Cursos
        </Link>
      </section>

      {/* Sección de Servicios */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 p-10">
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold text-green-600">Certificaciones</h3>
          <p className="text-gray-600">Obtén certificados avalados internacionalmente.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold text-green-600">Cursos</h3>
          <p className="text-gray-600">Aprende con expertos en entrenamiento.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold text-green-600">Blog</h3>
          <p className="text-gray-600">Descubre consejos y novedades.</p>
        </div>
      </section>
    </div>
  );
}

Página de Registro

import { useState } from 'react';

export default function Registro() {
  const [form, setForm] = useState({ nombre: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Registro</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" type="text" placeholder="Nombre" className="w-full p-2 mb-4 border" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" className="w-full p-2 mb-4 border" onChange={handleChange} />
        <input name="password" type="password" placeholder="Contraseña" className="w-full p-2 mb-4 border" onChange={handleChange} />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Registrarse</button>
      </form>
    </div>
  );
}

Tareas para Cursor AI

Aplicar diseño atractivo a la Home Page siguiendo esta estructura.

Optimizar código para que sea más limpio y modular.

Agregar imágenes o placeholders en donde sea necesario.

Incluir animaciones suaves para mejorar la experiencia de usuario.

Crear una página de registro funcional con MongoDB.

💡 Cursor AI debe asegurarse de que la página de inicio sea responsiva, con buen diseño y cumpla con los requerimientos visuales.

