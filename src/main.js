// Este es el punto de entrada de tu aplicacion
/*
import { myFunction } from './lib/index.js';

myFunction();

const buttonLogin1 = () => {
    let email = document.getElementById('email1').value;
    let pass = document.getElementById('pwd1').value

//Función para crear usuarios
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        // ...
    })
    .catch((error) => {
        let errorCode = error.code; 
        let errorMessage = error.message;
        alert(errorMessage);
        // ..

    });

}
const login = document.getElementById('login1');
login.addEventListener('click', buttonLogin1, false);


const buttonLogin2 = () => {
    let email2 = document.getElementById('email2').value;
    let pass2 = document.getElementById('pwd2').value

//Función para usuarios ya registrados
    firebase.auth().signInWithEmailAndPassword(email2, pass2)
  .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
    // ...
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    alert(errorMessage);
  });
}

const login2 = document.getElementById('login2');
login2.addEventListener('click', buttonLogin2, false);
*/

import {htmlLogin} from './lib/loginView.js'
import {loginUser} from './lib/loginLogic.js'
import {homeView} from './lib/homeView.js'


const init = () => {
  //en que url estoy?
  //estoy en home? pinto home
  //estoy en login? pinto login
  let url = window.location.hash;
  console.log(url);
  switch(url){
    case '':
    case '#/login':
      //pintar login
      document.querySelector('.card').innerHTML = htmlLogin;
      const login2 = document.getElementById('login2');
      login2.addEventListener('click', () => {
        let email2 = document.getElementById('email2').value;
        let pass2 = document.getElementById('pwd2').value
        loginUser(email2, pass2)
        .then((userCredential) => {
          //redireccion a home
          //pinto la foto del usuario          
          console.log('usuario logueado');
        })
        .catch((error) => {
          console.log('error: usuario NO logueado');
        });
      
      });
      break;
      case '#/home':
        //pintar home  
        document.querySelector('.home').innerHTML = homeView;
        const login2 = document.getElementById('login2');
        
        login2.addEventListener('click', () => {
          let card = document.getElementById("card");
          while (card.firstChild) {
          element.removeChild(card.firstChild);
}
          });
        
        };
        break;
  }


init();
const loginGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
  });
}

const googleAcc = document.getElementById('google');
googleAcc.addEventListener('click', loginGoogle, false);

//holi
