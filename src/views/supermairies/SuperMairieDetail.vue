<template>
  <div class="modal fade edit-layout-modal show" id="editLayoutItem" tabindex="-1" role="dialog" aria-labelledby="editLayoutItemLabel" style="display: none; padding-left: 17px;">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editLayoutItemLabel">Liste des mairies de {{ superMairie.nom }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-block d-md-inline-block">
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        data-toggle="modal"
                                        data-target="#addMairieModal"
                                    >Ajouter une mairie</button>
                            <div class="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                            </div>
                        </div>
                        <!-- <list-mairies-of-super-mairie v-bind:superMairie="superMairie"/> -->
                        <div class="card sos-st-card facebook resize" v-for="mairie in superMairie.mairies" :key="mairie.idMairie">
                            <div class="card-block">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h3 class="mb-0"><b-img src="/img/iconeMairie.png"></b-img>{{ mairie.nom }}</h3>
                                    </div>
                                    <div class="col-auto">
                                        <h5 class="mb-0"></h5>
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
            <!-- <add-super-mairie /> -->
            <add-mairie v-bind:supermairie="superMairie"/>
        </div>
</template>
<script>
 import AddMairie from "@/views/mairies/AddMairie.vue";

export default {
  name: "super-mairie-details",
  components: {
      AddMairie
  },
  data: () => ({
      mairies:[],
  }),
  methods: {
    
    
    
  },
   mounted() {
     this.$root.$on('new-mairie-added', (newMairie) => {
            this.superMairie.mairies.unshift(newMairie)
        }) 
  },
  props: ["superMairie"],
};
</script>
<style scoped>
/*.modal-body{
     display:flex;
    justify-content:space-between;
}*/
.resize{
    width: 70%;
}
    
</style>