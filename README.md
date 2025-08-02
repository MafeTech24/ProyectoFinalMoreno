# 🛍️ Pixel&Moda

**Pixel&Moda** es un e-commerce moderno y elegante desarrollado con **React + Vite** que permite a los usuarios explorar, agregar al carrito y comprar productos de **ropa**, **joyería** y **electrónica**. Está completamente integrado con **Firebase Firestore**, lo que permite almacenar productos, generar órdenes de compra con ID único y guardar cada pedido con su respectiva fecha mediante `serverTimestamp()`.

Además, la interfaz ha sido optimizada con **Bootstrap** para ofrecer una experiencia visual atractiva y adaptable a distintos dispositivos. El sitio incluye funcionalidades dinámicas como control de cantidades en tiempo real, validación de formularios en el checkout, guardado en `localStorage`, impresión del ticket de compra, y más.

---

## ✨ Funcionalidades destacadas

- 🛒 Sistema de carrito de compras con **agregar**, **quitar**, **actualizar cantidad** y **vaciar carrito**
- 📦 Creación de órdenes de compra con ID automático en **Firebase**
- ⏱️ Registro de fecha/hora del pedido usando `serverTimestamp()`
- 💾 Guardado de la última orden en `localStorage` como respaldo
- 📋 Formulario de checkout con validación completa (nombre, email, teléfono)
- 🧾 Página de éxito de compra con **resumen de productos**, **total**, e **impresión**
- 🎨 Tarjetas de productos estilizadas, con botones y diseño responsivo

---

## 🚀 Tecnologías usadas

- ⚛️ **React** + **Vite** – SPA rápida y modular
- 🔥 **Firebase Firestore** – Base de datos NoSQL en la nube
- 📦 **Context API** – Manejo global del estado del carrito
- 🧭 **React Router DOM** – Ruteo dinámico y parametrizado
- 🎨 **React-Bootstrap** + **Bootstrap** – UI estilizada y adaptable
- 💻 `serverTimestamp`, `addDoc`, `getDoc` – Firestore SDK para backend ligero

---

## Accede al Sitio a traves del siguiente enlace:

https://pixelymoda.vercel.app/
