import axios from 'axios';

const baseUrl = 'https://arisan-app.herokuapp.com/api/v1/arisan/';

export const searchApi = (payload, headers) => {
  return axios({
    method: 'GET',
    url: baseUrl + 'search?idArisan=' + payload,
    headers: {
      authorization: `Bearer ${headers}`,
    },
  });
};
