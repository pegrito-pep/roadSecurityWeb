<template>
     <div class="modal fade" id="demoModal" tabindex="-1" role="dialog" aria-labelledby="demoModalLabel" style="display: none;" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="demoModalLabel">Ajout d'un type d'infraction</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                <form class="forms-sample" id="test" @submit.prevent="sendTypeInfractionForm" novalidate>
                    <div class="form-group">
                        <label for="exampleInputUsername1">libelle</label>
                        <input type="text" class="form-control" id="libelle" required placeholder="Libelle du type d'infraction" v-model="typeInfraction.libelle">
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
    name: 'add-type-infraction',
    components:{
        //AddQuestion
    },
    data:()=>({
        typeInfraction:{
            libelle:""
        }
    }),
    methods:{

        sendTypeInfractionForm(){
            let data={
                libelle: this.typeInfraction.libelle
            };
            axios.post("types-infractions", data).then(response =>{
                console.log("data",data)
                notif.success(response.message);
                 this.typeInfraction.libelle=null;
                $('#demoModal').modal('hide');
                // setTimeout(function() {$('#demoModal').modal('hide');}, 1000);
                this.$root.$emit("new-type-infraction-added", response.result);
               
            })
            .catch(error => {
                notif.error(error.message);
             });
        }
    }
}
</script>