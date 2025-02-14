**Contexto del Proyecto: Centro de Entrenamiento**

### **Descripción General**
Este proyecto consiste en la creación de una página web para un **Centro de Entrenamiento**. La web debe ser moderna, rápida y escalable, con las siguientes características:

- Inicio de sesión para usuarios.
- Administración de usuarios.
- Páginas principales: Home, Quiénes Somos, Precios.
- Sección de certificaciones y cursos.
- Capacidad para cambiar entre español e inglés.
- Soporte para 50 usuarios simultáneos.
- Posibilidad de cargar imágenes.
- Un blog integrado.
- Diseño con colores verdosos y azul aguado.
- Facilidad de edición para el administrador.

### **Tecnologías Recomendadas**

#### **Frontend (Interfaz de usuario)**
- **Framework:** Next.js (basado en React, optimizado para SEO y rendimiento).
- **Estilos:** Tailwind CSS (para un diseño rápido y eficiente).
- **Multilenguaje:** i18next (permite cambiar entre español e inglés).
- **Manejo de estado:** Context API o Zustand si es necesario.

#### **Backend (Lógica y gestión de datos)**
- **Servidor:** Node.js con Express.js (rápido y escalable).
- **Autenticación:** Firebase Auth o Auth0.
- **Base de Datos:**
  - **Opción 1:** PostgreSQL (si los datos son estructurados).
  - **Opción 2:** MongoDB (si se necesita mayor flexibilidad en los datos).

#### **Hosting y Almacenamiento**
- **Frontend:** Vercel (ideal para Next.js).
- **Backend:** Railway o Heroku.
- **Almacenamiento de imágenes:** Cloudinary o AWS S3.

### **Estructura del Proyecto**

#### **1. Frontend** (`/frontend`)
Ubicación: `pages/` (Next.js genera rutas automáticamente con los archivos en esta carpeta).

- `index.js`: Página de inicio (Home).
- `precios.js`: Página de precios.
- `about.js`: Página de "Quiénes somos".
- `certificaciones.js`: Página de certificaciones.
- `cursos.js`: Página de cursos.
- `blog.js`: Página del blog.
- `login.js`: Página de inicio de sesión.

Se usarán componentes reutilizables en `/components/`, por ejemplo:
- `Navbar.js`: Barra de navegación.
- `Footer.js`: Pie de página.

#### **2. Backend** (`/backend`)
Ubicación: Servidor Express con rutas en `routes/` y modelos en `models/`.

Ejemplo de **modelo de usuario** (`models/User.js`):
```js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);
```

Ejemplo de **ruta de autenticación** (`routes/auth.js`):
```js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.send('Usuario registrado');
});

module.exports = router;
```

#### **3. Base de Datos**

Si se usa **MongoDB**, la conexión se realiza en `server.js`:
```js
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB conectada'))
.catch(err => console.log(err));
```

Si se usa **PostgreSQL**, se instalaría **pg** (`npm install pg`) y se configuraría con `sequelize` o `pg-promise`.

### **Funcionalidades Clave**
1. **Inicio de Sesión y Administración de Usuarios**
   - Integración con Firebase Auth o Auth0.
   - Tokens JWT si se maneja autenticación manual en el backend.

2. **Cambio de Idioma (Español/Inglés)**
   - Implementación con `react-i18next`.
   - Archivos JSON con traducciones (`/locales/es.json`, `/locales/en.json`).

3. **Carga de Imágenes**
   - Uso de Cloudinary para optimizar imágenes sin afectar rendimiento.

4. **Blog Dinámico**
   - Uso de Strapi o Sanity.io para permitir ediciones sin tocar código.

### **Flujo de Desarrollo**
1. **Configurar el entorno** (Node.js, Next.js, Express, DB).
2. **Desarrollar el backend** (autenticación, rutas, lógica de negocio).
3. **Crear el frontend** (diseño con Tailwind, integración de datos con API).
4. **Implementar funcionalidades extra** (cambio de idioma, carga de imágenes, etc.).
5. **Desplegar** (Vercel para frontend, Railway/Heroku para backend).

---
Este documento sirve como referencia para **Cursor AI** al generar código y estructuras de archivos. Se debe seguir esta guía para garantizar coherencia en el desarrollo. 🚀

