# Welcome to Airplane Booking System

## Project Setup

- Clone the repository on your local machine
- Execute `npm install ` on the same path as of your root directory of the project
- Create a `.env` file in the root directory of the project and add the following variables
  - `PORT` : Port number on which you want to run the server
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json 

```

{
  "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flight_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```
