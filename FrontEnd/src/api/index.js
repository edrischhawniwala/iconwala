import axios from "axios";
import { v4 as uuid4 } from 'uuid'; 

const token = {
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzE5NzQyMDU5LCJleHAiOjE3MTk3NDM4NTl9.hPMOnTpNifbNS_ZIbLBgfwBD9e3AenJN4xTZx0I6w3Q",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzE5NzQyMDU5LCJleHAiOjE3MTk3NDkyNTl9.wahe60m0dP2cNQthBYffpxiX9fTynmkuztghd9x-ecY"
};

export function getConfig() {
  return {
    headers: {
      bearer: `${JSON.parse(localStorage.getItem('token') ?? {}).accessToken}`,
      Accept: "application/json",
    },
  };
}

/**
* 
* @param base64Data 
* @param name 
* @param desc 
* @param price 
* @param tags 
*/

export function upload(base64Data, name, desc, price, tags = []) {
  localStorage.setItem('token', JSON.stringify(token));
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
