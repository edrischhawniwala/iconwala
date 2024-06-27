import axios from "axios";
import { v4 as uuid4 } from 'uuid'; 

export function getConfig() {
  return {
      headers:{
        bearer : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzE5NTEzNDM4LCJleHAiOjE3MTk1MTUyMzh9.LAp68_JQwdFsZ03H_HPxzu47uMWho2Nx30_zJwQ7vKo',
        Accept: 'application/json'
      }
    };
  // return {
  //     headers:
  // {
  //  bearer :`${localStorage.token?.accessToken}`,
  //  Accept: 'application/json'
  // }
  //       
  //   };
}

/**
* 
* @param base64Data 
* @param name 
* @param desc 
* @param price 
* @param tags 
*/

export function upload(base64Data, name, desc, price, tags) {
  return axios.post(
      `${process.env.REACT_APP_API_ROOT_URL}/api/icon`,
      {
        "id": uuid4(),
        "iconPackId": uuid4(),
        "iconBase64": base64Data,
        "name": name,
        "tags": tags,
        "desc": desc,
        "price": price
      }, 
      getConfig()
    )
}
