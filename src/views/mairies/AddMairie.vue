<template>
  <div
    class="modal fade"
    id="addMairieModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="demoModalLabel"
    style="display: none;"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="demoModalLabel">Ajout d'une Commune d'Arrondissement</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
            <form-wizard  title='' subtitle='' nextButtonText='suivant' backButtonText='Précedent' finishButtonText='Enregistrer' aria-labelledby="demoModalLabel"  @on-complete="onComplete"
                            @on-loading="setLoading"
                            @on-validate="handleValidation"
                            shape="circle"
                            color="#e74c3c">
                <tab-content title="Informations Commune"
                            icon="fa fa-building" 
                            :before-change="validateAsync">
                <div class="form-group">
                    <label for="exampleInputUsername1">Nom Commune d'arrondissement</label>
                    <input type="text" class="form-control" id="libelle" required placeholder="Nom de la commune Ex: Douala I" v-model="nomMairie">
                    <span v-if="!check" style="color:red;">Nom Oblogatoire</span>
                </div>
                </tab-content>
                <tab-content title="Infos Compte Par défaut"
                            icon="fa fa-user"
                            :before-change="validateSecond">
                    <div class="form-group">
                        <label for="exampleInputUsername1">Nom</label>
                        <input type="text" class="form-control" id="nomUser" required placeholder="Nom Ex: Manga" v-model="nomUser">
                          <span v-if="!check2" style="color:red;">Nom d'utilisateur Obligatoire</span>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputUsername1">Prénom</label>
                        <input type="text" class="form-control" id="prenomUser" required placeholder="Prenom Ex: Achille" v-model="prenomUser">
                      </div>
                      <div class="form-group">
                        <label for="exampleInputUsername1">Matricule</label>
                        <input type="text" class="form-control" id="matricule" required placeholder="Matricule Ex: Lt12000" v-model="matricule">
                      </div>
                      <div class="form-group">
                            <div class="imagesAnnonce border-dotted borderRadius">
                            <label for="imagesAnnonce" class="mr-2"><b>Photo avatar</b></label>                                           
                                <label>
                                    <b-img src="/img/camera.png" style="width: 3em; height: 3em"/>
                                    <input type="file" 
                                    accept=".png, .jpg, .jpeg"
                                    @change="onFileAvatarChange" style="display:none">
                                </label>
                            </div>
                            <div id="preview">
                                <img v-if="avatarSmUser" :src="avatarSmUser" />
                            </div> 
                      </div>
                </tab-content>
                <tab-content title="Infos de connexion" icon="fas fa-user-lock" :before-change="validateThird">
                    <div class="form-group">
                        <label for="exampleInputUsername1">Numéro de Téléphone</label>
                        <input type="tel" class="form-control" id="telUser" required placeholder="N° de Téléphone Ex: 670114541" v-model="telUser">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputUsername1">Mot de Passe</label>
                        <input type="password" class="form-control" id="passUser" required placeholder="Mot de Passe" v-model="passUser">
                    </div>
                    <span v-if="!check3" style="color:red;">Vous devez renseigner un numéro de Téléphone et un mot de passe</span>
                </tab-content>
                <div class="loader" v-if="loadingWizard"></div>
            </form-wizard>     
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import notif from "@/plugins/notif.js";
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  name: "AddMairie",
  components: {
        FormWizard,
        TabContent
   },
  data: () => ({
    loadingWizard: false,
        nomMairie:null,
        nomUser:null,
        prenomUser:null,
        matricule:null,
        telUser:null,
        passUser:null,
        avatarSmUser:null,
        check:true,
        check2:true,
        check3:true
  }),
  
  methods: {
    setLoading: function(value) {
                this.loadingWizard = value
            },
    handleValidation: function(isValid, tabIndex){
        console.log('Tab: '+tabIndex+ ' valid: '+isValid)
    },
    validateAsync:function() {
        return new Promise((resolve, reject) => {
            
            if(!this.nomMairie){
                this.check=false
            }else{
                this.check=true
            }
        setTimeout(() => {
            resolve(this.check)
        }, 1000)
        })
    },
    validateSecond:function() {
      return new Promise((resolve, reject) => {
          
          if(!this.nomUser){
              this.check2=false
          }else{
              this.check2=true
          }
      setTimeout(() => {
          resolve(this.check2)
      }, 1000)
      })
    },
    validateThird:function() {
      return new Promise((resolve, reject) => {
          
          if(!this.telUser || !this.passUser){
              this.check3=false
          }else{
              this.check3=true
          }
      setTimeout(() => {
          resolve(this.check3)
      }, 1000)
      })
    },
    async onFileAvatarChange(e){
        const fileAvatar=e.target.files[0];
        this.avatarSmUser=await this.getBase64(fileAvatar)
        console.log("url", this.avatarSmUser);
    },
    onComplete(){
        let infosUser={nom:this.nomUser, prenom:this.prenomUser, matricule:this.matricule, tel:this.telUser,mdp:this.passUser, avatar:this.avatarSmUser}
        let data={
            nom:this.nomMairie,
            maire:infosUser
        }
        console.log("data",data)
        const idSuperMairie = storage.get("superMairie").idSuperMairie ;
        let url = "/supers-mairies/" + idSuperMairie + "/mairies";
        console.log("url", url);
        axios.post(url ,data).then(response =>{
            this.nomMairie=null;this.nomUser=null;this.prenomUser=null;this.matricule=null; this.telUser=null;this.passUser=null
            notif.success(response.message);
            $("#addMairieModal").modal("hide");
            this.$root.$emit("new-mairie-added", response.result);
        }).catch(error => {notif.error(error.message);});
    },
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
  }
};
</script>
<style scoped>
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #e74c3c;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>