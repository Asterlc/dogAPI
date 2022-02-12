const express = require('express');
const server = express();
const port = 9050 || process.env.port;
const favouriteController = require('./controllers/favouriteControllers');

server.use(express.json());
server.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})


server.get('/favourites', favouriteController.getFavourites);
server.get('/favourites/:id', favouriteController.getFavouritesById);
server.post('/favourites', favouriteController.postFavourite);