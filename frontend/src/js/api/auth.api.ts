let initialNumber = 0;
import { LoginAction, LoginActionType, LoginRequestAction, LoginRequestPayload } from '../constants'
import axios from 'axios';
const ROOT_URL = "http://localhost:8000/";

export default class ApiUsers {
  // created sigin api function
  static login(payload: LoginRequestPayload){

      const url = `${ROOT_URL}api/auth/token/obtain/`;
      const request = axios.post(url,
          payload,
          {
              headers:
              {
                  "X-Api-Key": "AbCdEfGhIjK1",
                  "X-Auth-Token": ""
              }
          }
      );
      return request;
    }

    // created get user api function
    static fetchUsers(action){
      const url = `${ROOT_URL}api/customer`;
      console.log("fetch api key", action);
      const request = axios.get(url,
        {
          headers:
          {
            "X-Api-Key": "AbCdEfGhIjK1",
            "X-Auth-Token": '791922ae9ff0a1d560fc269feadd53eb2b13cf6a',
          }
        }
      );
      return request;
    }
}