<template>
  <div id="view-bail">
    <div class="position-relative">
        <div class="container">
            <div class="row section-header-height">
                <div class="col-lg-6 align-self-center">
                    <h2>
                        Un acto de confianza
                        para apoyar tu negocio,
                        proyecto o idea
                    </h2>

                    <a class="btn btn-primary"><router-link to="/contacto">Conoce nuestros tipos de fianzas</router-link></a>
                </div>
                <div class="col-lg-6 col-xl-5 offset-xl-1 align-self-center">
                    <img :src="require('@/assets/images/fianzas/cubo1.svg')" class="img-fluid d-block d-lg-none mx-auto my-5" style="height: 300px;" />
                </div>
            </div>
        </div>

        <Fondo1/>
    </div>
    <div class="container">
        <div class="row section-full-height align-content-center">
            <div class="col-lg-6 custom-list mb-5" data-aos="fade-in">
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img :src="require('@/assets/images/fianzas/pipe.svg')" class="pipe" />
                    </div>
                    <div class="text align-self-center pl-3">
                        <span>Fianzas administrativas</span>
                    </div>
                    <div class="icon align-self-center pl-3">
                        <img :src="require('@/assets/images/fianzas/administrativas.svg')" class="img-fluid" />
                    </div>
                </div>

                <p>
                    Garantiza las adecuadas inversiones, de la entrega de bienes y
                    servicios, de la calidad de los materiales usadosy de los
                    empleados, etc.
                </p>
            </div>

            <div class="col-lg-6 custom-list mb-5" data-aos="fade-in">
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img :src="require('@/assets/images/fianzas/pipe.svg')" class="pipe" />
                    </div>
                    <div class="text align-self-center pl-3">
                        <span>Fianzas de crédito</span>
                    </div>
                    <div class="icon align-self-center pl-3">
                        <img :src="require('@/assets/images/fianzas/credito.svg')" class="img-fluid" />
                    </div>
                </div>

                <p>
                    Garantiza el pago de un crédito destinado al suministro de
                    combustible.
                </p>
            </div>

            <div class="col-lg-6 custom-list mb-5" data-aos="fade-in">
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img :src="require('@/assets/images/fianzas/pipe.svg')" class="pipe" />
                    </div>
                    <div class="text align-self-center pl-3">
                        <span>Fianzas de fidelidad</span>
                    </div>
                    <div class="icon align-self-center pl-3">
                        <img :src="require('@/assets/images/fianzas/fidelidad.svg')" class="img-fluid" />
                    </div>
                </div>

                <p>
                    Protege tu patrimonio de empleados que roben o cometan fraude.
                </p>
            </div>

            <div class="col-lg-6 custom-list mb-5" data-aos="fade-in">
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img :src="require('@/assets/images/fianzas/pipe.svg')" class="pipe" />
                    </div>
                    <div class="text align-self-center pl-3">
                        <span>Fianzas judiciales</span>
                    </div>
                    <div class="icon align-self-center pl-3">
                        <img :src="require('@/assets/images/fianzas/judiciales.svg')" class="img-fluid" />
                    </div>
                </div>

                <p>
                    Garantiza el adecuado procedimiento judicial, en caso de que
                    exista.
                </p>
            </div>

            <div class="col-lg-6 custom-list mb-5" data-aos="fade-in">
                <div class="d-flex mb-3">
                    <div class="align-self-center">
                        <img :src="require('@/assets/images/fianzas/pipe.svg')" class="pipe" />
                    </div>
                    <div class="text align-self-center pl-3">
                        <span>Otros productos y servicios</span>
                    </div>
                    <div class="icon align-self-center pl-3">
                        <img :src="require('@/assets/images/fianzas/otros.svg')" class="img-fluid" />
                    </div>
                </div>

                <p>
                    Programa específico desarrollado por ACTO para el adecuado
                    control de los proveedores.
                </p>
            </div>
        </div>
    </div>

<div class="container-fluid" style="background-color: #eee;">
    <div class="container">
        <div class="row section-full-height">
            <div class="col-lg-6 align-self-center">
                <h2 style="color: #00264D;">
                    Escríbenos para
                    obtener más
                    información
                </h2>
            </div>
            
            <div class="col-lg-6 col-xl-5 offset-xl-1 align-self-center">
                <form action="/fianzas" data-ajax="true" data-ajax-begin="onBegin" data-ajax-method="POST" data-ajax-success="onSuccess" id="form0" method="post" novalidate="novalidate">                    <div class="form-group">
                    <select class="form-control form-dark" id="Service" name="Service">
                        <option value="">Fianza de tu interés</option>
                        <option value="administrativas">Administrativas</option>
                        <option value="fidelidad">Fidelidad</option>
                    </select>
                    </div>
                    <div class="form-group">
                        <input class="form-control form-dark" data-val="true" data-val-required="El nombre es requerido" id="Name" name="Name" placeholder="Nombre" type="text" value="">
                    </div>
                    <div class="form-group">
                        <input class="form-control form-dark" data-val="true" data-val-required="El teléfono es requerido" id="Phone" name="Phone" placeholder="Teléfono" type="text" value="">
                    </div>
                    <div class="form-group">
                        <input class="form-control form-dark" data-val="true" data-val-required="El correo es requerido" id="Email" name="Email" placeholder="Correo" type="text" value="">
                    </div>
                    <button type="submit" class="btn btn-primary">Pedir información</button>
                </form>            
            </div>
        </div>
        </div>
    </div>
</div>


</template>

<script>
export default {

}
</script>

<style type="text/css">
							#cubo1 .particle0{fill:#007EFF;}
							#cubo1 .particle1{opacity:0.3;fill:#007EFF;}
							#cubo1 .particle2{opacity:0.2;fill:#007EFF;}
</style>