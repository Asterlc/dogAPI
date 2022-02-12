const api = require('../api/api');

exports.getBreeds = async (req, res, next) => {
    try {
        if (req && req.query && req.query.limit != undefined) {
            try {
                let limit = req.query.limit
                const { data } = await api.get('breeds');
                const limitedBreed = data.map(el => {
                    return {
                        name: el.name,
                        origin: el.origin,
                        bredFor: el.bredFor,
                        temperament: el.temperament,
                        weight: {
                            imperial: el.weight.imperial,
                            metric: el.weight.metric
                        },
                        height: {
                            imperial: el.height.imperial,
                            metric: el.height.metric
                        },
                        group: el.breedGroup,
                        lifeSpan: el.life_span,
                        image: el.image.url
                    }
                }).slice(0, limit);
                return res.status(200).send({ Breeds: limitedBreed });
            } catch (error) {
                throw res.status(400).send({Error: error.message});
            }
        }
        const { data } = await api.get('breeds');
        const breedInfo = data.map(el => {
            return {
                name: el.name,
                origin: el.origin,
                bredFor: el.bredFor,
                temperament: el.temperament,
                weight: {
                    imperial: el.weight.imperial,
                    metric: el.weight.metric
                },
                height: {
                    imperial: el.height.imperial,
                    metric: el.height.metric
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

exports.getBreedById = async (req, res, next) => {
    try {
        const id = req.params.id
        const { data } = await api.get(`breeds/${id}`);
        const breedIdInfo = {
            name: data.name,
            lifeSpan: data.life_span,
            temperament: data.temperament,
            origin: data.origin ? data.origin : 'Not Found',
            weight: {
                imperial: data.weight.imperial,
                metric: data.weight.metric
            },
            height: {
                imperial: data.height.imperial,
                metric: data.height.metric
            }
        }
        return res.status(200).send({ BreedInfo: breedIdInfo });
    } catch (error) {
        throw res.status(400).send({ Error: error.message });
    }
}

