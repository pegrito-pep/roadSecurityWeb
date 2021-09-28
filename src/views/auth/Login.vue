<template>
     <div class="auth-wrapper">
        <div class="container-fluid h-100">
            <b-row class="flex-row h-100 bg-white">
                <div class="col-xl-8 col-lg-6 col-md-5 p-0 d-md-block d-lg-block d-sm-none d-none">
                    <div class="lavalite-bg" style="background-image: url('/img/imageLoginPage.jpg')">
                        <div class="lavalite-overlay"></div>
                        <div class="disposition">
                            <div class="align-middle inner">
                                <vueper-slides :slide-ratio="1 / 4" autoplay :slide-content-outside="contentPosition">
                                    <vueper-slide
                                        v-for="(slide, i) in slides"
                                        :key="i"
                                        :style="'background-color: ' + ['#42b983', '#ff5252'][i % 2]">
                                        <template #content>
                                        <div class="vueperslide__content-wrapper" style="flex-direction: row">
                                            <b-img :src="slide.src" fluid alt="Fluid image"></b-img>
                                        </div>
                                        </template>
                                    </vueper-slide>
                                </vueper-slides>
                            </div>
                        </div>
                        <!--<div class="align-middle">
                            <vueper-slides :slide-ratio="1 / 4" autoplay :slide-content-outside="contentPosition">
                                <vueper-slide
                                    v-for="(slide, i) in slides"
                                    :key="i"
                                    :style="'background-color: ' + ['#42b983', '#ff5252'][i % 2]">
                                    <template #content>
                                    <div class="vueperslide__content-wrapper" style="flex-direction: row">
                                        <b-img :src="slide.src" fluid alt="Fluid image"></b-img>
                                    </div>
                                    </template>
                                </vueper-slide>
                            </vueper-slides>
                        </div>-->
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-7 my-auto p-0">
                    <div class="authentication-form mx-auto">
                        <div class="mt-n5 mb-4 d-flex justify-content-center align-items-center flex-column">
                            <b-link :to="{name: 'home'}"><b-img src="/img/logoSOS.jpg" style="width: 4em; height: 4em"/></b-link>
                            <h3 class="text-center mt-2 mb-0">Connectez-vous à votre compte s'il vous plaît.</h3>
                        </div>
                        
                        <form action="" @submit.prevent="sendForm">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="N° de Téléphone" required="" v-model="login">
                                <i class="ik ik-user"></i>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Mot de passe" required="" v-model="mdp">
                                <i class="ik ik-lock"></i>
                            </div>
                            <div class="row">
                                <div class="col text-right">
                                    <b-link :to="{name: 'forgot-password'}">Mot de Passe oublié ?</b-link>
                                </div>
                            </div>
                            <div class="sign-btn text-center">
                                <button type="submit"  :disabled="submitted" class="btn btn-primary btn-lg"  style="background-color: #da624a !important; border-color:#da624a !important;">Connexion <b-spinner v-if="submitted" small></b-spinner></button>
                            </div>
                        </form>
                         <!--<div class="register">
                             <p>No account? <b-link :to="{name: 'register'}" style="color: #da624a !important;">Sign up now</b-link></p>
                         </div>-->
                    </div>
                </div>
            </b-row>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name: 'Login',
    components: { VueperSlides, VueperSlide },
    data: () => ({
        submitted: false,
        login: null, 
        mdp: null,
        resultat:null,
        slidesTimeTimerId: null,
        slides: [
            { src: 'http://localhost:8080/img/Smairies/bafoussam.png'},
            { src: 'http://localhost:8080/img/Smairies/bertoua.png'},
            { src: 'http://localhost:8080/img/Smairies/douala.jpg'},
            { src: 'http://localhost:8080/img/Smairies/ebolowa.png'},
            { src: 'http://localhost:8080/img/Smairies/ngaoundere.png'},
            { src: 'http://localhost:8080/img/Smairies/Yaounde.png'},
        ]
    }), 
    methods: {
        toggleSlidesTime () {
    if (this.slidesTimeTimerId) {
      clearInterval(this.slidesTimeTimerId)
      this.slidesTimeTimerId = 0
    } else {
      this.updateSlidesWithTime()
      this.slidesTimeTimerId = setInterval(this.updateSlidesWithTime, 1000)
    }
  },
  updateSlidesWithTime () {
    this.slides.forEach(slide => {
      let time = new Date()
      slide.title = time.toLocaleTimeString()
      slide.content = 'Time in 5 hours: ' + new Date(time.getTime() + 5 * 3600000).toLocaleTimeString()
    })
  },
        // sendForm() {
        //     this.submitted = true
        //     axios.post('signin', {tel: this.login, mdp: this.mdp}).then(response => {
        //         storage.set('access_token', response.result.access_token)
        //         storage.set('refresh_token', response.result.refresh_token)
        //         this.$router.push({name: 'home'})
        //     }).catch(error => {
        //         this.submitted = false
        //         App.notifyError(error.message)
        //     })
        // }
        async sendForm(){
            var myTrack=new Audio('/assets/sons/Bienvenu-road.mp3')
            this.submitted = true
        try {
          this.resultat =await axios.post("signin",{tel: this.login, mdp: this.mdp}).then(response => response);
          if(this.resultat.success){
                 myTrack.play();
                storage.set('access_token', this.resultat.result.access_token)
                storage.set('refresh_token', this.resultat.result.refresh_token)
                this.userData = await axios.get("utilisateurs/"+this.resultat.result.access_token).then(response => response.result.data);
                console.log("userData",this.userData[0])
                storage.set('roles', this.userData[0].roles[0])
                if(this.userData[0].mairie!=null){
                    storage.set("mairie",this.userData[0].mairie)
                }
                if(this.userData[0].superMairie!=null){
                    storage.set("superMairie",this.userData[0].superMairie)
                }
                this.$router.push({name: 'home'})
          }
        } catch (error) {
            this.submitted = false
             App.notifyError(error.message)
        }
         
        }
    },
    computed: {
        styleObject: function(){
             return {
                '--color': this.button.color,
                '--color-hover': this.button.colorHover
             }
        }
    }
    
}
</script>
<style>
   .disposition{
        position: relative;
        width: 100%;
        height: 900px;
   }
   .inner{
    padding-top:35%;
   }
</style>
