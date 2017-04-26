import axios from 'axios';
import URL from '../../../appconfig';

export function doActionPost(config) {
  if(config){
   return axios({
      url:`${URL.ROOT_URL}/`+config.url,
      method:'POST',
      data:config.data,
      Headers:[]
    });
  }
}

export function doActionGet(config) {
  if(config){
    return axios({
      url:`${URL.ROOT_URL}/`+config.url,
      method:'GET',
      Headers:[]
    });
  }
}