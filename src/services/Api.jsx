const axios = require('axios');

const API_KEY = '28680578-0134f3825289708f0e9c58378';
const STANDARD_PARAMS = '&image_type=photo&orientation=horizontal';

// export const galleryFetch = async (searchName, currentPage) => {
//   const fetchingData = await axios.get(
//     `https://pixabay.com/api/?key=${API_KEY}&q=${searchName}${STANDARD_PARAMS}&page=${currentPage}&per_page=12`
//   );
//   const recievedData = await fetchingData.data;

//   return recievedData.hits;
// };

export const Api = {
  galleryFetch: async (searchName, currentPage) => {
    const fetchingData = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchName}${STANDARD_PARAMS}&page=${currentPage}&per_page=12`
    );

    const recievedData = await fetchingData.data;

    return recievedData.hits;
  },
};
