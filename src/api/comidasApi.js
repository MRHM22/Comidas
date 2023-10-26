import axios from 'axios';

const comidasApi =axios.create({
    baseUrl: 'www.themealdb.com/api/json/v1/1/'
});

export default comidasApi;