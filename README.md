BIBLIOTECA API – CRUD DE LIBROS
================================

En esta aplicacion estaremos creando una API REST basica creada con **Node.js + Express** para gestionar una colección de libros.  

------------------------------------------------------------
TECNOLOGÍAS UTILIZADAS
------------------------------------------------------------

- Node.js
- Express(necesitaremos una version de Node superior a la 18)
- Thunder Client para las pruebas necesarias
- Google y Copilot para el apoyo en la creación de contenido y documentación

------------------------------------------------------------
ESTRUCTURA DEL PROYECTO
------------------------------------------------------------

biblioteca-api/
├── src/
│    ├── app.js
│    ├── routes/
│    │     └── books.js
│    └── data/
│          └── books.js
├── package.json
└── README.md

------------------------------------------------------------
INSTALACIÓN Y EJECUCIÓN
------------------------------------------------------------

1. Instalar dependencias:
   npm install

2. Ejecutar el servidor:
   node src/app.js

El servidor se iniciará en:
http://localhost:3000

------------------------------------------------------------
ENDPOINTS DISPONIBLES
------------------------------------------------------------

GET /api/books
  - Obtiene todos los libros
  - Contiene filtros opcionales:
      ?author=nombre
      ?title=titulo

GET /api/books/:id
  - Obtiene un libro por su ID

POST /api/books
  - Crea un nuevo libro
  - Body en JSON:
    {
      "title": "string",
      "author": "string"
    }

PUT /api/books/:id
  - Actualiza completamente un libro a traves de la id que le demos
  - Body JSON:
    {
      "title": "string",
      "author": "string",
      "isRead": true
    }

PATCH /api/books/:id/read
  - Alterna el estado leído/no leído del libro deseado

------------------------------------------------------------
ALMACENAMIENTO DE DATOS
------------------------------------------------------------
Los datos se guardan en un array en memoria ubicado en:
src/data/books.js para hacer la prueba mas basica

La estructura de cada libro es la siguiente:
{
  "id": "string",
  "title": "string",
  "author": "string",
  "isRead": boolean,
  "createdAt": "fecha ISO"
}

------------------------------------------------------------
MANEJO DE ERRORES
------------------------------------------------------------
- 404 - Libro no encontrado
- 400 - Datos inválidos o incompletos

------------------------------------------------------------
DECISIONES TÉCNICAS
------------------------------------------------------------
- Se utiliza Express por su simplicidad para crear APIs REST.
- Se mantiene un almacenamiento en memoria para cumplir el requisito de la práctica.
- Se implementan filtros opcionales en el endpoint GET.
- Se añade un endpoint PATCH específico para alternar el estado de lectura.

------------------------------------------------------------
POSIBLES MEJORAS FUTURAS
------------------------------------------------------------
- Persistencia real con SQLite o derivados.
- Siento que no mejoraria nada mas, capaz el hacer el id auto incremental pero nada mas, al final
  lo que busco con esta práctica es un programa básico, simple y eficaz, algo que si volvieramos 
  mas elaborado eliminariamos tanto en simpleza como en lo básico del programa.
