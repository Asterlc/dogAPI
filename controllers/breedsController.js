const api = require('../api/api');

exports.getBreeds = async (req, res, next) => {
    try {
        const { data } = await api.get('breeds');
        const breedInfo = data.map(el => {
            return {
                name: el.name,
                origin: el.origin,
                bredFor: el.bredFor,
                weight: {
                    imperial: el.weight.imperial,
                    metric: el.weight.metric
                },
                group: el.breedGroup,
                lifeSpan: el.life_span,
                image: el.image.url
            }
        });
        return res.status(200).send({ Breeds: breedInfo });
    } catch (error) {
        throw res.status(400).send({ Error: error.message });
    }

}