const axios = require('axios');

async function fetch () {
    return await axios('https://trefle.io/api/v1/plants/search?token=RhKRa-adlcpW0LFy09dhzRJ2FDNkkgxz7trfadQ4FBw&page=1&q=coconut')
}

fetch().then((res) => {console.log(JSON.stringify(res))});