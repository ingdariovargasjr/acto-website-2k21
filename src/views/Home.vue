<template>
  <div class="home">
    <div class="sections">
    <main role="main">
      <div data-section="1" class="active position-relative revealer">
        <div class="container">
          <div class="row section-header-height">
            <div class="col-lg-6 align-self-center" data-aos="fade-in">
              <h2 class="m-0" style="text-align: left;">Todo gran cambio inicia por un</h2>
              <img alt="ACTO logo" :src="require('@/assets/images/acto-logo.svg')" style="width: auto; height: auto">
            </div>
            <div class="col-lg-6 align-self-center">
              <img :src="require('@/assets/images/home/cubo1.svg')">
            </div>
          </div>
        </div>
       <Fondo1/>
    </div>

    <div data-section="2" class="position-relative revealer">
      <div class="container">
        <div class="row section-full-height">
          <div class="col-lg-6 align-self-center" data-aos="fade-in">
            <h3 style="text-align: left;">
              Nuestro propósito es mejorar la calidad de vida a través de la libertad financiera de manera fácil y accesible
            </h3>
          </div>
          <div class="col-lg-6 align-self-center">
            <img :src="require('@/assets/images/home/cubo2.svg')">
          </div>
        </div>
      </div>
      <Fondo1/>
    </div>

    <div data-section="4" class="position-relative revealer">
      <div class="container">
        <div class="row section-full-height">
          <div class="col-lg-6 align-self-center order-1 order-lg-0">
            <img :src="require('@/assets/images/home/cubo4.svg')">
          </div>
          <div class="col-lg-6 align-self-center order-0 order-lg-1" data-aos="fade-in">
            <h3 style="text-align: right;">
              Conectamos a empresas y personas con las industrias InsurTech y FinTech por medio de la tecnología y soluciones creativas
            </h3>
          </div>
        </div>
      </div>
      <Fondo1/>
    </div>

    <div data-section="5" class="position-relative revealer">
      <div class="container">
        <div class="row section-full-height">
          <div class="col-lg-6 offset-lg-3 text-center align-self-center">
            <img :src="require('@/assets/images/acto-full.svg')" class="img-fluid img-last mb-3" data-aos="fade-down" data-aos-duration="1000">
            <h4 data-aos="fade-in" data-aos-delay="1000">Creamos para trascender</h4>
          </div>
        </div>
      </div>
     <Fondo2/>
    </div>

  </main>
    
</div>

    
  </div>
</template>

<script>
// @ is an alias to /src

import Fondo1 from "../components/Fondo1.vue"
import Fondo2 from "../components/Fondo2.vue"

export default {
  name: "Home",
  components: {
    Fondo1,
    Fondo2
  }
};
</script>
