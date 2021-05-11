// Este es el punto de entrada de tu aplicacion
import { htmlLogin } from './lib/loginView.js'
import { homeView } from './lib/homeView.js';
import { onGetComments, deleteComment, getComment } from './lib/homeLogic.js';


const init = () => {
  //en que url estoy?
  //estoy en home? pinto home
  //estoy en login? pinto login
  let url = window.location.hash;
  switch (url) {
    case '':
    case '#/login':
      //pintar login
      document.cookie = "isEditing=false";
      document.querySelector('.card').innerHTML = '';
      document.querySelector('.card').appendChild(htmlLogin());
      break;
    case '#/home':
      document.querySelector('.home').appendChild(homeView());

      window.addEventListener('DOMContentLoaded', (e) =>{
        const postContainer = document.getElementById('post-container');
<<<<<<< HEAD
        const querySnapshot = await getComments();
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          postContainer.innerHTML += `<p class="homeComments">
          ${doc.data().description}
          </p>
          <button class="delete">Borrar</button>`
        });
        
      })

=======

        onGetComments((querySnapshot) =>{
          postContainer.innerHTML = '';
          querySnapshot.forEach(doc => {

            const task = doc.data();
            task.id = doc.id;

            postContainer.innerHTML += `<div class="homeComments">
            ${doc.data().description}
            </div>
            <div= "editAndDeleteBtn">
            <button class="delete" data-id= "${task.id}">Borrar</button>
            <button class="edit" data-id ="${task.id}">Editar</button>
            </div>`;

            const deleteBtn = document.querySelectorAll('.delete');
            deleteBtn.forEach(btn => {
              btn.addEventListener('click', async (e) => {
                e.preventDefault();
                await deleteComment(e.target.dataset.id);

              });
            });

            const editBtn = document.querySelectorAll('.edit');
            editBtn.forEach(btn => {
              btn.addEventListener('click', async (e) => {
                e.preventDefault();
                const doc = await getComment(e.target.dataset.id);
                const task = doc.data();

//Función donde se almacena una marca para ejecutar la condición del submit
                document.cookie = "isEditing=true";
                document.cookie= `idComment=${e.target.dataset.id}`;

                const taskForm = document.getElementById("task-form")
                  taskForm['description'].value = task.description
              });
            });


          });

        });
      });
>>>>>>> a75112482679d9fa96de72f0e81e42984ada1281
      break;

  };
}

init();


