# PreEntrega1 - Curso React - E-commerce Morf.ar

## Descripción

Este es el proyecto de la primera pre-entrega del curso de React. Se trata de un e-commerce llamado **Morf.ar** que permite a los usuarios visualizar y seleccionar categorías de comida. La aplicación está construida con React y utiliza Bootstrap para los estilos.

## Funcionalidades

- Barra de navegación con el nombre de la tienda (**morf.ar**) y categorías clickeables.
- Componente `CartWidget` que muestra un ícono de carrito con una cantidad hardcodeada.
- Componente `ItemListContainer` que muestra un mensaje de bienvenida usando una prop `greeting`.

## Tecnologías Utilizadas

- React
- Vite
- Bootstrap
- CSS Modules

## Instalación

1. Clona el repositorio:

   `git clone https://github.com/GimeSozzi/PreEntrega1_React_SozziGimena.git`

2. Navega a la carpeta del proyecto:

   `cd PreEntrega1_React_SozziGimena`

3. Instala las dependencias:

   `npm install`

4. Inicia el servidor de desarrollo:

   `npm run dev`

## Uso

Una vez que el servidor esté corriendo, accede a la aplicación en tu navegador en http://localhost:5173. Podrás interactuar con las categorías de productos y visualizar el carrito de compras.

## Estructura del Proyecto

src/
│
├── components/
│ ├── Brand.jsx
│ ├── Brand.css
│ ├── ButtonCategory.jsx
│ ├── ButtonCategory.css
│ ├── NavBar.jsx
│ ├── NavBar.css
│ ├── CartWidget.jsx
│ ├── CartWidget.css
│ └── ItemListContainer.jsx
│ └── ItemListContainer.css
├── App.jsx
├── main.jsx
└── App.css

## Notas

Morf.ar es un proyecto en desarrollo como parte de una pre-entrega para el curso de React. Se planea expandir la funcionalidad con más opciones de personalización, integración de métodos de pago y manejo de productos en futuras versiones.

## Visualiza Morf.ar en GitHub Pages

https://gimesozzi.github.io/PreEntrega1_React_SozziGimena/
