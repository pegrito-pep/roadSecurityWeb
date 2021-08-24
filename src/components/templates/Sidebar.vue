<template>
    <div class="app-sidebar colored">
        <div class="sidebar-header">
            <a class="header-brand" href="index.html">
                <div class="logo-img mr-2">
                    <img src="/img/logoNav.png" class="header-brand-img" alt="lavalite" style="height: 1.5em; width: 1.5em"> 
                </div>
                <span class="text">BlackList</span>
            </a>
            <button type="button" class="nav-toggle"><i data-toggle="expanded" class="ik ik-toggle-right toggle-icon"></i></button>
            <button id="sidebarClose" class="nav-close"><i class="ik ik-x"></i></button>
        </div>
        <div class="sidebar-content">
            <div class="nav-container">
                <nav id="main-menu-navigation" class="navigation-main">
                    <div v-if="role=='super_admin'" class="nav-lavel">Navigation</div>
                    <div v-if="role=='super_admin'" class="nav-item active">
                        <router-link to="/home">
                            <i class="ik ik-bar-chart-2"></i><span>Dashboard</span>
                        </router-link>
                    </div>
                    <div v-if="role=='super_admin'" class="nav-lavel">Super Admin</div>
                    <div v-if="role=='super_admin'" class="nav-item" @click="manageActiveClass()">
                        <router-link to="/super-mairies">
                            <i class="fas fa-city"></i><span>Communautés Urbaines</span>
                        </router-link>
                    </div>
                    <!--<div v-if="role=='super_admin'" class="nav-item" @click="manageActiveClass()">
                        <router-link to="/super-mairies/utilisateurs">
                            <i class="ik ik-users"></i><span>Utilisateurs</span>
                        </router-link>
                    </div>-->
                    <div v-if="role=='super_maire'" class="nav-lavel">Communautés Urbaines</div>
                    <div v-if="role=='super_maire'" class="nav-item" @click="manageActiveClass()">
                        <router-link to="/mairies">
                            <i class="fa fa-building"></i><span>Mairies</span>
                        </router-link>
                    </div>
                    <div v-if="role=='super_maire'" class="nav-item" @click="manageActiveClass()">
                        <router-link to="/super-mairies/utilisateurs">
                            <i class="ik ik-users"></i><span>Utilisateurs</span>
                        </router-link>
                    </div>
                    <div v-if="role=='maire'" class="nav-lavel">Communes d'Arrondissement</div>
                    <div v-if="role=='maire'" class="nav-item" @click="manageActiveClass()">
                        <router-link to="/mairies/utilisateurs">
                            <i class="ik ik-users"></i><span>Utilisateurs</span>
                        </router-link>
                    </div>
                    <div v-if="role=='maire'" class="nav-item" @click="manageActiveClass()">
                        <router-link to="/taximans">
                            <i class="fa fa-user"></i><span>Gestion des usagers</span>
                        </router-link>
                    </div>
                    <div v-if="role=='maire'" class="nav-item" @click="manageActiveClass()">
                        <router-link to="/add-usager">
                            <i class="fa fa-user-plus"></i><span>Ajouter un usager</span>
                        </router-link>
                    </div>
                    <div v-if="role=='maire'" class="nav-item" @click="manageActiveClass()">
                        <router-link to="/infractions">
                            <i class="fas fa-bell"></i><span>Gestion des infractions</span>
                        </router-link>
                    </div>
                <!--<nav id="main-menu-navigation" class="navigation-main">
                    <div class="nav-lavel">Navigation</div>
                    <div class="nav-item active">
                        <router-link to="/home">
                            <i class="ik ik-bar-chart-2"></i><span>Dashboard</span>
                        </router-link>
                    </div>
                     <div class="nav-item has-sub">
                        <a href="#"><i class="fas fa-city"></i><span>Gestion des superMairies</span></a>
                        <div class="submenu-content">
                            <router-link to="/super-mairies" class="menu-item"><i class="fas fa-city"></i><span>Mairie de la ville</span></router-link>
                            <router-link to="/super-mairies" class="menu-item"><i class="fas fa-user"></i><span>Le Maire de la ville</span></router-link>
                            <div class="nav-item has-sub">
                                <a href="javascript:void(0)" class="menu-item">Gestion des accès</a>
                                <div class="submenu-content">
                                    <router-link to="/super-mairies/roles" class="menu-item"><i class="fas fa-city"></i><span>Rôles</span></router-link>
                                </div>
                                <div class="submenu-content">
                                    <router-link to="/super-mairies/utilisateurs" class="menu-item"><i class="ik ik-users"></i><span>Utilisateurs</span></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-item has-sub">
                        <a href="#"><i class="fa fa-building"></i><span>Gestion des Mairies</span></a>
                        <div class="submenu-content">
                            <router-link to="/mairies" class="menu-item"><i class="fas fa-city"></i><span>Liste des Mairies</span></router-link>
                            <router-link to="/super-mairies" class="menu-item"><i class="fas fa-user"></i><span>Statistiques approfondies</span></router-link>
                            <div class="nav-item has-sub">
                                <a href="javascript:void(0)" class="menu-item">Gestion des accès</a>
                                <div class="submenu-content">
                                    <router-link to="/mairies/roles" class="menu-item"><i class="fas fa-city"></i><span>Rôles</span></router-link>
                                </div>
                                <div class="submenu-content">
                                    <router-link to="/mairies/utilisateurs" class="menu-item"><i class="ik ik-users"></i><span>Utilisateurs</span></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-item has-sub">
                        <a href="#"><i class="fa fa-taxi"></i><span>Gestion des Usagers</span></a>
                        <div class="submenu-content">
                            <router-link to="/usagers" class="menu-item"><i class="fas fa-city"></i><span>Liste des Usagers</span></router-link>
                            <router-link to="/add-usager" class="menu-item"><i class="fas fa-user"></i><span>Ajouter un usager</span></router-link>
                        </div>
                    </div>
                    <div class="nav-item has-sub">
                        <a href="#"><i class="fa fa-building"></i><span>Gestion des Infractions</span></a>
                        <div class="submenu-content">
                            <router-link to="/usagers" class="menu-item"><i class="fas fa-city"></i><span>Infractions entrantes</span></router-link>
                            <router-link to="/add-usager" class="menu-item"><i class="fas fa-user"></i><span>Infractions système</span></router-link>
                        </div>
                    </div>
                    <div class="nav-lavel">Support</div>
                    <div class="nav-item">
                        <a href="javascript:void(0)"><i class="ik ik-monitor"></i><span>Documentation</span></a>
                    </div>-->
        
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data: () => ({
        role:null
    }), 
    methods: {
       manageActiveClass(event){ 
            console.log("target",event)
       },
       //methode de recupération des roles
       async getRoles(){
            let access_token=storage.get("access_token")
        try {
            let roles=await axios.get("/utilisateurs/"+access_token).then(reponse => response.result.roles)
        } catch (error) {notif.error(error.message);return;}
        const url="/supers-mairies/"+idSuperMairie+"/utilisateurs";
          console.log("roles",roles)
        },
    },
    mounted () {
        this.role=storage.get("roles").libelle
        console.log("les roles",this.role)
    }
}
</script>