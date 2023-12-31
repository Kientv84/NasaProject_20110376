const http = require('http');

require('dotenv').config();

const app = require('../app');
const { mongoConnect } = require('./Services/mongo');
const { loadLaunchData } = require('../models/launches.model');
const { loadPlanetsData } = require('../models/planets.model');


const PORT = process.env.PORT || 8000;



const server = http.createServer(app);

async function startServer() {

    await loadPlanetsData();
    await mongoConnect();
    await loadLaunchData();

    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}...`);
    });
}

startServer();