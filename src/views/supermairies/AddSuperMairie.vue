<template>
     <div class="modal fade" id="superMairieModal" tabindex="-1" role="dialog" aria-labelledby="demoModalLabel" style="display: none;" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="demoModalLabel">Ajout d'une Super Mairie</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                <form class="forms-sample" id="test" @submit.prevent="sendSuperMairieForm">
                    <div class="form-group">
                        <label for="exampleInputUsername1">Nom</label>
                        <input type="text" class="form-control" id="libelle" required placeholder="Nom de la super Mairie" v-model="nom">
                    </div>

                    <transition enter-active-class="animated zoomIn">
                        <div v-if="step == 2">
                            <div class="form-group">
                                <label for="exampleInputUsername1">Nom de l'utilisateur</label>
                                <input type="text" class="form-control" id="nomUser" required placeholder="Nom Ex: Manga" v-model="nomUser">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputUsername1">Numéro de Téléphone</label>
                                <input type="tel" class="form-control" id="telUser" required placeholder="N° de Téléphone Ex: 670114541" v-model="telUser">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputUsername1">Mot de Passe</label>
                                <input type="password" class="form-control" id="passUser" required placeholder="Mot de Passe" v-model="passUser">
                            </div>
                        </div>
                    </transition>
                </form>
                <div v-if="action==1" class="border-checkbox-group border-checkbox-group-primary">
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="setDefaultUser"
                    >Spécifier un compte utilisateur</button>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button type="submit" class="btn btn-primary" form="test" value="Submit">Enregistrer</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import notif from "@/plugins/notif.js";
import SuperMaireForm from "@/views/supermairies/SuperMaireForm.vue";
export default {
    name: 'add-super-mairie',
    data:()=>({
        ckecked:false,
        step:0,
        action:1,
        nom:null,
        commande:null,
        commande2:null,
        nomUser:null,
        telUser:null,
        passUser:null,
        mairies:[]
    }),
    methods:{
        setDefaultUser(){
            this.step=2
            this.action=2
        },
        addMairie(){
            this.step=2
            this.action=0
        },
        addSuperMaire(){
            this.step=3
            this.action=0
        },
         AddField: function () {
            this.fields.push({ first: ''});
        },
        sendSuperMairieForm(){
                if(this.step==2){
                    let infosUser={nom:this.nomUser,tel:this.telUser,mdp:this.passUser}
                    let data={
                        nom:this.nom,
                        superMaire:infosUser
                    }
                    console.log("data",data)
                    axios.post("supers-mairies",data).then(response =>{
                        this.nom=null;this.nomUser=null;this.telUser=null;this.passUser=null
                        notif.success(response.message);
                        this.step=1
                        $('#superMairieModal').modal('hide');
                        this.$root.$emit("new-super-mairie-added");
                    })
                    .catch(error => {notif.error(error.message);});

                }else{
                   axios.post("supers-mairies",{nom: this.nom}).then(response =>{
                        this.nom=null;
                        notif.success(response.message);
                        $('#superMairieModal').modal('hide');
                        this.$root.$emit("new-super-mairie-added");
                    })
                    .catch(error => {notif.error(error.message);});
                }
        }
    }
}
</script>