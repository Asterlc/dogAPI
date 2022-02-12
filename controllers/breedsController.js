const api = require('../api/api');

exports.getBreeds = async (req, res, next) => {
    try {
        const { data } = await api.get('breeds');
        return res.status(200).send({ Breeds: data });
    } catch (error) {
        throw res.status(400).send({ Error: error.message });
    }

}