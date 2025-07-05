const axios = require('axios'); 
async function testApi() {
  try {
    const response = await axios.post(
      'https://wtm-booklistapi-production.up.railway.app/api/books',
      {
        title: "Node Test Book",
        description: "Added via Axios"
      }
    );
    console.log(response.data);
  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
  }
}

testApi();