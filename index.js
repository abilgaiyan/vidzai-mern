const express = require('express');
const app = express();

app.get('/', (req,res)=>{
   res.send({hi: 'hay ho lets go'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log('listening on port', PORT);
})

// https://quiet-eyrie-51962.herokuapp.com/