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
          <form class="forms-sample" id="test" @submit.prevent="sendMairieForm">
            <div class="form-group">
              <label for="exampleInputUsername1">Nom</label>
              <input
                type="text"
                class="form-control"
                id="libelle"
                placeholder="Nom Mairie"
                required
                v-model="mairie.nom"
              />
            </div>
          
              <div>
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

          </form>
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

export default {
  name: "AddMairie",

  data: () => ({
    ckecked: false,
    questionCommande: 0,
    mairie: {
      nom: ""
    },
    nomUser: "",
    telUser: "",
    passUser: ""
  }),
  methods: {
    sendMairieForm() {
      const idSuperMairie = storage.get("superMairie").idSuperMairie ;
      let url = "/supers-mairies/" + idSuperMairie + "/mairies";
      console.log("url", url);
      let infosUser={nom:this.nomUser,tel:this.telUser,mdp:this.passUser}
                    let data={
                        nom:this.mairie.nom,
                        maire:infosUser
                    }
                    console.log("data",data)
                    axios.post(url ,data).then(response =>{
                        this.mairie.nom=null;this.nomUser=null;this.telUser=null;this.passUser=null
                        notif.success(response.message);
                        $("#addMairieModal").modal("hide");
                        this.$root.$emit("new-mairie-added", response.result);
                    }).catch(error => {notif.error(error.message);});
      // axios
      //   .post(url, data)
      //   .then(response => {
      //     notif.success(response.message);
      //     this.mairie.nom = null;
      //     $("#addMairieModal").modal("hide");
      //     this.$root.$emit("new-mairie-added", response.result);
      //   })
      //   .catch(error => {
      //     notif.error(error.message);
      //   });
    }
  }
};
</script>