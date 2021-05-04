<<<<<<< HEAD
export const homeView = () => { 

  const divHome = document.createElement('div');
  divHome.classList.add('containerHome');
  divHome.innerHTML = `
  <div class="containerHome">
  <div class="jumbotron" style="margin-bottom:0">
<h1>PARASOCIAL</h1>
<img src="./img/ghostHome.png" class ="ghostHome">
</div>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<a class="navbar-brand" href="#">Home</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collapsibleNavbar">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">¿Qué es ParaSocial?</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Foros</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Tu perfil</a>
    </li>    
  </ul>
</div>  
</nav>

<div class="container" style="margin-top:30px">
  <div class="col-sm-8">
    <textarea class="post" placeholder="Publica aquí tu contenido"></textarea>
    <button class="publicar" id="publicar">Publicar</button>
</div>
</div>

<div class="jumbotron text-center" style="margin-bottom:0">
<p>Footer</p>
</div>`
=======
import { homeLogic } from './homeLogic.js'
export const homeView = () => { /*html*/

  const divHome = document.createElement('div');
  divHome.classList.add('homelobby');
  divHome.innerHTML =
    `<div class = "homelobby">
    <div class="jumbotron" style="margin-bottom:0">
    <h1>PARASOCIAL</h1>
    <img src="./img/pngegg.png" id="ghostHome" >
    </div>
    
    <section id=navBar>
      <nav class="navbar navbar-default">
      <div class="container-fluid">
      <ul class="nav navbar-nav">
        <li><a href="#">¿Qué es ParaSocial?</a></li>
        <li><a href="#">Foros</a></li>
        <li><a href="#">Tu perfil</a></li>
    </ul>
  </div>
</nav>
    
    </section>


  <form id="task-form">
    <input type="text" id="title" class="form-control" class="Task Title" placeholder="Title" autofocus />
    
      <textarea id="description" rows="3" class="form-control" placeholder="Description"></textarea>
   

    <button class="saveComment" id="saveComment" type="submit">Guardar</button>

  </form>

  <div class="jumbotron text-center" style="margin-bottom:0">
    <p>Footer</p>
  </div>
  </div>
  `
  
  const taskForm = divHome.querySelector('#task-form');
  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = taskForm['title'].value;
    const description = taskForm['description'].value;
    console.log("titulo y descripcion", title, description);
    await homeLogic(title, description);

>>>>>>> 2116da76d13353f2533fde8aa8b10d27a8614ffb


  });

  return divHome;
}