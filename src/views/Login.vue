<template>
<div class="position-relative">
    <div class="container">
        <div class="row section-header-height">
            <div class="col-lg-6 align-self-center" data-aos="fade-in" data-aos-delay="200">
                <h2 class="mb-5">
                    Qué bueno es verte
                    de regreso
                </h2>

                <a class="btn btn-primary mb-3"><router-link to="/soporte">Soporte</router-link></a>
                <a class="btn btn-primary mb-3 ml-3"><router-link to="/FAQ">Preguntas frecuentes</router-link></a>
            </div>
            
        <div class="col-lg-6 col-xl-5 offset-xl-1 align-self-center aos-init aos-animate" data-aos="fade-in" data-aos-delay="200">
            <form action="/login" data-ajax="true" data-ajax-begin="onBegin" data-ajax-method="POST" data-ajax-success="onSuccess" id="form0" method="post" novalidate="novalidate">
            <div class="form-group">
                <input class="form-control" data-val="true" data-val-required="The Username field is required." id="Username" name="Username" placeholder="Nombre de usuario o email" type="text" value="">
            </div>
            <div class="form-group">
                <input class="form-control" data-val="true" data-val-required="The Password field is required." id="Password" name="Password" placeholder="Contraseña" type="text" value="">
            </div>
                <button type="submit" class="btn btn-primary mb-3">Acceder</button>
            </form>
                <p>¿Problemas para ingresar a tu cuenta?</p>
                <p>Recupera tus datos de acceso <a href="#" style="text-decoration: underline;">aquí</a></p>
            </div>
    </div>
</div>
    <Fondo1/>
</div>
</template>

<script>
import Fondo1 from "../components/Fondo1.vue"
export default {
    name: "Login",
    components: {
        Fondo1
    }

}
</script>

<style>

</style>