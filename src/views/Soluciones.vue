<template>
  <div id="view-solutions" class="position-relative">
    <div class="container">
        <div class="row section-header-height">
            <div class="col-lg-6 align-self-center">
                <h6 class="page-title">SOLUCIONES</h6>
                <h2>Somos un equipo con amplio conocimiento de las industrias Insurtech y Fintech</h2>
                <p>
                    Estamos unidos por la pasión de facilitar el complejo negocio de los
                    seguros, las asistencias y las finanzas a través de la innovación y
                    tecnología intuitiva.
                </p>
                <h5>
                    No trates de definirnos, no es sencillo.
                </h5>
                <p>
                    Queremos ayudar a todas las cadenas de suministro y servicio que
                    integran a las industrias financieras, seguros y asistencias a lograr
                    mejores resultados y al mismo tiempo cambiar la manera en que
                    consumimos estos productos y servicios.
                </p>
                <p>
                    Creemos que el mundo merece una mejor experiencia y nosotros
                    estamos aquí para apoyar a todo aquel que sea parte de la industria y
                    quiera mejorar sus practicas.
                </p>
                <p>
                    ACTO encuentra y llena esos espacios que no permiten a estas industrias
                    maximizar sus ingresos y mejorar procesos. Nosotros somos el frente y el
                    fondo, encontramos el problema y ofrecemos las soluciones.
                </p>
                <p class="mb-5">
                    Apóyate de ACTO y conquista tu futuro.
                </p>

                <a class="btn btn-primary mb-3"><router-link to="/aseguradoras">Aseguradoras</router-link></a>
                <a class="btn btn-primary mb-3 mx-3"><router-link to="/empresas">Empresas</router-link></a>
                <a class="btn btn-primary mb-3"><router-link to="/asociados">Asociados</router-link></a>
            </div>
            <div class="col-lg-6 col-xl-5 offset-xl-1 align-self-center">
                <img :src="require('@/assets/images/soluciones/cubo1.svg')" class="img-fluid d-block d-lg-none mb-5" />
            </div>
        </div>
    </div>
    <Fondo1/>
</div>
</template>

<script>
        /* $(document).ready(function () {
			//Variables
            var $cubo1 = $('#cubo1');

			//Funciones
            var actions = {
                cubo1Animation: function () {
                    setTimeout(function () {
						$cubo1.addClass('active');
                    }, 4000);
                }
            };

            function init() {
                actions.cubo1Animation();
            }

            init();
		}); */
import Fondo1 from "../components/Fondo1.vue"

export default {
    name: "Soluciones",
    components: {
        Fondo1
    }

}
</script>

<style>

</style>