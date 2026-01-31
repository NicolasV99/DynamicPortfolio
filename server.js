const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 1. Configuration
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// 2. Real Data (Simulating a Database)

// Project Data
const projects = [
    { 
        id: 1, 
        title: "Morgan Rice", 
        description: "Official website for the author Morgan Rice. Built with a focus on user experience and brand identity.", 
        url: "https://morganrice.net/",
        // Placeholder gris oscuro elegante
        image: "https://placehold.co/600x400/2c3e50/ffffff?text=Morgan+Rice" 
    },
    { 
        id: 2, 
        title: "The Richards Group", 
        description: "Corporate website design ensuring functionality and an attractive user interface.", 
        url: "https://therichardsgroup.co/",
        // Placeholder azul corporativo
        image: "https://placehold.co/600x400/007BFF/ffffff?text=The+Richards+Group" 
    },
    { 
        id: 3, 
        title: "Team Roastarr", 
        description: "A visually appealing platform created to bring across the client's message creatively.", 
        url: "https://teamroastarr.com/",
        // Placeholder naranja energético
        image: "https://placehold.co/600x400/e67e22/ffffff?text=Team+Roastarr" 
    }
];

// Skills Data
const skills = [
    "HTML5", "CSS3", "JavaScript", "Next.js", "Express.js", 
    "Python", "Java", "C++", "Elementor", "Divi", "Wix", "Git" // Agregué Git para completar 12 y que quede 6 y 6
];


//  Experience Data
const experience = [
    {
        company: "Luxury Presence",
        role: "Website Builder",
        date: "May 2022 - Present",
        type: "Remote",
        bullets: [
            "Develop custom websites using HTML5/CSS3 and Javascript ES6",
            "Edited on 60+ QA revisions of client UI, mainly injecting CSS and rearranging elements",
            "Implement +100 custom websites with responsive and accessible designs for all users"
        ]
    },
    {
        company: "MarketingHotmart - AmericanTruthMarketing",
        role: "Front-end Developer Freelance",
        date: "June 2021 - March 2022",
        type: "Remote",
        bullets: [
            "Designed and implemented 10+ responsive web designs according to customer requirements"
        ]
    }
];

// 3. Routes

// HOME ROUTE
app.get('/', (req, res) => {
    res.render('home', { 
        pageTitle: "Home", 
        skillsList: skills,
        experienceList: experience 
    });
});

// PROJECTS ROUTE
app.get('/projects', (req, res) => {
    res.render('projects', { 
        pageTitle: "My Projects", 
        projectList: projects 
    });
});

// CONTACT ROUTE
app.get('/contact', (req, res) => {
    res.render('contact', { pageTitle: "Contact Me" });
});

// POST ROUTE FOR CONTACT
app.post('/contact', (req, res) => {
    const userName = req.body.userName;
    res.send(`
        <h1>Thank you, ${userName}!</h1>
        <p>I have received your message. I will contact you at ${req.body.userEmail} soon.</p>
        <a href="/">Back to Home</a>
    `);
});

// 4. Start Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000 🚀');
});