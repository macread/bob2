//npm i express dotenv passport passport-auth0 express-session massive
// to install all the server dependencies

//set server parts first, then test to make sure it works.
//next, if using authentication, set up passport 

//require what we need
require('dotenv').config();
const fs = require('fs')
    , path = require('path')
    , express = require('express') 
    , session = require('express-session') 
    , jwt = require('express-jwt') 
    , bodyParser = require('body-parser')
    , mongoose = require('mongoose');

//deconstruct the data from the .env file
const {
    SERVER_PORT,
    SESSION_SECRET,
    JWT_SECRET,
    MONGODB
} = process.env;


const app = express(); //server

app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());

app.use(
  jwt({ secret: JWT_SECRET }).unless({
    path: [
      '/',
      '/auth/signup',
      '/auth/login',
      '/auth/forgot-password',
      '/auth/reset-password',
    ],
  }),
);

//

mongoose.connect(MONGODB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//setup sessions
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))



//server
//get that server going 
app.listen(SERVER_PORT, () => {

  fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
    require('./routes/' + file)(app);
  });  

    console.log('Listening on port ', SERVER_PORT);
})