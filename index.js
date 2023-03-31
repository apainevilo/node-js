const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(
    `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hola Mundo con Bootstrap 5</title>
        <!-- Enlace al archivo CSS de Bootstrap -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-e1j+Q2X9/y0TwZ/bC80J+IgwsF0aGtYrKy+w1OyUbl7VUJX6U4H+N4sM33TPTTgA" crossorigin="anonymous">
    </head>
    <body>
        <div class="container">
            <h1 class="display-1 text-center my-5">Hola Mundo!</h1>
            <p class="lead">Esta es una página de ejemplo utilizando Bootstrap 5 para el diseño y estilos.</p>
            <hr>
            <p>Puedes utilizar las clases y componentes de Bootstrap para crear una interfaz de usuario moderna y atractiva.</p>
        </div>
    
        <!-- Enlace al archivo JS de Bootstrap -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-eFdo9QJPLZYY+Oh/l8zMCpHjJgzfuL+LrYrnykcpuii07c9lJ2c7oyLzrbhrHY23" crossorigin="anonymous"></script>
    </body>
    </html>`
    
  );
});

app.listen(3000, () => {
  console.log('La aplicación está escuchando en el puerto 30000');
})