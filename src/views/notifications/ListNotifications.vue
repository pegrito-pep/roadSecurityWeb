<template>
    <div class="container-fluid">
    <!--page header start -->
        <div class="page-header">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class="page-header-title">
                        <i class="ik ik-file-text bg-blue"></i>
                        <div class="d-inline">
                            <h5>Notifications</h5>
                            <span>Liste des notifications</span>
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
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Notifications</li>
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
                     <div id="vue-app" class="lobby-container">
                        <div @click="cancelSearch" v-if="searchKey || countrySelected || grapesSelected" class="cancel">
                            <h5>Annuler recherche</h5>
                            <i class="fas fa-times"></i>
                        </div>
                        <ul>
                            <li v-on:click="searchInput('name')" class="name">
                            <i class="fas fa-search"></i>
                            <input v-if="inputType == 'name'" v-model="searchKey" type="search" class="search" placeholder="Entrez le nom d'un enfant...">
                            </li>

                            <li v-on:click="searchInput('country');" class="country">
                            <i class="fas fa-globe-africa"></i>
                            <select v-show="inputType == 'country'" v-model="countrySelected">
                                <option value="">Choisissez un pays</option>
                                <option v-for="option in countryOption" :key="option.id" :value="option.id">{{option.name}}</option>
                            </select>
                            </li>

                            <li v-on:click="searchInput('grapes')" class="grapes">
                            <i class="fa fa-mars-double"></i>
                            <div class="radio-container" v-if="inputType == 'grapes'">
                                <div v-for="grape in grapesRadio" :key="grape.name" class="radio">
                                <label :for="grape.name">{{grape.name}}</label>
                                <input v-model="grapesSelected" :id="grape.name" :value="grape.name" type="radio" class="radio-button">
                                </div>
                            </div>
                            </li>
                        </ul>
                        <h1 v-if="inputType == ''" class="title">Liste des Enfants</h1>
                        <h3 v-if="search.length == 0">Aucun résultat</h3>
                        <transition-group name="item-anim" tag="div" class="list-container">
                            <div v-for="(learner, id) in search" :key="learner.idEnfant" class="wine-list">
                            <div class="wine-card">
                                <div class="card-header">
                                <h2>{{learner.prenom}}</h2>
                                <i @click="removeItem(id)" class="fas fa-times"></i>
                                </div>
                                <div class="container">
                                <div class="text-container">
                                    <div class="buttons">
                                        <h4>{{learner.age}} ans</h4>
                                        <h4>{{learner.sexe}}</h4>
                                        <h4>{{learner.langue}}</h4>
                                    </div>
                                    <div class="location">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span> {{learner.parent.pays}}</span>
                                    </div>
                                    <p>{{learner.parent.ville}}</p>
                                </div>
                                <img :src="getImgUrl(learner.avatar)" alt="photo-avatar">
                                </div>
                            </div>
                            </div>
                        </transition-group>
                    </div> 
                </div>
            </div>
        </div>
        <notification-details v-bind:notification="selectedNotification"/>
    </div>
</template>
<script>
import NotificationDetails from '@/views/notifications/NotificationDetails.vue'
export default {
    name:"notifications",
    components: {
        NotificationDetails
    },
    data:()=>({
        selectedNotification:null,
        notifications:[],
        theme:{
            libelle: "",
            illustration:""
        }

    }),

    methods: {
        showDetails(notification) {
            this.selectedNotification = notification;
            console.log("notification",this.selectedNotification)
            $('#editLayoutItem').modal('show')
        },
        getNotifications(){
            axios.get('/notifications').then(response => {
			this.notifications = response.result	
               console.log("notifications",this.notifications)
	        })
        }
    },
    mounted() {
	  this.getNotifications()
	  this.$root.$on('new-notification-added', () => {
		  this.getThemes()
	  })
    }
    
}
</script>