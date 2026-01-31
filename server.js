const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 1. Configuración
app.set('view engine', 'ejs'); // Usamos EJS como motor de plantillas
app.use(express.static('public')); // Carpeta para CSS e imágenes
app.use(bodyParser.urlencoded({ extended: true })); // Para leer datos de formularios

// 2. Datos Simulados (Simulando una Base de Datos)
const projects = [
    { id: 1, title: "Weather Dashboard", description: "App de clima usando API", image: "weather.jpg" },
    { id: 2, title: "Budget Tracker", description: "Gestor de gastos con JS", image: "budget.jpg" },
    { id: 3, title: "ToDo List", description: "Lista de tareas interactiva", image: "todo.jpg" }
];

// 3. Rutas (Endpoints)

// RUTA INICIO (Home)
app.get('/', (req, res) => {
    res.render('home', { pageTitle: "Inicio" });
});

// RUTA PROYECTOS (Dinámica)
app.get('/projects', (req, res) => {
    // Enviamos la lista de proyectos a la vista
    res.render('projects', { pageTitle: "Mis Proyectos", projectList: projects });
});

// RUTA CONTACTO (Formulario)
app.get('/contact', (req, res) => {
    res.render('contact', { pageTitle: "Contáctame" });
});

// ... (tus rutas anteriores de GET) ...

// RUTA PARA PROCESAR EL FORMULARIO (POST)
app.post('/contact', (req, res) => {
    // Capturamos el dato que escribió el usuario (gracias a body-parser)
    const nombreUsuario = req.body.userName;
    
    // Renderizamos una respuesta personalizada (Podrías crear una vista 'success.ejs' si prefieres)
    // Aquí usamos res.send para simplificar y mostrar HTML directo generado por el servidor
    res.send(`
        <h1>¡Gracias por tu mensaje, ${nombreUsuario}!</h1>
        <p>Hemos recibido tus datos correctamente en el servidor.</p>
        <a href="/">Volver al inicio</a>
    `);
});

// ... app.listen(...)

// 4. Iniciar Servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000 🚀');
});