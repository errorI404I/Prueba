import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // Lógica de autenticación aquí
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Correo electrónico" 
                    required 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Contraseña" 
                    required 
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login; 