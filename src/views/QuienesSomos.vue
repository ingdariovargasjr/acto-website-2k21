<template>
<div id="view-about">
    <div class="position-relative">
		<div class="container">
			<div class="row section-header-height text-center">
				<div class="col align-self-center mt-0 mt-lg-5" data-aos="fade-in">
					<div class="row mt-5">
						<div class="col-lg-6 offset-lg-3">
							<img :src="require('@/assets/images/nosotros/cubo1.svg')" class="img-fluid d-block d-lg-none mb-5" width="400" style="margin: 0 auto;" />
						</div>
					</div>

					<h4 class="my-5">
						Somos un equipo multidisciplinario experto en Insurtech, que
						diseña y desarrolla soluciones tecnológicas adaptables,
						accesibles y escalables.
					</h4>
					<div class="row">
						<div class="col-lg-6 offset-lg-3">
							<h5>
								Nos motiva el desarrollo de soluciones para
								problemas que conocemos a fondo.
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<Fondo1/>
	</div>

	<div class="position-relative overflow-hidden">
		<div class="container-fluid">
			<div class="row section-full-height">
				<div class="container">
					<div class="row section-full-height" data-aos="fade-down">
						<div class="col-lg-8 offset-lg-2 align-self-center text-center">
							<h5 class="mb-4">
								Por que sabemos que cada acto que mejora la vida de una
								persona, se convertirá en una tendencia que multiplicada
								por miles, mejorará la calidad de vida de una sociedad.
							</h5>

							<h4 class="pb-5">
								En ACTO apostamos por la innovación
								como el camino para transformar y
								trascender.
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="animation-container overflow-hidden" data-aos="fade-left">
			<div class="container-fluid">
				<div class="row section-full-height nosotros-bg" style="opacity: 0.6;">
				</div>
			</div>
		</div>
	</div>

    <div class="position-relative">
        <div class="container">
            <div class="row section-full-height" data-aos="fade-in">
                <div class="col-lg-6 align-self-center">
                    <h2 class="mb-4">Nuestra trayectoria habla por nosotros</h2>
                    <h4 class="mb-4">
                        Nuestro equipo cuenta con 30 años
                        de experiencia en el mundo
                        financiero y de protección.
                    </h4>
                    <h5 class="mb-4">
                        Lo que nos permite un amplio panorama
                        para trazar la ruta de crecimiento de los
                        próximos años, una fórmula que combina
                        expertise, tecnología e innovación.
                    </h5>
                    <h6 class="page-title">
                        EXPERTISE + TECNOLOGÍA + INNOVACIÓN
                    </h6>
                </div>

                <div class="col-lg-6 col-xl-5 offset-xl-1 align-self-center">
                    <img :src="require('@/assets/images/nosotros/cubo2.svg')" class="img-fluid d-block d-lg-none" />
                </div>
            </div>
        </div>
        
        <Fondo1/>
    </div>

	<div class="position-relative">
		<div class="container">
			<div class="row section-full-height">
				<div class="col-lg-6 align-self-center">
					<img :src="require('@/assets/images/nosotros/cubo3.svg')" class="img-fluid d-block d-lg-none" />
				</div>

				<div class="col-lg-6 col-xl-5 offset-xl-1 align-self-center" data-aos="fade-in">
					<h2 class="mb-4">Hacemos lo que más nos gusta</h2>

					<h5 class="mb-4">
						Diseñamos, desarrollamos e
						implementamos soluciones
						Insurtech que responden a nuevas
						demandas o nichos de mercado,
						convirtiéndose en una gran
						oportunidad para nuestros aliados.
					</h5>

					<a><router-link to="/soluciones">Soluciones</router-link><i class="fas fa-chevron-right" style="font-size: 12px;"></i></a>
				</div>
			</div>
		</div>

		<Fondo1/>
	</div>

    <div class="container-fluid">
        <div class="row section-full-height bg-white">
            <div class="container">
                <div class="row section-full-height">
                    <div class="col-12 align-self-center text-center">
                        <h2 class="my-5 text-dark" data-aos="fade-in">Hemos desarrollado soluciones para:</h2>

                        <div class="row text-center">
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/coliman.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/berrymex.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/sayto.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/pelsa.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/aquagest.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/mip.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/dinamarkatvs.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/francoingles.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/supremacia.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/tsj.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/biozoo.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/cicej.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 offset-lg-2 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/shelo.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/magussa.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/2g.jpg')" class="img-fluid" />
                            </div>
                            <div class="col-6 col-md-3 col-lg-2 align-self-center mb-3" data-aos="fade-in">
                                <img :src="require('@/assets/images/nosotros/companies/omvexa.jpg')" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}

/* $(document).ready(function () { 
			//Variables
			var $cubo3 = $('#cubo3');

			//Funciones
            var actions = {
                cubo3Animation: function () {
                    setTimeout(function () {
                        $('.cubo2', $cubo3).show();
                        $('.cubo1', $cubo3).hide();
                        $('.cubo2 .derecha', $cubo3).fadeIn('slow', function () {
							$('.cubo3', $cubo3).show();
							$('.cubo2', $cubo3).hide();
							$('.cubo3 .arriba', $cubo3).fadeIn('slow');
                        });
                    }, 4000);
                }
            };

            function init() {
                actions.cubo3Animation();
            }

            init();
		});*/
</script>

<style>
body{
		overflow-x: hidden;
	}
</style>