const axios = require('axios');

exports.fetchTopStories = async () => {
  try {
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYT_API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};
