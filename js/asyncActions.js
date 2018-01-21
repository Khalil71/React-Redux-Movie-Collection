// @flow

import axios from 'axios';
import { addAPIData } from './actionCreators';

export default function getAPIDetails(imdbID: string) {
  return (dispactch: Function) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        dispactch(addAPIData(response.data));
      })
      .catch(e => {
        console.error('axios error', e); // eslint-disable-line no-con
      });
  };
}
