const axios = require('axios');
const options = {
  method: 'GET',
  url: 'https://nutritionix-api.p.rapidapi.com/v1_1/item',
  params: {upc: '49000036756'},
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com'
  }
};
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}