const express = require('express');
const server = express();
const port = 9050 || process.env.port;
const favouriteController = require('./controllers/favouriteControllers');
const breedsControllers = require('./controllers/breedsController');

server.use(express.json());
server.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})


server.get('/breeds', breedsControllers.getBreeds);
server.get('/breeds/:id', breedsControllers.getBreedById);

server.get('/favourites', favouriteController.getFavourites);
server.get('/favourites/:id', favouriteController.getFavouritesById);
server.post('/favourites', favouriteController.postFavourite);
server.delete('/favourites/:id', favouriteController.deleteFavouriteById);