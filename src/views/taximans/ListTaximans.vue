<template>
    
    <div class="container-fluid">
    <!--page header start -->
        <div class="page-header">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class="page-header-title">
                        <i class="ik ik-file-text bg-blue"></i>
                        <div class="d-inline">
                            <h5>Usagers</h5>
                            <span>Liste des Usagers</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <nav class="breadcrumb-container" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="../index.html"><i class="ik ik-home"></i></a>
                            </li>
                            <li class="breadcrumb-item">
                                <a href="#">Accueil</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Usagers</li>
                        </ol>
                    </nav>
                </div>
            </div>    
        </div>
        <!--page header end -->
        <div class="row">
            <div class="col-md-12">
                <div class="mb-2 clearfix">
                    <a class="btn pt-0 pl-0 d-md-none d-lg-none" data-toggle="collapse" href="#displayOptions" role="button" aria-expanded="true" aria-controls="displayOptions">
                        Display Options
                        <i class="ik ik-chevron-down align-middle"></i>
                    </a>
                    <div class="collapse d-md-block display-options" id="displayOptions">
                    
                        <div class="d-block d-md-inline-block">
                            <button type="button" class="btn btn-primary" @click="addUsager">Ajouter un usager</button>
                            <div class="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                                <form action="" class="">
                                    <input type="text" class="form-control" placeholder="Search.." required="">
                                    <button type="submit" class="btn btn-icon"><i class="ik ik-search"></i></button>
                                    <button type="button" id="adv_wrap_toggler" class="adv-btn ik ik-chevron-down dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                    <div class="adv-search-wrap dropdown-menu dropdown-menu-right" aria-labelledby="adv_wrap_toggler" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(196px, 30px, 0px);">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="libelle">
                                        </div>
                                        <button class="btn btn-theme">Search</button>
                                    </div>
                                </form>
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
                                <th>N° CNI</th>
                                <th>Téléphone</th>
                                <th>Code Usager</th>
                                <th>Détail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in proprietaires" :key="index">
                                <td v-text="user.nom"></td>
                                <td v-text="user.prenom"></td>
                                <td v-text="user.cni"></td>
                                <td v-text="user.tel"></td>
                               <td v-text="user.vehicules[0].code"></td>
                               <td> 
                                    <a @click.prevent="showDetails(user)" href="#">
                                    <i class="ik ik-eye"></i>
                                    </a>
                               </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <usager-details v-if="showDetails" v-bind:usager="user"/>
    </div>
</template>
<script>
import UsagerDetails from "@/views/taximans/TaximanDetail.vue";

export default {
    name:"ListTaximans",
    components: {
        UsagerDetails
       
    },
    data:()=>({
        proprietaires:[],
        user:null
    }),

    methods: {
        addUsager(){
          this.$router.push({name: 'add-usager'})
        },
        getProprietaires(){
            axios.get('/proprietaires').then(response => {
                console.log("propriétaires",response.result)
			    this.proprietaires = response.result	
	        })
        },
        showDetails(user){
            this.user=user
            console.log("userData",user)
        }
    },
    mounted() {
	  this.getProprietaires()
	//   this.$root.$on('new-theme-added', () => {
	// 	  this.getThemes()
	//   })
  }
    
}
</script>