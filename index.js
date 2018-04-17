const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
//const passport = require('passport');
const cookieSession = require('cookie-session');
require('./models/User');
require('./models/Survey');
require('./models/Contactus');
//require('./services/passport');
//console.log(keys.mongodbURL)

//mongoose.connect(keys.mongodbURL);
mongoose.connect('mongodb://vidzai:vidzai@ds145178.mlab.com:45178/vidzai-dev');


const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys : [keys.cookieKey]
    })
);

//app.use(passport.initialize());
//app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/contactusRoutes')(app);

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
     res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log('listening on port', PORT);
})

// https://quiet-eyrie-51962.herokuapp.com/