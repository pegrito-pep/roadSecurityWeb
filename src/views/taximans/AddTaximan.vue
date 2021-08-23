<template>
<div class="">
      <form-wizard @onComplete="onComplete" @onNextStep="nextStep">
        <tab-content title="Informations propriétaire" :selected="true">
        <toggle-button @change="checkData($event )" :value="false" :labels="{checked: 'Oui', unchecked: 'Non'}" style="margin-left: 20px" /><span class="ml-1">Utilisateur Existant</span>
          <transition enter-active-class="animated zoomIn">
              <div v-if="existingUser">
                <label for="">Code de l'usager</label>
                <input
                  type="text"
                  class="form-control"
                  :class="hasError('codeUsager') ? 'is-invalid' : ''"
                  placeholder="code de L'Usager Ex:DOU-121"
                  v-model="formData.codeUsager"
                >
                <div v-if="hasError('codeUsager')" class="invalid-feedback">
                  <div class="error" v-if="!$v.formData.name.required">S'il vous plait veuillez entrer un nom</div>
                </div>
              </div>
            </transition>
            <transition leave-active-class="animated zoomOut">
              <div v-if="!existingUser">
                  <div class="form-group">
                    <label for="fullName">Nom </label>
                    <input
                      type="text"
                      class="form-control"
                      :class="hasError('name') ? 'is-invalid' : ''"
                      placeholder="Nom(s) Ex:Abanda"
                      v-model="formData.name"
                    >
                    <div v-if="hasError('name')" class="invalid-feedback">
                      <div class="error" v-if="!$v.formData.name.required">S'il vous plait veuillez entrer un nom</div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="surname">Prénom</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Prénom(s) Ex:daniel"
                      v-model="formData.surname"
                    >
                  </div>
                  <div class="form-group">
                    <label for="email">Numéro CNI</label>
                    <input
                      type="text"
                      class="form-control mb-2"
                      :class="hasError('cni') ? 'is-invalid' : ''"
                      placeholder="Numéro CNI Ex:1148784114"
                      v-model="formData.cni"
                    >
                    <div v-if="hasError('cni')" class="invalid-feedback">
                      <div class="error" v-if="!$v.formData.cni.required">Numéro de CNI obligatoire</div>
                    </div>
                    <img-inputer v-model="formData.photoCniProprietaire" theme="light" size="small" 
                    bottom-text="déposez le fichier ici ou cliquez pour modifier" icon="img" placeholder="joindre photo avant cni"
                    @onChange="onFileCniProprietaireChange"/>

                  </div>
                  <div class="form-group">
                    <label for="email">Numéro de télephone</label>
                    <input
                      type="tel"
                      class="form-control"
                      :class="hasError('tel') ? 'is-invalid' : ''"
                      placeholder="N° Téléphone Ex:670455641"
                      v-model="formData.tel" required
                    >
                    <div v-if="hasError('tel')" class="invalid-feedback">
                      <div class="error" v-if="!$v.formData.tel.required">Numéro de Téléphone Obligatoire</div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email">N° Permis propiétaire</label>
                    <input
                      type="text"
                      class="form-control mb-2"
                      :class="hasError('numPermisProprio') ? 'is-invalid' : ''"
                      placeholder="Numéro Permis Ex:11100001"
                      v-model="formData.numPermisProprio"
                    >
                    <div v-if="hasError('numPermisProprio')" class="invalid-feedback">
                      <div class="error" v-if="!$v.formData.numPermisProprio.required">Numéro de permis obligatoire</div>
                    </div>
                    <img-inputer v-model="formData.photoPermisProprietaire" theme="light" size="small" 
                    bottom-text="déposez le fichier ici ou cliquez pour modifier" icon="img" placeholder="joindre photo permis de conduire"
                    @onChange="onFilePermisProprietaireChange"/>

                  </div>
            </div>
          </transition>
        </tab-content>
       
        <tab-content title="Informations Taximan">
        <toggle-button @change="sameUser($event )" :value="false" :labels="{checked: 'Oui', unchecked: 'Non'}" style="margin-left: 20px" /><span class="ml-1">Le propriétaire correspond au taximan</span>
          <div class="form-group">
              <label for="nameTaximan">Nom Taximan </label>
              <input
                type="text"
                class="form-control"
                :class="hasError('nameTaximan') ? 'is-invalid' : ''"
                placeholder="Nom(s) Ex:Ndongo"
                v-model="formData.nameTaximan"
              >
              <div v-if="hasError('nameTaximan')" class="invalid-feedback">
                <div class="error" v-if="!$v.formData.nameTaximan.required">S'il vous plait veuillez entrer un nom</div>
              </div>
          </div>
          <div class="form-group">
                    <label for="surname">Prénom taximan</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Prénom(s) Ex:samy"
                      v-model="formData.surnameTaximan"
                    >
          </div>
          <div class="form-group">
            <label for="email">Numéro Permis Taximan</label>
              <input
                type="tel"
                class="form-control"
                :class="hasError('numpermisTaximan') ? 'is-invalid' : ''"
                placeholder="N° Permis Ex:WS-40000"
                v-model="formData.numpermisTaximan" required
              >
            <div v-if="hasError('numpermisTaximan')" class="invalid-feedback">
              <div class="error" v-if="!$v.formData.numpermisTaximan.required">Numéro de Permis Obligatoire</div>
            </div>
          </div>
          <!--<div class="form-group">
            <div class="imagesAnnonce border-dotted borderRadius">
              <label for="imagesAnnonce" class="mr-2"><b>Photo permis de conduire </b></label>                                           
                <label>
                    <b-img src="/img/camera.png" style="width: 3em; height: 3em"/>
                    <input type="file" 
                    accept=".png, .jpg, .jpeg"
                    @change="onFilePermisTaximanChange" style="display:none">
                </label>
            </div>
            <div id="preview">
                <img v-if="formData.photoPermisTaximan" :src="formData.photoPermisTaximan" />
            </div> 
          </div>-->
          <img-inputer v-model="formData.photoPermisTaximan" theme="light" size="small" 
                    bottom-text="déposez le fichier ici ou cliquez pour modifier" icon="img" placeholder="joindre photo permis"
                    @onChange="onFilePermisTaximanChange"/>
          <div class="form-group">
            <label for="email">N° CNI Taximan</label>
              <input
                type="tel"
                class="form-control"
                :class="hasError('numCniTaximan') ? 'is-invalid' : ''"
                placeholder="N° CNI Ex:11120114440"
                v-model="formData.numCniTaximan" required
              >
            <div v-if="hasError('numCniTaximan')" class="invalid-feedback">
              <div class="error" v-if="!$v.formData.numCniTaximan.required">Numéro de cni Obligatoire</div>
            </div>
          </div>
          <div class="form-group">
            <div class="imagesAnnonce border-dotted borderRadius">
              <label for="imagesAnnonce" class="mr-2"><b>Photo CNI </b></label>                                           
                <label>
                    <b-img src="/img/camera.png" style="width: 3em; height: 3em"/>
                    <input type="file" 
                    accept=".png, .jpg, .jpeg"
                    @change="onFileCniTaximanChange" style="display:none">
                </label>
            </div>
            <div id="preview">
                <img v-if="formData.photoCniTaximan" :src="formData.photoCniTaximan" />
            </div> 
          </div>
          <div class="form-group">
            <label for="email">N° Téléphone Taximan</label>
              <input
                type="tel"
                class="form-control"
                :class="hasError('telTaximan') ? 'is-invalid' : ''"
                placeholder="N° de Téléphone Ex:668211456"
                v-model="formData.telTaximan" required
              >
            <div v-if="hasError('telTaximan')" class="invalid-feedback">
              <div class="error" v-if="!$v.formData.telTaximan.required">Numéro de Téléphone Obligatoire</div>
            </div>
          </div>
        </tab-content>

        <tab-content title="Informations du véhicule">
        <div class="form-group">
            <label for="numberCarteGrise">Numéro Carte Grise</label>
            <input
              type="text"
              class="form-control"
              :class="hasError('numCarteGrise') ? 'is-invalid' : ''"
              placeholder="N°Carte Grise Ex:OU006"
              v-model="formData.numCarteGrise"
            >
            <div v-if="hasError('numCarteGrise')" class="invalid-feedback">
              <div
                class="error"
                v-if="!$v.formData.numCarteGrise.required"
              >Veuillez spécifier un numéro de carte grise.</div>
            </div>
          </div>
          <!--<div class="form-group">
              <div class="imagesAnnonce border-dotted borderRadius">
                <label for="imagesAnnonce" class="mr-2"><b>Photo carte grise </b></label>                                           
                  <label>
                      <b-img src="/img/camera.png" style="width: 3em; height: 3em"/>
                      <input type="file" 
                      accept=".png, .jpg, .jpeg"
                      @change="onFileCarteGriseChange" style="display:none">
                  </label>
              </div>
              <div id="preview">
                  <img v-if="formData.photoCarteGrise" :src="formData.photoCarteGrise" />
              </div> 
             
          </div>-->
          <img-inputer v-model="formData.photoCarteGrise" theme="light" size="small" 
                    bottom-text="déposez le fichier ici ou cliquez pour modifier" icon="img" placeholder="joindre photo carte grise"
                    @onChange="onFileCarteGriseChange"/>
          <div class="form-group">
            <label for="numberOfEmployees">N° D'immatriculation</label>
            <input
              type="text"
              class="form-control"
              :class="hasError('immatriculation') ? 'is-invalid' : ''"
              placeholder="Immatriculation Ex:CE787AH"
              v-model="formData.immatriculation"
            >
            <div v-if="hasError('immatriculation')" class="invalid-feedback">
              <div
                class="error"
                v-if="!$v.formData.immatriculation.required"
              >Veuillez spécifier un numéro d'immatriculation.</div>
            </div>
          </div>
          <div class="form-group">
            <label for="marque">Marque</label>
            <input
              type="text"
              class="form-control"
              :class="hasError('marque') ? 'is-invalid' : ''"
              placeholder="Marque Ex:TOYOTA"
              v-model="formData.marque"
            >
            <div v-if="hasError('marque')" class="invalid-feedback">
              <div
                class="error"
                v-if="!$v.formData.marque.required"
              >Veuillez spécifier une marque de voiture.</div>
            </div>
          </div>
        </tab-content>
        <tab-content title="Frais d'inscription">
          <div class="form-group">
              <label for="referral">Veuillez vous acquitter des frais d'inscription</label> 
          </div>
          
          <div class="form-group form-check">
            <loading-checkbox
                :checked="checked"
                :loading="loading"
                label="J'accepte les termes et conditions d'utilisation"
                @click.native="toggleStatus"
            />
          </div>
          
        </tab-content>
      </form-wizard>
      <transition enter-active-class="animated zoomIn">
          <div ref="paypal" id="customizeButtonStyle"></div>
      </transition>
     
  </div>
</template>

<script>

//import ToogleSwitch from '@/components//Reusables/ToogleSwitch.vue'
import Vue from 'vue'
// import VueToggleBtn from 'vue-toggle-btn';
// Vue.component('vue-toggle-btn', VueToggleBtn);

import ToggleButton from 'vue-js-toggle-button'
  
Vue.use(ToggleButton)
import LoadingCheckbox from 'vue-loading-checkbox'
import 'vue-loading-checkbox/dist/LoadingCheckbox.css'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

Vue.component('ImgInputer', ImgInputer)


import { FormWizard, TabContent, ValidationHelper } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
import { required } from "vuelidate/lib/validators";
import { email } from "vuelidate/lib/validators";
import { numeric } from "vuelidate/lib/validators";
import notif from "@/plugins/notif.js";

export default {
  name: "StepFormValidation",
  components: {
    FormWizard,
    TabContent,
    LoadingCheckbox 
  },
  mixins: [ValidationHelper],
  data() {
    return {
      sameUsers:false,
      existingUser:false,
      loaded: false,
      paidFor: false,
      loadding: false,
      showButton:false,
      url:null,
      selected:null,
      formData: {
        name: "",
        surname:"",
        photoCniProprietaire:"",
        cni:null,
        tel: null,
        photoPermisProprietaire:null,
        numPermisProprio:null,
        nameTaximan:null,
        surnameTaximan:null,
        numpermisTaximan:"",
        photoPermisTaximan:"",
        numCniTaximan:"",
        photoCniTaximan:"",
        telTaximan:"",
        immatriculation: null,
        numCarteGrise:"",
        photoCarteGrise:"",
        marque:"",
        codeUsager:"DOU121",
      },
      checked: false,
      loading: false,
      vehicules:[],
      sendSstep:1,
      validationRules: [
        { name: { required },tel: { required },cni: { required } ,codeUsager: { required },numPermisProprio:{ required }},
        { nameTaximan: { required }, numCniTaximan: { required },numpermisTaximan: { required },telTaximan: { required }},
        {immatriculation: { required}, numCarteGrise: { required}, marque: { required} },
        { referral: { required }, terms: { required } }
      ]
    };
  },
  methods: {
     nextStep(){
       console.log("entrée ici")
     },
    async onFileCniProprietaireChange(e){
        const fileCniProprio=e;
        this.formData.photoCniProprietaire=await this.getBase64(fileCniProprio)
        console.log("url", this.formData.photoCniProprietaire);
    },
    async onFilePermisProprietaireChange(e){
      const filePermisProprio=e;
        this.formData.photoPermisProprietaire=await this.getBase64(filePermisProprio)
        console.log("url", this.formData.photoPermisProprietaire);
    },
    async onFilePermisTaximanChange(e){
      const filePermisTaximan=e;
        this.formData.photoPermisTaximan=await this.getBase64(filePermisTaximan)
        console.log("url2", this.formData.photoPermisTaximan);
    },
    async onFileCniTaximanChange(e){
      const fileCniTaximan=e.target.files[0];
        // this.formData.photoCniTaximan=URL.createObjectURL(fileCniTaximan)
        // console.log("url", this.formData.photoCniTaximan);
        this.formData.photoCniTaximan=await this.getBase64(fileCniTaximan)
        console.log("url", this.formData.photoCniTaximan);
    },
    async onFileCarteGriseChange(e){
      // const fileCarteGrise=e.target.files[0];
      //   this.formData.photoCarteGrise=URL.createObjectURL(fileCarteGrise)
      //   console.log("url", this.formData.photoCarteGrise);
      //   // this.utilisateur.avatar=await this.getBase64(file)
      //   // console.log("url", this.utilisateur.avatar);
      const fileCarteGrise=e;
      this.formData.photoCarteGrise=await this.getBase64(fileCarteGrise)
      console.log("url3", this.formData.photoCarteGrise);
    },
      checkData( event) {
          let value = event.value;
          this.existingUser=value /*will return true or false*/
          if(this.existingUser){
             this.formData.codeUsager="";
          }
          if(!this.existingUser){
             this.formData.codeUsager="DOU121";
          }
		    },
    sameUser(event){
      this.sameUsers = event.value;
      if(this.sameUsers){
        this.formData.numCniTaximan=this.formData.cni;
        this.formData.photoCniTaximan=this.formData.photoCniProprietaire
      }
      if(!this.sameUsers){
        this.formData.numCniTaximan="";
        this.formData.photoCniTaximan="";
      }
    },
    toggleStatus() {
        this.showButton=true
        const script = document.createElement("script");
        script.src ="https://www.paypal.com/sdk/js?client-id=AWll2noucpUtJT86ULiJnfJoXRSTXMNOCdg64upWlQrGR5sizlQsVcoaKJANLeobax6zT3w0C4DgCgrX";
        script.addEventListener("load", this.setLoaded);
        setTimeout(() => {
          this.loading = false
          this.checked = !this.checked
          document.body.appendChild(script);
        }, 2000)
    }
    ,
    onFileChange(e){
            const file=e.target.files[0];
            this.url=URL.createObjectURL(file)
    },
    onComplete() {
      
            let infosVehichules={
              immatriculation:this.formData.immatriculation,
              carteGrise:this.formData.numCarteGrise,
              marque:this.formData.marque,
              imgCarteGrise:this.formData.photoCarteGrise
            }
            this.vehicules.push(infosVehichules)
            let infosProprio={
              cni:this.formData.cni,
              nom:this.formData.name,
              prenom:this.formData.surname,
              tel:this.formData.tel,
              permis:this.formData.numPermisProprio,
              imgPermis:this.formData.photoPermisProprietaire,
              imgCni:this.formData.photoCniProprietaire,
              vehicules:this.vehicules
            };
      //console.log("infosProprio",infosProprio)
      let infosTaximan={
        cni:this.formData.numCniTaximan,
        nom:this.formData.nameTaximan,
        prenom:this.formData.surnameTaximan,
        tel:this.formData.telTaximan,
        permis:this.formData.numpermisTaximan,
        imgPermis:this.formData.photoPermisTaximan,
        imgCni:this.formData.photoCniTaximan,
        idVehicule:1
      }
      console.log("infosTaximan1",infosTaximan)
              if (this.sendSstep == 1) {
                axios.post('proprietaires', infosProprio).then(response => {
                    console.log(response)
                    this.sendSstep = 2
                    //this.submitted = false
                }).catch(error => {
                    this.submitted = false
                    App.notifyError(error.message)
                })
            }
            if (this.sendSstep == 2) {
              console.log("infosTaximan2",infosTaximan)
                axios.post('taximens', infosTaximan).then(response => {
                    console.log("taximan ajoutée",response.reslut)
                }).catch(error => {
                    this.submitted = false
                    App.notifyError(error.message)
                })
            }
      // this.vehicules.push( vehicule );
      // let data={ 
      //   "cni":this.formData.cni,
      //   "nom":this.formData.name,
      //   "prenom":this.formData.surname,
      //   "tel":this.formData.tel,
      //   "permis":this.formData.permis,
      //   "vehicules":this.vehicules
      // }
      // axios.post("proprietaires",data).then(response =>{
            

      //       this.vehicules=null;
      //       this.formData.cni=null; this.formData.name=null; this.formData.surname=null;
      //       this.formData.tel=null; this.formData.permis=null; this.formData.immatriculation=null;
      //       this.formData.carteGrise=null; this.formData.marque=null; this.formData.terms=false;
      //       notif.success(response.message);
      //       this.paidFor=false;
      //       this.showButton=false;
      //       this.$router.push({name: 'ListTaximans'});
      // })
      // .catch(error => {notif.error(error.message);});
      
    },
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description:"test",
                  amount: {
                    currency_code: "USD",
                    value: 22
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            console.log(order);
            this.onComplete();
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
      });
    },
  },
  mounted: function() {
    // axios.get("proprietaires").then(response =>{
    //   tgis.options=response.result
    // })
  }
};
</script>
<style>
.vue-step-wizard{
  width: 80%!important;
}
#customizeButtonStyle{
  max-width: 30%!important;
  margin: 0 auto;
}
.step-button-submit{
  display:none!important;
}

</style>