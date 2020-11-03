import Axios from 'axios';

const baseUrl = 'https://fir-cows-958ae.firebaseio.com/react-goats.json';

const getGoats = () => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}`)
    .then((response) => {
      const goatData = response.data;
      const goats = [];
      if (goatData) {
        Object.keys(goatData).forEach((goatId) => {
          goats.push(goatData[goatId]);
        });
      }
      resolve(goats);
    }).catch((error) => reject(error));
});

export default { getGoats };
