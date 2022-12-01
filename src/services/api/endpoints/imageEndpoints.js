import axios from '../../axios/imagesApi.js'

const imagesEndpoints = {
    getCityImages: (cityName) => {
        return axios(`/cities/?search=${cityName}`)
            .then(data => {
                const nextURL = data.data?._embedded?.['city:search-results'][0]?._links['city:item']?.href;
                return fetch(nextURL)
            })
            .then(res => res.json())
            .then(data => {
                const nextURL = data._links?.['city:urban_area']?.href + 'images/';
                return fetch(nextURL)
            })
            .then(res => res.json())
            .then(data => {
                let photosURLs = []
                let images = data?.photos?.[0].image
                for (let key in images) {
                    photosURLs.push(images[key])
                }
                return photosURLs;
            })
    }
};

export default imagesEndpoints;