import axios from 'axios';

const API_KEY = '19626166-06d2415af44c148da2cace63b';
const BASE_URL = 'https://pixabay.com/api';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const getImages = async ({ q, page }) => {
  console.log({
    q,
    page,
  });
  try {
    const { data } = await axios.get(``, { params: { q, page } });
    return data.hits;
  } catch (error) {
    console.error('ERROR => ', error);
  }
};

export default { getImages };
