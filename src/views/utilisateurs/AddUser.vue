<template>
  <div
    class="modal fade"
    id="addUserModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="demoModalLabel"
    style="display: none;"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="demoModalLabel">Ajout d'un utilisateur</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
        <form class="form-horizontal" @submit.prevent="sendAddUsagerForm">                   
            <div>
                <div class="form-group">
                    <label for="example-name">Nom(s)</label>
                    <input type="text" class="form-control" required placeholder="Nom Ex:Mengue" id="example-name" v-model="utilisateur.nom">
                </div>
                <div class="form-group">
                    <label for="example-name">Prénom(s)</label>
                    <input type="text" class="form-control" placeholder="Prenom Ex:Richard" id="example-surname" v-model="utilisateur.prenom">
                </div>
                <div class="form-group">
                    <label for="example-matricule">Matricule</label>
                    <input type="text" class="form-control" required placeholder="Matricule Ex:1231114" name="example-mat" id="example-mat" v-model="utilisateur.matricule">
                </div>
                <div class="form-group">
                  <label for="example-phone">N° Téléphone</label>
                    <input type="text" id="example-phone" required class="form-control" v-model="utilisateur.tel">
                </div>
                <div class="form-group">
                  <label for="example-phone">Mot de Passe</label>
                    <input type="password" id="example-password" required  class="form-control" v-model="utilisateur.mdp">
                </div>
                <div class="imagesAnnonce border-dotted borderRadius">
                    <label for="imagesAnnonce" class="mr-2"><b>Photo de profil </b></label>                                           
                    <label>
                        <b-img src="/img/camera.png" style="width: 3em; height: 3em"/>
                        <input type="file"    
                        accept=".png, .jpg, .jpeg"
                        @change="onFileChange" style="display:none">
                    </label>
                </div>
                <div id="preview">
                    <img v-if="utilisateur.avatar" :src="utilisateur.avatar" />
                </div>        
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
           <button type="submit" class="btn btn-primary" form="test" value="Submit" @click.prevent="sendAddUsagerForm">Enregistrer</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import notif from "@/plugins/notif.js";


export default {
  name: "AddUser",
  props: ["source"],

  data: () => ({
    formValues:{},
    submitted:false,
    utilisateur: {
      nom: "",
      prenom:"",
      matricule:"",
      tel:"",
      mdp:"",
      avatar:"",
      roles:[]
    },
    userConnected:null,
    url:"",
    leRole:[]
  }),
  methods: {
    async onFileChange(e){
        const file=e.target.files[0];
        // this.utilisateur.avatar=URL.createObjectURL(file)
        // console.log("url", this.utilisateur.avatar);
         this.utilisateur.avatar=await this.getBase64(file)
        console.log("url", this.utilisateur.avatar);
    },
    
    
    sendAddUsagerForm() {
      this.utilisateur.roles=this.leRole;
        console.log("utilisateurs", this.utilisateur);
        axios.post(this.url, this.utilisateur).then(response => {
                notif.success(response.message);
                this.utilisateur.nom = null;this.utilisateur.prenom = null;this.utilisateur.matricule = null;this.utilisateur.tel = null;
                this.utilisateur.mdp = null;this.utilisateur.avatar = null;this.utilisateur.roles=[];
            $("#addUserModal").modal("hide");
            if(this.url.includes("/mairies")){
               this.$root.$emit("new-mairie-user-added", response.result);
            }
            if(this.url.includes("/supers-mairies")){
               this.$root.$emit("new-super-mairie-user-added", response.result);
            }
          })
          .catch(error => {
            notif.error(error.message);
          });
    },
    //method used to upload avatar
          getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });
        },
      async getUserInfos(){
            let access_token=storage.get("access_token")
        try {
          this.userConnected =await axios.get("utilisateurs/"+access_token).then(response => response.result);
        } catch (error) {console.log(error)}
        if(this.source==1){
          this.url="/supers-mairies/"+this.userConnected.data[0].idSuperMairie+"/utilisateurs";
          //this.utilisateur.roles=storage.get("roles").idRole
        }
        if(this.source==2){
          this.url="/mairies/"+this.userConnected.data[0].idMairie+"/utilisateurs";
          //this.utilisateur.roles="maire"
        }
         this.leRole.push(storage.get("roles").idRole)
      }
    },
    async mounted(){
      await this.getUserInfos();
    }
  }

</script>
<style>
#preview img{
  max-width:9em!important;
}
</style>