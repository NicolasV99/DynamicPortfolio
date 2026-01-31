# Overview

Dynamic Portfolio Web Application

The purpose of writing this software was to deepen my understanding of backend web development and Server-Side Rendering (SSR). As a software developer, I wanted to move beyond static HTML files and learn how to build scalable applications where content is generated dynamically on the server based on data structures. This project allowed me to practice setting up a server environment, managing routes, handling HTTP requests (GET and POST), and implementing a templating engine to separate logic from presentation.

The software is a fully responsive personal portfolio website. It features a dynamic Home page that renders skills and experience from a server-side dataset, a Projects gallery that iterates through project objects to generate UI cards, and an interactive Contact form that processes user input via the server.

[Software Demo Video](https://youtu.be/GTf2B9ViWM4)

# Web Pages

* Home Page:

This is the landing page. It features a Hero section with a biography.
Dynamic Content: The "Technical Skills" grid and "Professional Experience" timeline are not hardcoded in HTML. Instead, they are rendered dynamically by iterating over arrays of data (skills and experience) sent from the Node.js server.

* Projects Page:

This page displays a gallery of my recent work.
Dynamic Content: The server passes a projectList object array to the view. EJS loops through this list to generate a card for each project, populating the title, description, and custom placeholder images automatically. This simulates how a real application would fetch data from a database.

* Contact Page:

A form interface for visitors to get in touch.
Dynamic Transition: When the user fills out the form and clicks "Send", the app sends a POST request to the server. The server processes the body of the request (using middleware) and renders a personalized "Thank You" response page displaying the user's name dynamically.


# Development Environment

* Tools: Visual Studio Code, Git/GitHub and the Integrated Terminal.

Programming Language: JavaScript (ES6+) running on the Node.js runtime environment.

* Libraries & Frameworks:

Express.js: Used as the web application framework to handle routing and server logic.
EJS (Embedded JavaScript): Used as the templating engine to generate HTML markup with plain JavaScript.
Body-Parser: Middleware used to parse incoming request bodies in a middleware before your handlers (specifically for the form data).

# Useful Websites

* Express.js Documentation - https://expressjs.com/

* EJS Documentation - https://ejs.co/

* Placehold.co - https://placehold.co/

* FontAwesome - https://fontawesome.com/

# Future Work

* Database Integration: Currently, data is stored in local arrays. I plan to integrate MongoDB to store projects and messages persistently.
* Email Service: Connect the contact form to an email API (like Nodemailer or SendGrid) so that form submissions send an actual email to my inbox.
* Dark Mode: Implement a toggle switch to change the CSS variables for a dark/light theme preference.
