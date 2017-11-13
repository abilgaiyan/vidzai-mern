const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./models/users');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys : [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// For Production environment
if (process.env.NODE_ENV ==='production'){
  // Express will serve up production assets
  // like our main.js or main.css file!
  app.use(express.static('/client/build'));

  
  // Express will server index.html file
  // if it does'not reconizes the route
  // code will execute for client side router defined 

  const path = require('path');
  app.get('*', (req, res) =>{
     res.sendfile(path.resolve(__dirname, 'client','build','index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log('listening on port', PORT);
})

// https://quiet-eyrie-51962.herokuapp.com/