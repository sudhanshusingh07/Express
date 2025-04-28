# Express Application

This repository contains examples of using Express.js for building web applications. It demonstrates basic routing, dynamic routing, and middleware usage.


### Files and Features

1. **[routing/app.js](01routing/app.js)**:
   - Demonstrates basic routing in Express.js.
   - Includes routes like `/`, `/profile`, and `/contect`.


2. **[dynamic_routing/app.js](02dynamic_routing/app.js)**:
   - Demonstrates dynamic routing in Express.js.
   - Example: `/profile/:username` dynamically handles routes based on the `username` parameter.

3. **[middleware/app.js](03middleware/app.js)**:
   - Demonstrates the use of middleware in Express.js.
   - Middleware logs a message before passing control to the next route or middleware.
  
4. **[template_engine/app.js](04template_engine/app.js)**:
   - Demonstrates the use of template engine in Express.js.
   - A template engine enables you to use static template files in your application. At runtime, the template engine
     replaces variables in a template file with actual values, and transforms the template into an HTML file sent to 
     the client. This approach makes it easier to design an HTML page.


## How to Run

1. Install [Node.js](https://nodejs.org/) if not already installed.
2. Navigate to the desired folder (e.g., `dynamic_routing`, `middleware`, or `routing`).
3. Run the following commands:
   ```bash
   npm install express
   node app.js
