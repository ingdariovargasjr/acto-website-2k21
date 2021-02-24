<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg fixed-top active @fixedNarvar" id="main-nav">
    <div class="container">
        <a class="navbar-brand m-0" href="#"><router-link to="/">
            <img :src="require('@/assets/images/acto_logo.png')" alt="Acto" loading="lazy" /></router-link>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="true" aria-label="Toggle main navigation">
            <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="main-navbar">
            <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle d-block d-lg-none" href="#" id="solutionsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><router-link to="/seguros">Seguros</router-link></a>
                    <a class="nav-link dropdown-toggle d-none d-lg-block" href="#" id="solutionsDropdown" role="button"><router-link to="/seguros">Seguros</router-link></a>
                    <div class="dropdown-menu" aria-labelledby="solutionsDropdown">
                        <a class="dropdown-item"><router-link to="/salud">Salud</router-link></a>
                        <a class="dropdown-item"><router-link to="/vida">Vida</router-link></a>
                        <a class="dropdown-item"><router-link to="/hogar">Hogar</router-link></a>
                        <a class="dropdown-item"><router-link to="/empresa">Empresa</router-link></a>
                        <a class="dropdown-item"><router-link to="/auto">Auto</router-link></a>
                        <a class="dropdown-item"><router-link to="/motocicleta">Motocicleta</router-link></a>
                        <a class="dropdown-item"><router-link to="/viaje">Viaje</router-link></a>
                        <a class="dropdown-item"><router-link to="/mascota">Mascota</router-link></a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link"><router-link to="/membresias">Membresias</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><router-link to="/quienes-somos">¿Por qué Acto?</router-link></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle d-block d-lg-none" href="#" id="solutionsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><router-link to="/soluciones">Soluciones</router-link></a>
                    <a class="nav-link dropdown-toggle d-none d-lg-block" href="#" id="solutionsDropdown" role="button"><router-link to="/soluciones">Soluciones</router-link></a>
                    <div class="dropdown-menu" aria-labelledby="solutionsDropdown">
                        <a class="dropdown-item"><router-link to="/aseguradoras">Para Aseguradoras</router-link></a>
                        <a class="dropdown-item"><router-link to="/empresas">Para Empresas</router-link></a>
                        <a class="dropdown-item"><router-link to="/asociados">Para Asociados</router-link></a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><router-link to="/fianzas">Fianzas</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><router-link to="/blog">Blog</router-link></a>
                </li>
            </ul>

            <ul class="navbar-nav d-flex">
                <li class="nav-item">
                    <a class="nav-link"><router-link to="/login">Login</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><router-link to="/contacto">Contacto</router-link></a>
                </li>
                <li class="nav-item">
                    <div class="nav-icon">
                        <a class="nav-link" href="#">
                            <i class="fas fa-comment"></i>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </div>
    <router-view />
    <div class="footer">
    <footer class="footer-container text-left"><div class="container">
        <div class="row">
            <div class="col-md-4 footer-contact">
                <img :src="require('@/assets/images/logo-azul.png')" alt="Acto" loading="lazy" class="img-fluid footer-logo mb-3">
                <p class="copyright">
                    COPYRIGHT 2020 - 2021 <br>
                    TODOS LOS DERECHOS RESERVADOS <br>
                    -
                </p>

                <p class="mb-1">
                    Av. Rub&eacute;n Dar&iacute;o 1109 <br>
                    Lomas providencia <br>
                    Guadalajara, Jalisco, M&eacute;xico
                </p>

                <a href="mailto:ventas@graciasacto.com" class="mail-link mb-1">ventas@graciasacto.com</a>

                <p class="contact mt-1 mb-1">
                    + 52 333 246 5397 <br>
                    + 52 333 246 5401
                </p>

                <ul class="navbar-nav flex-row social-list"><li class="nav-item">
                        <a class="nav-link" href="http://twitter.com/graciasacto"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://facebook.com/graciasacto"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://instagram.com/graciasacto"><i class="fab fa-instagram"></i></a>
                    </li>
                </ul></div>
            <div class="col-md-8 mt-3 mt-lg-0">
                <div class="row">
                        <div class="col-6 col-md-3 footer-links">
                            <p class="list-title"><a href="seguros.html">PRODUCTOS</a></p>
                            <ul class="footer-list"><li><a href="salud.html">SEGURO SALUD</a></li>
                                <li><a href="vida.html">SEGURO VIDA</a></li>
                                <li><a href="vida-entera.html">SEGURO VIDA ENTERA</a></li>
                                <li><a href="vida-devolucion.html">SEGURO CON DEVOLUCI&Oacute;N</a></li>
                                <li><a href="vida-jubilacion.html">SEGURO JUBILACI&Oacute;N</a></li>
                                <li><a href="vida-universidad.html">SEGURO UNIVERSIDAD</a></li>
                                <li><a href="hogar.html">SEGURO HOGAR</a></li>
                                <li><a href="empresa.html">SEGURO EMPRESA</a></li>
                                <li><a href="auto.html">SEGURO AUTO</a></li>
                                <li><a href="moto.html">SEGURO MOTOCICLETA</a></li>
                                <li><a href="viaje.html">SEGURO VIAJE</a></li>
                                <li><a href="mascota.html">SEGURO MASCOTA</a></li>
                            </ul></div>
                        <div class="col-6 col-md-3 footer-links">
                            <p class="list-title">NOSOTROS</p>
                            <ul class="footer-list"><li><a href="quienes-somos.html">&iquest;POR QU&Eacute; ACTO?</a></li>
                                <li>TRAYECTORIA</li>
                                <li>QU&Eacute; HACEMOS</li>
                                <li>CLIENTES</li>
                                <li>AVISO DE PRIVACIDAD</li>
                                <li>T&Eacute;RMINOS Y CONDICIONES</li>
                                <li>INFORMACI&Oacute;N LEGAL</li>
                            </ul></div>
                        <div class="col-6 col-md-3 footer-links">
                            <p class="list-title"><a href="soluciones.html">SOLUCIONES</a></p>
                            <ul class="footer-list"><li><a href="soluciones-aseguradoras.html">PARA ASEGURADORAS</a></li>
                                <li><a href="soluciones-empresas.html">PARA EMPRESAS</a></li>
                                <li><a href="soluciones-asociados.html">PARA ASOCIADOS</a></li>
                            </ul><p class="list-title"><a href="fianzas.html">FIANZAS</a></p>
                            <p class="list-title"><a href="membresias.html">MEMBRES&Iacute;AS Y ASISTENCIAS</a></p>
                        </div>
                            <div class="col-6 col-md-3 footer-links">
                                <p class="list-title"><a href="blog.html">BLOG</a></p>
                                <p class="list-title">DESCARGA APP</p>
                                <p class="list-title"><a href="login.html">LOG IN</a></p>
                                <ul class="footer-list"><li><a href="faq.html">PREGUNTAS FRECUENTES</a></li>
                                    <li><a href="login.html">ACCESO</a></li>
                                </ul><p class="list-title"><a href="contacto.html">CONTACTO</a></p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#cubo1 .particle0 {fill: #007EFF;}

#cubo1 .particle1 {opacity: 0.2;}

#cubo1 .particle2 {opacity: 0.3;}

#cubo2 .particle0{opacity:0.2;fill:#007EFF;}
#cubo2 .particle1{opacity:0.3;fill:#007EFF;}
#cubo2 .particle2{fill:#007EFF;}

#cubo3 .particle0 {
							opacity: 0.2;
							fill: #007EFF;
						}

						#cubo3 .particle1 {
							opacity: 0.3;
							fill: #007EFF;
						}

						#cubo3 .particle2 {
							fill: #007EFF;
						}

            #cubo4 .particle0 {
							opacity: 0.2;
							fill: #007EFF;
						}

						#cubo4 .particle1 {
							opacity: 0.3;
							fill: #007EFF;
						}

						#cubo4 .particle2 {
							fill: #007EFF;
						}

						#cubo4 .particle3 {
							opacity: 0.5;
							fill: #007EFF;
						}

						#cubo4 .particle4 {
							opacity: 0.7;
							fill: #007EFF;
						}

						#cubo4 .particle5 {
							opacity: 0.4;
							fill: #007EFF;
						}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: regular;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #437fce;
}

a .dropdown-item{
  font-weight: regular;
  color: #000000;
}
</style>
