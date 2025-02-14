"use client";

import React from 'react';

const ImageUpload = () => {
    const handleImageUpload = (event) => {
        // Lógica para subir la imagen a Cloudinary
    };

    return (
        <div>
            <input type="file" onChange={handleImageUpload} />
        </div>
    );
};

export default ImageUpload; 