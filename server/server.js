let express = require('express');

let app = express(); 

app.use(express.static('server/public'));

const PORT = 5000;

app.listen(PORT, function(){
    console.log('App is running on ', PORT);
});



