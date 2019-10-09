import axios from 'axios';
import { params as appParams } from '../params';

const instance = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});

const rawGet = instance.get.bind(instance);
instance.get = (url, { params, ...config }) => {
  return rawGet(url, {
    params: {
      apikey: appParams.omdbApiKey,
      ...params,
    },
    ...config,
  });
};

export default instance;
