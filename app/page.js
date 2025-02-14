import React from 'react';
import Link from 'next/link'; // Cambia a la importación de Next.js

const Home = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">
                Bienvenido al Centro de Entrenamiento
            </h1>
            <div className="mt-4">
                <Link href="/login" className="text-blue-500 hover:underline">Iniciar Sesión</Link>
                <Link href="/image-upload" className="ml-4 text-blue-500 hover:underline">Subir Imagen</Link>
                <Link href="/about" className="ml-4 text-blue-500 hover:underline">Ir a "Quiénes Somos"</Link>
            </div>
        </div>
    );
};

export default Home; 