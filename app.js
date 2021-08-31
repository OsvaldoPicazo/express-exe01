const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.get('/home', (request, response)=>{

    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response)=>{
    response.sendFile(__dirname + '/views/about.html')
})

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost: 3000`)
  })

