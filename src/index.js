const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const setUpAndStartServer = async () => {

    //create the express app
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
        // console.log(process.env);
    });
};

setUpAndStartServer();