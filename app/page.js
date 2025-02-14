"use client";

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

      {/* Sección de Testimonios */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonios</h2>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <p className="italic">"Los cursos cambiaron mi vida!"</p>
            <p className="font-bold">- Juan Pérez</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center mt-4 md:mt-0">
            <p className="italic">"Excelente formación y apoyo."</p>
            <p className="font-bold">- María López</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold">¡Únete a nosotros hoy!</h2>
        <Link href="/register" className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-500">
          Regístrate
        </Link>
      </section>
    </div>
  );
} 