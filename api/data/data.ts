import axios from 'axios';
import name from '../../pages/index';

const postData = {
  name
};

axios.post('/api/data', postData)
  .then(response => {
    console.log('Post request successful:', response.data);
  })
  .catch(error => {
    console.error('Error performing post request:', error);
  });
