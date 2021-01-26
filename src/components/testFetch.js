// import { Component } from 'react';
// let fetchResult

// export default class FetchAPI extends Component{
//     componentDidMount() {
//         fetch(
//           'https://pixabay.com/api/?q=london&page=1&key=19626166-06d2415af44c148da2cace63b&image_type=photo&orientation=horizontal&per_page=12',
//         )
//           .then(res => res.json())
//             .then (({hits}) => {
//             //   console.log(...hits);
//               fetchResult = hits.map(hit => hit.previewURL)
//               console.log(fetchResult);
//               const {id, webformatURL, largeImageURL} = fetchResult
//               console.log(id, webformatURL, largeImageURL);
//             })
//               return fetchResult
//           };
// }

import axios from 'axios';
const API_KEY = '19626166-06d2415af44c148da2cace63b';
const BASE_URL = 'https://pixabay.com/api/?q=london&page=1&';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};
const GetImages = async ({ q, page }) => {
  try {
    const { data } = await axios.get('', {
      params: { q, page },
    });
    console.log(data.hits);
    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};
export default GetImages;
