const express = require('express');
const { title } = require('process');

const app = express()

app.get('/questions/:id/:title',(req,res)=>{
    res.send('This route handles all the questions.')
});

app.get('/users/:id/:username',(req,res)=>{

    let userId = req.params.id;
    let user = req.params.username;

    res.send('this route will handle '+user+' profile that has ID: '+userId)
});


app.listen(3000,()=>{
    console.log('server started on port 3000.');
})