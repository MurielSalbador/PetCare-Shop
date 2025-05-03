#  PetCare Shop 

PetCare Shop es una tienda online especializada en productos para mascotas como comida, juguetes y accesorios. Es un sistema web diseñado para ofrecer una experiencia de compra sencilla para los usuarios, y una gestión clara y segura para los administradores.

## 🐾 Descripción del Sistema

- **Nombre del sistema**: PetCare Shop
- **Tipo de tienda**: Única (no es franquicia)
- **Acceso**: 100% online
- **Roles definidos**: Usuario común, Admin, Superadmin

## 👤 Roles y Permisos

###  Superadmin
El superadmin representa al dueño o programador del sistema. Tiene acceso total a todas las funcionalidades.

- Crear, editar y eliminar productos
- Ver historial de usuarios
- Crear nuevos administradores
- Editar configuración general del sistema
- Acceso a la pantalla de "Gestión de empleados"

###  Admin
Empleado encargado de la gestión de productos.

- Crear nuevos productos
- Editar precio o stock de productos existentes
- Visualizar usuarios y sus compras (solo lectura)
- Acceso restringido: no puede crear admins ni editar configuración general

###  Usuario común
Cliente que navega la tienda desde la app.

- Registro de cuenta
- Ver y comprar productos
- Gestionar su carrito
- Ver historial de pedidos
- Editar su perfil

## 🔧 Gestión de Roles en la Interfaz

- Menús adaptados según el rol
- Rutas protegidas para evitar accesos no autorizados
- Botones y pantallas específicas según el tipo de usuario
  - Ej. “Crear Admin” solo visible al Superadmin
- Acceso mínimo y necesario para cada tipo de usuario

## 🔐 Seguridad

- Sistema de autenticación con rutas protegidas
- Gestión de sesiones por tipo de usuario
- Restricción de vistas y botones según el rol del usuario

## 🚀 Tecnologías

- Frontend: HTML, CSS, JavaScript
- Backend: Flask, Django, Node.js
- Base de datos: MySQL, PostgreSQL
- Autenticación: JWT o sesiones con roles

## 📝 Créditos

Trabajo práctico realizado por:
- Muriel Elen Salbador
- Juan Cruz De Angelis

