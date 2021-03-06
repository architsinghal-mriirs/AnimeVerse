const express = require('express');
const bodyParser = require('body-parser');
const animeRoutes = require('./routes/anime.routes');
const reviewRoutes = require('./routes/reviews.routes');
const port = 5000;
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


animeRoutes(app);
reviewRoutes(app);

app.listen(port, ()=>{
    console.log("Server started on port ", port);
});
