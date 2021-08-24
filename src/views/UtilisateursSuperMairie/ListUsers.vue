<template>
    <div class="container-fluid">
    <!--page header start -->
    <div class="page-header">
      <div class="row align-items-end">
        <div class="col-lg-8">
          <div class="page-header-title">
            <i class="ik ik-file-text bg-blue"></i>
            <div class="d-inline">
              <h5>Communauté Urbaine de la ville de Douala</h5>
              <span>Liste des utilisateurs</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <nav class="breadcrumb-container" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="../index.html">
                  <i class="ik ik-home"></i>
                </a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Accueil</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Utilisateurs Mairie de la ville</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <!--page header end -->
    <div class="row">
      <div class="col-md-12">
        <div class="mb-2 clearfix">
          <a
            class="btn pt-0 pl-0 d-md-none d-lg-none"
            data-toggle="collapse"
            href="#displayOptions"
            role="button"
            aria-expanded="true"
            aria-controls="displayOptions"
          >
            Display Options
            <i class="ik ik-chevron-down align-middle"></i>
          </a>
          <div class="collapse d-md-block display-options" id="displayOptions">
            <div class="d-block d-md-inline-block">
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#addUserModal"
              >Ajouter un utilisateur</button>
              <div class="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
              </div>
            </div>
          </div>
        </div>
        <div class="separator mb-20"></div>
        <div class="row layout-wrap" id="layout-wrap" style="width:99%">
            <table class="table table-bordered table-dark table-striped">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Matricule</th>
                        <th>Téléphone</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index">
                        <td v-text="user.nom"></td>
                        <td v-text="user.prenom"></td>
                        <td v-text="user.matricule"></td>
                        <td v-text="user.tel"></td>
                        <td><img :src="user.avatar" alt="avatar" width="30" class="rounded-circle"></td>
                    </tr>
                </tbody>
	        </table>
        </div>
      </div>
    </div>
    <add-user v-bind:source="1"/>
  </div>
</template>
<script>
import AddUser from "@/views/utilisateurs/AddUser.vue";
export default {
    name:"ListSuperMairiesUsers",
    data:()=>({
        users:[],

    }),
    components:{
      AddUser
    },
    methods:{
        getSuperMairiesUsers(){
            let access_token=storage.get("access_token")
            let idSuperMairie=storage.get("superMairie").idSuperMairie;
            const url="/supers-mairies/"+idSuperMairie+"/utilisateurs";
            //console.log("idSuperMairie",idSuperMairie)
            axios.get(url).then((res) => {
              this.users = res.result.data;
              console.log("result",this.users)
            }).catch(error =>{console.log(error.message);})
        },
    },
     mounted() {
       this.getSuperMairiesUsers();
        this.$root.$on('new-super-mairie-user-added', (newUserSuperMairie) => {
            this.users.unshift(newUserSuperMairie)
     }) 
    }
}
</script>
<style scoped>

</style>