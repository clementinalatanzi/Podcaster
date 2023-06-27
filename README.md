# Podcaster

## Running the Application

## Development Mode
To run the application in development mode, follow these steps:

1. Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from the official Node.js website: https://nodejs.org

2. Open a terminal or command prompt and navigate to the root directory of the project.

Install the project dependencies by running the following command:

`npm install`

3. Start the development server by running the following command:

`npm run dev`

The application will be running in development mode at http://127.0.0.1:5180
 by default. Open your web browser and visit this URL to access the application.


## Production Mode
To run the application in production mode, follow these steps:

1. Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from the official Node.js website: https://nodejs.org

2. Open a terminal or command prompt and navigate to the root directory of the project.

Install the project dependencies by running the following command:


`npm install`


3. Once the build process is complete, start a local HTTP server to serve the optimized assets. You can use a tool like http-server by running the following command:

`npm run build`
`npx http-server dist`

The application will be running in production mode at http://localhost:8080 by default. Open your web browser and visit this URL to access the application.

In production mode, the assets will be concatenated and minified for better performance.
