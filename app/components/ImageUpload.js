import React from 'react';

const ImageUpload = () => {
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        // Lógica para subir la imagen a Cloudinary
    };

    return (
        <div>
            <input type="file" onChange={handleImageUpload} />
        </div>
    );
};

export default ImageUpload; 