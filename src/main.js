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
      document.querySelector('.card').innerHTML = '';
      document.querySelector('.card').appendChild(htmlLogin());
      break;
    case '#/home':
      document.querySelector('.home').appendChild(homeView());
      break;
  };
}

init();

//---------------------------------función de post--------------

let description = document.getElementById("description");
let saveComment = document.getElementById("saveComment");
//let savedPost = document.getElementById("savedPost");

const userPost = () => {
 let text = description.value;

 document.getElementById("savedPost").innerHTML = text;
}

saveComment.addEventListener('click', userPost);

