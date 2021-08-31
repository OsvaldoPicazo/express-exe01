const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.get('/home', (request, response)=>{

    response.send('<h1>Welcome Globetrotters</h1>')
})

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost: 3000`)
  })

