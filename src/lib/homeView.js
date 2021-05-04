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


return divHome;

}