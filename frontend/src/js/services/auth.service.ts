let initialNumber = 0;
import { LoginAction, LoginActionType, LoginResponse, LoginRequestPayload } from '../constants'
import axios from 'axios';
import history from "../utils/historyUtils";
const ROOT_URL = "http://localhost:8000/";

export default class AuthService {
  // created sigin api function
  static login(payload: LoginRequestPayload){

      const url = `/api/auth/token/obtain/`;
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
            "X-Auth-Token": '',
          }
        }
      );
      return request;
    }

    static isLoggedIn = () => {
      // attempt to grab the token from localstorage
      const storedToken = localStorage.getItem('token')

      console.log(storedToken,"kkk")
      // if it exists
      if (storedToken) {
        // parse it down into an object       
        return true;
      }
      return false;
    }
    
    static loggedIn(token) {
      // set a stringified version of our token to localstorage on our domain
      localStorage.setItem('token', JSON.stringify(token));

      // redirect them to home!
      setTimeout(() => {
        history.push('/home');        
      }, 1000);
      console.log('pushed', token)
    }

    static logout() {
      console.log('dfd')
      localStorage.removeItem('token');
      history.push('/');
    }

}