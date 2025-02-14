import React from 'react';
import '../styles/globals.css';

export const metadata = {
    title: 'Centro de Entrenamiento',
    description: 'Página web del Centro de Entrenamiento',
};

const RootLayout = ({ children }) => {
    return (
        <html lang="es">
            <body>
                {children}
            </body>
        </html>
    );
};

export default RootLayout; 