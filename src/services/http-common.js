import axios from 'axios';

const BASE_URL = 'https://angular-api-7ea1e.firebaseio.com/';

export default axios.create({
  baseURL: BASE_URL
});

