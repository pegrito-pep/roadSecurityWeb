<template>
  <div class="modal fade edit-layout-modal show" id="editLayoutItem" tabindex="-1" role="dialog" aria-labelledby="editLayoutItemLabel" style="display: none; padding-left: 17px;">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editLayoutItemLabel">Utilisateur Associé</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="card sos-st-card facebook resize">
                            <div class="card-block d-flex">
                                <div class="row align-items-center" style="width:58%">
                                    <div class="col">
                                        <h3 class="mb-0"><b-img src="/img/iconeMairie.png"></b-img></h3>
                                        <h4></h4>
                                    </div>
                                </div>
                                <div style="width:38%" class="row align-items-center">
                                    {{ superMairie }}
                                    <p>Nom: <span>TAGNE Sipeuwo</span></p>
                                    <p>Prénom: <span>Miguel Pedro</span></p>
                                    <p>Matricule: <span>CUD1230001</span></p>
                                    <p>N° Téléphone: <span>670114574</span></p>
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


export default {
  name: "super-mairie-details",
  data: () => ({
      mairies:[],
  }),
  methods: {
    
    
    
  },
   mounted() {
    //  this.$root.$on('new-mairie-added', (newMairie) => {
    //         this.superMairie.mairies.unshift(newMairie)
    //     }) 
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