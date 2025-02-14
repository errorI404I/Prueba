"use client";

import { useState } from 'react';

export default function Registro() {
  const [form, setForm] = useState({ nombre: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      // Manejar el éxito, por ejemplo, redirigir o mostrar un mensaje
      console.log("Usuario registrado con éxito");
    } else {
      // Manejar el error
      console.error("Error al registrar el usuario");
    }
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