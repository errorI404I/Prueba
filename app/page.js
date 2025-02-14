"use client";

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

      {/* Sección Sobre Nosotros */}
      <section className="text-center p-10 bg-white">
        <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
        <p className="text-gray-600">En nuestro centro, ofrecemos una variedad de cursos diseñados para ayudarte a alcanzar tus metas.</p>
        <Image src="/path/to/image.jpg" alt="Sobre Nosotros" width={500} height={300} className="mt-4 rounded-lg" />
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

      {/* Sección de Testimonios */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonios</h2>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            {/* <p className="italic">"Los cursos cambiaron mi vida!"</p> */}
            <p className="font-bold">- Juan Pérez</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center mt-4 md:mt-0">
            {/* <p className="italic">"Excelente formación y apoyo."</p> */}
            <p className="font-bold">- María López</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold">¡Únete a nosotros hoy!</h2>
        <Link href="/registro" className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-500">
          Regístrate
        </Link>
      </section>
    </div>
  );
} 