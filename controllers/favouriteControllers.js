const api = require('../api/api');
const favouriteModel = require('../models/favouriteModel');

exports.getFavourites = async (req, res, next) => {
    try {
        const { data } = await api.get('favourites');
        return res.status(200).send({ Favourite: data });
    } catch (error) {
        console.log(`error :>>`, error);
        throw error
    }
}

exports.getFavouritesById = async (req, res, next) => {
    try {
        const id = req.params.id
        const { data } = await api.get(`favourites/${id}`);
        return res.status(200).send({ Favourite: data });
    } catch (error) {
        console.log(`error :>>`, error)
        throw res.status(400).send({ error })
    }
}

exports.postFavourite = async (req, res, next) => {
    try {
        const { data } = await api.post('/favourites', {
            image_id: req.body.image_id,
            sub_id: req.body.image_id
        });
        return res.status(201).send({ Message: 'Favourite created', Data: data });
    } catch (error) {
        console.log(`error PostFavourite:>>`, error)
        throw res.status(400).send({ error })
    }
}