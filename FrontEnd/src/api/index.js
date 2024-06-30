import axios from "axios";
import { v4 as uuid4 } from 'uuid'; 

const token = {
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzE5NTk2NDMxLCJleHAiOjE3MTk1OTgyMzF9.wqxSwpEk-fwwvjb5QLMF74GDvs0rp6edH0P8bkDaVic",
  refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzE5NTk2NDMxLCJleHAiOjE3MTk2MDM2MzF9.QVect3IEUl_E_berGDyUgtrsDIuse4gOKmLNuaHLp1M"
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
