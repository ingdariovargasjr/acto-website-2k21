<template>
  <div id="view-insurance">
    <div class="position-relative">
        <div class="container">
            <div class="row section-header-height">
                <div class="col-lg-6 align-self-center" data-aos="fade-in">
                    <h2>
                        Vive tranquilo, nosotros cuidamos de ti
                    </h2>
                    <p>
                        En Acto desarrollamos los mejores productos del mercado ya que se adaptan a
                        las necesidades de cada etapa e hicimos posible que cada seguro te ofrezca un
                        excelente servicio al mejor precio.
                    </p>
                    <p>Con un solo click podemos protegerte a ti y a los que más amas.</p>
                </div>
                <div class="col-lg-6 col-xl-5 offset-xl-1 align-self-center">
                    <img :src="require('@/assets/images/soluciones/aseguradoras/cubo1.svg')" class="img-fluid d-block d-lg-none" />
                </div>
            </div>
        </div>

        <Fondo1/>
    </div>

    <div class="container">
        <div class="row section-full-height">
            <div class="col align-self-center">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="insurance-card">
                            <div class="insurance-body">
                                <h4 class="mb-4">Salud</h4>
                                <a class="btn btn-primary btn-transparent mb-3"><router-link to="/salud">Comprar</router-link></a>
                            </div>

                            <div class="animation-container">
                                <div class="insurance-bg image-bg salud"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
						<div class="insurance-card">
							<div class="insurance-body">
								<h4 class="mb-4">Vida</h4>
								<a class="btn btn-primary btn-transparent mb-3"><router-link to="/vida">Cotizar</router-link></a>
							</div>

							<div class="animation-container">
								<div class="insurance-bg image-bg vida"></div>
							</div>
						</div>
                    </div>
                    <div class="col-lg-4">
						<div class="insurance-card">
							<div class="insurance-body">
								<h4 class="mb-4">Hogar</h4>
								<a class="btn btn-primary btn-transparent mb-3"><router-link to="/hogar">Comprar</router-link></a>
							</div>

							<div class="animation-container">
								<div class="insurance-bg image-bg hogar"></div>
							</div>
						</div>
                    </div>
                    <div class="col-lg-4">
						<div class="insurance-card">
							<div class="insurance-body">
								<h4 class="mb-4">Empresa</h4>
								<a class="btn btn-primary btn-transparent mb-3"><router-link to="/empresa">Comprar</router-link></a>
							</div>

							<div class="animation-container">
								<div class="insurance-bg image-bg empresa"></div>
							</div>
						</div>
                    </div>
                    <div class="col-lg-4">
						<div class="insurance-card">
							<div class="insurance-body">
								<h4 class="mb-4">Auto</h4>
								<a class="btn btn-primary btn-transparent mb-3"><router-link to="/auto">Cotizar</router-link></a>
							</div>

							<div class="animation-container">
								<div class="insurance-bg image-bg auto"></div>
							</div>
						</div>
                    </div>
                    <div class="col-lg-4">
						<div class="insurance-card">
							<div class="insurance-body">
								<h4 class="mb-4">Motocicleta</h4>
								<a class="btn btn-primary btn-transparent mb-3"><router-link to="/motocicleta">Comprar</router-link></a>
							</div>

							<div class="animation-container">
								<div class="insurance-bg image-bg moto"></div>
							</div>
						</div>
                    </div>
                    <div class="col-lg-4">
                        <div class="insurance-card">
                            <div class="insurance-body">
                                <h4 class="mb-4">Viaje</h4>
                                <a class="btn btn-primary btn-transparent mb-3"><router-link to="/viaje">Comprar</router-link></a>
                            </div>

                            <div class="animation-container">
                                <div class="insurance-bg image-bg viaje"></div>
                            </div>
                        </div>
                    </div>
					<div class="col-lg-4">
						<div class="insurance-card">
							<div class="insurance-body">
								<h4 class="mb-4">Mascota</h4>
								<a class="btn btn-primary btn-transparent mb-3"><router-link to="/mascota">Comprar</router-link></a>
							</div>

							<div class="animation-container">
								<div class="insurance-bg image-bg mascota"></div>
							</div>
						</div>
					</div>
                </div>
            </div>
        </div>
    </div>

    <div class="position-relative">
        <div class="container">
            <div class="row section-header-height">
                <div class="col-lg-6 align-self-center" data-aos="fade-in">
                    <h2>
                        Estamos para ayudarte en todo momento
                    </h2>
                    <ul class="arrow-list ml-5">
                        <li><h5><a><router-link to="/contacto">Hablar con un asesor</router-link></a></h5></li>
                        <li><h5>COVID-19</h5></li>
                        <li><h5>Tuve un accidente</h5></li>
                        <li><h5><a><router-link to="/faq">Preguntas frecuentes</router-link></a></h5></li>
                    </ul>
                </div>
                <div class="col-lg-6 col-xl-5 offset-xl-1 align-self-center">
                    <img :src="require('@/assets/images/soluciones/aseguradoras/cubo1.svg')" class="img-fluid d-block d-lg-none" />
                </div>
            </div>
        </div>

        <Fondo1/>
    </div>

    <div class="container">
        <div class="row section-full-height">
            <div class="col align-self-center">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2>Promociones</h2>
                        <h5>Cuidamos de ti y también de tu bolsillo</h5>
                    </div>
                    <div class="col-lg-4 text-center">
                        <div class="promo-card mt-5 mb-4">
                            <img :src="require('@/assets/images/seguros/auto.jpg')" class="img-fluid" />
                        </div>

                        <h4 class="mb-5">-15% <br /> Seguro de Auto </h4>
                        <a class="btn btn-primary mb-3"><router-link to="/auto">Lo quiero</router-link></a>
                    </div>
                    <div class="col-lg-4 text-center">
                        <div class="promo-card mt-5 mb-4">
                            <img :src="require('@/assets/images/seguros/salud.jpg')" class="img-fluid" />
                        </div>

                        <h4 class="mb-5">12 MSI <br /> En cualquier seguro </h4>
                        <a class="btn btn-primary mb-3"><router-link to="/salud">Lo quiero</router-link></a>
                    </div>
                    <div class="col-lg-4 text-center">
                        <div class="promo-card mt-5 mb-4">
                            <img :src="require('@/assets/images/seguros/vida.jpg')" class="img-fluid" />
                        </div>

                        <h4 class="mb-5">-10% <br /> Seguro de Vida </h4>
                        <a class="btn btn-primary mb-3"><router-link to="/vida">Lo quiero</router-link></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-view />
</div>
</template>

<script>
import Fondo1 from "../components/Fondo1.vue"


export default {
  name: "Seguros",
  components: {
    Fondo1
  }
};
</script>

<style>

</style>