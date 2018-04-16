const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const Contactus = mongoose.model('contactus');
const contactusTemplate = require('../services/emailTemplate/contactusTemplate');
module.exports = app =>{

    app.get('/api/contactus', async (req, res) =>{
       const contactus = await Contactus.find({_user: req.user.id});
         
       res.send(contactus);  
    });


    app.post('/api/contactus',  async (req,res) =>{
      const {name, email, mobile, message} = req.body;
      const contactus = new Contactus({
          name,
          email,
          mobile,
          message,
          createDate: Date.now(),
          updateDate: Date.now()

      });
    // Place to send mailer

   // const mailer = new Mailer(survey, surveyTemplate(survey) );
   // await mailer.send();
    await contactus.save();
    //req.user.credits -=1;
    //const user = await req.user.save();
    
    });

}