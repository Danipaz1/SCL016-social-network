// Este es el punto de entrada de tu aplicacion
import { htmlLogin } from './lib/loginView.js'
import { loginUser, createUser } from './lib/loginLogic.js'
import { homeView } from './lib/homeView.js';
//import {createUser} from './createUser.js'
//import {htmlRegister} from './lib/createUserView.js'
//import {homeView} from './lib/homeView.js'


const init = () => {
  //en que url estoy?
  //estoy en home? pinto home
  //estoy en login? pinto login
  let url = window.location.hash;
  console.log(window.location);
  console.log('estas en', url);
  switch (url) {
    case '':
    case '#/login':
      //pintar login
<<<<<<< HEAD
      document.querySelector('.loginStyle').innerHTML = '';
      document.querySelector('.loginStyle').appendChild(htmlLogin());
    

//Usuarios ya registrados
      

//Usuarios nuevos no registrados
        
=======
      document.querySelector('.card').innerHTML = '';
      document.querySelector('.card').appendChild(htmlLogin());
>>>>>>> 2116da76d13353f2533fde8aa8b10d27a8614ffb
      break;
    case '#/home':
      document.querySelector('.home').appendChild(homeView());
      break;
  };
}

init();
