<template>
  <div id="view-blog">

    <div class="position-relative">
        <div class="container">
            <div class="row section-header-height">
                <div class="col-lg-6 align-self-center">
                    <h2>
                        Temas múltiples para
                        intereses diversos
                    </h2>
                </div>
                <div class="col-lg-6 col-xl-5 offset-xl-1 align-self-center">
                    <img :src="require('@/assets/images/blog/cubo1.svg')" class="img-fluid d-block d-lg-none" />
                </div>
            </div>
        </div>

        <Fondo1/>
    </div>

    <div class="container">
        <nav class="navbar navbar-expand-lg">
            <div class="container text-center">
                <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
                    <li class="nav-item mx-3">
                        <a class="nav-link"><router-link to="/blog">TENDENCIAS</router-link></a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link"><router-link to="/bloh">ACTUALIDAD</router-link></a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link"><router-link to="/blog">TECNOLOGÍA</router-link></a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link"><router-link to="/blog">FINANZAS</router-link></a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link"><router-link to="/blog">INSURTECH</router-link></a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link"><router-link to="/blog">NEGOCIOS</router-link></a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="row">
                <div class="col-12 my-5">
                    <img :src="require('@/assets/images/blog/post1.jpg')" class="img-fluid d-block mx-auto" />

                    <p class="font-italic pl-4 my-3" style="color: #405C79;">Por <span class="text-white">@post.Author,</span> en <span class="text-white">@post.Category</span>, Publicado <span class="text-white">@post.CreatedDate.ToString("MMMM d, yyyy")</span></p>

                    <div class="row">
                        <div class="col-lg-1">
                            <div class="share-btn">
                                <img :src="require('@/assets/images/blog/share.svg')" width="30" class="mx-auto mb-2" />
                            </div>
                            <div class="comment-btn">
                                <img :src="require('@/assets/images/blog/comment.svg')" width="30" class="mx-auto mt-2" />
                                <p style="flex: 0 0 100%;">@post.Comments</p>
                            </div>
                        </div>
                        <div class="col-lg-10">
                            <h4>@post.Title</h4>

                            <p>@post.Description</p>

                            <a class="btn btn-primary btn-lg mb-3"><router-link to="/blog">SEGUIR LEYENDO</router-link></a>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
</div>
</template>

<script>
import Fondo1 from "../components/Fondo1.vue"
export default {
    name: "Blog",
    components: {
        Fondo1
    }

}
</script>

<style>
							#cubo1 .particle0{fill:#007EFF;}
							#cubo1 .particle1{opacity:0.3;fill:#007EFF;}
							#cubo1 .particle2{opacity:0.2;fill:#007EFF;}
</style>