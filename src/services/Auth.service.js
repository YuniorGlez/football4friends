
import firebase from 'firebase/app';
import 'firebase/auth';
import DBAPI from './DB.service'
import config from '../environments/env.dev'
import { createSecureServer } from 'http2';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();


const AuthService = {
  checkLogged() {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged(resolve, reject);
    })
  }
  ,
  createUser(user) {
    return new Promise(async (resolve, reject) => {
      const infoUser = await this.findUser(user.phone);

      if(infoUser){
        resolve(infoUser);
      }else{
        this
      }

    })
  }
  ,
  checkIfExists(phone){

  }
}


export default AuthService;
