<template>
  <div id="view-memberships">

    <div class="position-relative">
        <div class="container">
            <div class="row section-header-height">
                <div class="col-lg-6 align-self-center" data-aos="fade-in">
                    <h2>Entendemos que la libertad nos permite crear, crecer y trascender</h2>
                    <p>
                        Y estamos concientes que existen límites y riegos que no
                        podemos controlar, pero si podemos estar preparados para
                        afrontarlos.
                    </p>
                </div>
                <div class="col-lg-6 col-xl-5 offset-xl-1 align-self-center">
                    <img :src="require('@/assets/images/soluciones/empresas/cubo1.svg')" class="img-fluid d-block d-lg-none mx-auto my-5" style="height: 50vw;" />
                </div>
            </div>
        </div>
        <Fondo1/>
    </div>

    <div class="position-relative">
        <div class="container">
            <div class="row section-full-height">
                <div class="col-lg-4 align-self-center order-1 order-lg-0 text-center" data-aos="fade-in">
                    <img :src="require('@/assets/images/soluciones/empresas/cubo2.svg')" class="img-fluid d-block d-lg-none mx-auto my-5" style="height: 300px;" />
                </div>
                <div class="col-lg-8 align-self-center order-0 order-lg-1" data-aos="fade-in">
                    <h3 class="mb-5">
                        En ACTO, hemos creado planes de
                        protección y asistencias para que tus
                        clientes y colaboradores tengan una
                        vida mejor
                    </h3>
                    <h5>Sin palabras complicadas, sin letras chiquitas.</h5>
                    <p class="mb-5">
                        En ACTO ofrecemos soluciones tecnológicas para integrar la industria financiera, seguros y
                        asistencias en las operaciones de tu empresa.
                    </p>

                    <a class="btn btn-primary mb-3" href="#">Soluciones B2B</a>
                    <!-- se supone que en el # va -> @Url.Action("SolutionsCompanies", "home")-->
                </div>
            </div>
        </div>

        <Fondo1/>
    </div>

    <div class="position-relative">
        <div class="container">
            <div class="row section-header-height">
                <div class="col-lg-6 align-self-center" data-aos="fade-in">
                    <h3 class="mb-5">
                        Construyamos juntos un
                        mundo mejor para todos,
                        seamos libres en cada
                        ACTO
                    </h3>
                    <div class="membership-card">
                        <h5>PLANES DE</h5>
                        <h4 class="font-weight-bold">Protección por asistencias y membresías</h4>
                        <p class="m-0">
                            <a href="#"><img :src="require('@/assets/images/membresias/flecha.svg')" width="25" /></a><small class="pl-4">Sitio externo</small>
                        </p>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-5 offset-xl-1 align-self-center">
                    
                </div>
            </div>
        </div>

        <Fondo1/>
    </div>
</div>
</template>

<script>
import Fondo1 from "../components/Fondo1.vue"


export default {
  name: "Membresias",
  components: {
    Fondo1
  }
};
</script>

<style>

</style>