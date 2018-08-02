
import firebase from 'firebase/app';
import 'firebase/auth';
import config from '../environments/env.dev'

if (!firebase.apps.length) {
  console.log('Done');
  firebase.initializeApp(config);
}
const auth = firebase.auth();

const AuthService = {
  checkLogged() {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged(resolve,reject);
    })
  }
}


export default AuthService;
