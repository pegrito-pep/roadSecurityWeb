<template>
  <div class="modal fade edit-layout-modal show" id="editLayoutItem" tabindex="-1" role="dialog" aria-labelledby="editLayoutItemLabel" style="display: none; padding-left: 17px;">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editLayoutItemLabel">Information détaillées Sur Monsieur {{ nomComplet }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-block d-md-inline-block">
                                    <button
                                        type="button"
                                        class="btn btn-info btn-block"
                                        data-toggle="modal"
                                        data-target="#versionModal"
                                    >Voir tous ses taximans</button>
                            <div class="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                            </div>
                        </div>
                        <div class="globalCont">
                            <div class="piloted" v-if="usager.urlCni">
                                <p class="mb-0  fw-700">Photo CNI</p>
                                <div class="redim">
                                    <img :src="usager.urlCni">
                                </div>
                            </div>
                            <div class="piloted" v-if="usager.urlPermis">
                                <p class="mb-0  fw-700">Photo Permis</p>
                                <div class="redim">
                                    <img :src="usager.urlPermis">
                                </div>
                            </div>
                        </div>
                        <h5 class="text-vehicule">Liste des vehicules de M. {{ usager.nom }}</h5>
                        
                        
            
                        <div v-for="vehicule in usager.vehicules" :key="vehicule.idVehicule" class="wine-list">
                            <!--<div class="first">
                                <div class="left-v">
                                    <div class="col">
                                        <h6 class="mb-5">Marque</h6>
                                        <h5 class="mb-0  fw-700">{{ vehicule.marque }}</h5>
                                    </div>
                                    <div class="col-auto text-center">
                                        <p class="mb-5">N° Carte Grise</p>
                                        <h6 class="mb-0"><h6 class="mb-5 fw-700">{{ vehicule.carteGrise }}</h6></h6>
                                    </div>
                                    <div class="col-auto text-center">
                                        <p class="mb-5">Code du véhicule</p>
                                        <h6 class="mb-0"><h6 class="mb-5 fw-700">{{ vehicule.code }}</h6></h6>
                                    </div>
                                </div>
                                <div class="right-v">
                                    <div class="col">
                                        <img :src="vehicule.urlCarteGrise">
                                    </div>
                                </div>
                            </div>
                            <div class="second">
                                <button type="button" class="btn btn-secondary">Voir les taximans de ce véhicule</button>
                            </div>-->
                            <div class="wine-card">
                                <div class="first">
                                    <div class="left-v">
                                        <div>
                                            <h5><span class="mb-0  fw-700">Marque</span> <span class="text-vehicule-details"> {{ vehicule.marque }}</span> </h5>
                                        </div>
                                         <div>
                                            <h5><span class="mb-0  fw-700">N° Carte Grise</span> <span class="text-vehicule-details"> {{ vehicule.carteGrise }}</span> </h5>
                                        </div>
                                        <div>
                                            <h5><span class="mb-0  fw-700">Code du véhicule</span> <span class="text-vehicule-details">{{ vehicule.code }}</span>  </h5>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-secondary">Voir les taximans de ce véhicule</button>
                                        </div>
                                    </div>
                                    <div class="right-v">
                                        <div class="col">
                                            <img :src="vehicule.urlCarteGrise">
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
	                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
//import ListTaximans from '@/views/taximans/ListTaximans.vue'

export default {
  name: "TaximanDetail",
  props: ["usager"],
  components: {
     // ListTaximans
  },
  data: () => ({
    //  selectedQuiz:null 
  }),
  computed:{
      nomComplet(){
          return this.usager.nom +" "+this.usager.prenom
      }
  },
  methods: {
    // viewQuestions(version){
    //         $('#editLayoutItem').modal('hide');
    //           let idVersion = version.idVersion;
    //          this.$router.push({ name: "/version-details", params: { idVersion } });
    // },
    // getImgUrl(pic) {
    //     return "/img/imgVersions/" + pic;
    // }
  },
   mounted() {
  
  },

};
</script>
<style>
@font-face {
  font-family: "font-1";
  src: url(/fonts/rampart-one-Font/RampartOne-Regular.ttf);
}
.globalCont{
    width: 100%;
    display:flex;
}
.globalCont .piloted{
    width: 48%;
}
/*.globalCont .piloted  img{
    width: 80%;
}*/
.redim{
    width:250px;
    height:150px;
}
.redim img{
    width: 100%;
}
.text-vehicule{
    font-family: "font-1", sans-serif;
    font-size:3em;
    color: #0a0701fa;
    margin-top:5rem;
}
.text-vehicule-details{
    font-family: "font-1", sans-serif;
    font-size:2em;
    color: #0a0701fa;
}
.wine-card{
  background: #ACAFAFFA;
  border-radius: 25px;
  padding: 10px;
  overflow: hidden;
  position: relative;
  height: 100%;
  box-shadow: 1px 1px 5px rgba(226, 226, 226, 0.178);
  margin: 14px auto 0;
}
.left-v{
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
}
.wine-card .first{
    display:flex;
    justify-content:space-between;
}


</style>
