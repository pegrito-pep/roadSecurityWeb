<template>
    <div class="d-flex" style="width:100%">
        <div class="col-xl-3 col-md-6">
            <div class="card social-card">
                <div class="card-body text-center">
                    <h2 class="text-facebook mb-20"><i class="ik ik-log-in"></i></h2>
                    <h3 class="text-facebook fw-700">8</h3>
                    <p>Mairies enregistrées</p>
                    <p class="mb-0 mt-15"></p>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card social-card">
                <div class="card-body text-center">
                    <h2 class="text-twitter mb-20"><i class="ik ik-log-in"></i></h2>
                    <h3 class="text-twitter fw-700">168</h3>
                    <p>taximans enregistrés ce mois</p>
                    <p class="mb-0 mt-15"><i class="fas fa-caret-up mr-10 f-18 text-green"></i>15 ces 7 derniers jours</p>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card social-card">
                <div class="card-body text-center">
                    <h2 class="text-dribbble mb-20"><i class="ik ik-log-in"></i></h2>
                    <h3 class="text-dribbble fw-700">200</h3>
                    <p>taximans par mairie</p>
                    <p class="mb-0 mt-15"><i class="fas fa-caret-up mr-10 f-18 text-green"></i></p>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card social-card">
                <div class="card-body text-center">
                    <h2 class="text-linkedin mb-20"><i class="ik ik-log-in"></i></h2>
                    <h3 class="text-linkedin fw-700">28%</h3>
                    <p> pourcentage de recouvrement des taximans</p>
                    <p class="mb-0 mt-15"><i class="fas fa-caret-down mr-10 f-18 text-red"></i></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import VueMoment from 'vue-moment'
// import moment from 'moment-timezone'
// Vue.use(VueMoment, {
//     moment,
// })
export default {
    name: 'ChildsStats',
    data: () =>({
        stats:{
            total:"",
            garcons:"",
            filles:"",
            nbInscritsMois:"",
            nbInscritsSemaine:"",
            nbInscritsFr:"",
            nbInscritsEn:"",
            nbInscritsFf:"",
            nbInscritsMa:"",
            nbInscritsActifs:0,
            dateMiseEnLigne:""
        },
        ratio:""
    }),
    methods: {
        // getQuestions(id) {
        //     axios.get("/versions/" + id + "/questions").then(response => {
        //         console.log("responseStats", response.result);
        //         this.stats.total = response.result.total;
        //         this.stats.garcons = response.result.garcons;
        //         this.stats.filles = response.result.filles;
        //         this.stats.nbInscritsFr = response.result.fr;
        //         this.stats.nbInscritsEn = response.result.en;
        //         this.stats.nbInscritsMois = response.result.mois;
        //         console.log("stats",this.stats)
        //         // this.stats.total = response.result.total;
        //     });
        // }
  },
  mounted() {
    // axios.get("/stats/enfants").then(response => {
    //             this.stats.total = response.result.total;
    //             this.stats.garcons = response.result.garcons;
    //             this.stats.filles = response.result.filles;
    //             this.stats.nbInscritsFr = response.result.fr;
    //             this.stats.nbInscritsEn = response.result.en;
    //             this.stats.nbInscritsMois = response.result.mois;
    //             this.stats.nbInscritsSemaine=response.result.semaine
    //             console.log("type",typeof this.nbInscritsActifs)
    //             this.ratio= this.nbInscritsActifs/this.stats.total? typeof this.nbInscritsActifs !== 'undefined' :0
    //             // this.dateMiseEnLigne=moment(new Date()).format('Do MMMM YYYY')
    // });
  
    }
}
</script>