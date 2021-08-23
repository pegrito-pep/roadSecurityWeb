<template>
    <div class="d-flex" style="width:100%">
        <div class="col-xl-3 col-md-6">
            <div class="card social-card">
                <div class="card-body text-center">
                    <h2 class="text-facebook police mb-20">8000</h2>
                    <h3 class="text-facebook  fw-700"></h3>
                    <p>estimation moyenne de taximans</p>
                    <p class="mb-0 mt-15"></p>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card social-card">
                <div class="card-body text-center">
                    <h2 class="text-twitter police mb-20">35%</h2>
                    <h3 class="text-twitter fw-700"></h3>
                    <p>pourcentage de recouvrement actuel</p>
                    <p class="mb-0 mt-15"></p>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card social-card">
                <div class="card-body text-center">
                    <h2 class="text-dribbble police mb-20">40 %</h2>
                    <h4 class="text-dribbble fw-700">Mairie de de Douala V</h4>
                    <p>inscrits</p>
                    <p class="mb-0 mt-5">mairie ayant le taux le plus élevé</p>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card social-card">
                <div class="card-body text-center">
                    <h2 class="text-linkedin police mb-20">10%</h2>
                    <h4 class="text-linkedin fw-700">Mairie de de Douala IV</h4>
                    <p>inscrits</p>
                    <p class="mb-0 mt-5">mairie ayant le taux le moins élevé</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TaximansStats',
    data: () =>({
        langStats:{
            nbInscritsFr:"",
            nbInscritsEn:"",
            nbInscritsFf:0,
            nbInscritsMa:0,
        }
    }),
    methods: {
        getLangStats() {
            axios.get("/stats/enfants").then(response => {
                console.log("languesStats", response.result);
                this.langStats.nbInscritsFr = response.result.fr;
                this.langStats.nbInscritsEn = response.result.en;
                this.langStats.nbInscritsFf = response.result.ff;
                this.langStats.nbInscritsMa = response.result.ma;
            });
        }
  },
   async mounted() {
    await this.getLangStats()
	   this.$root.$on('new-synchro-added', () => {
		  this.getLangStats()
	  })

  }
}
</script>
<style scoped>
@font-face {
    font-family: "Comic_Neue";
  src: local("Comic_Neue"), url("/fonts/Comic_Neue/ComicNeue-LightItalic.ttf") format("ttf");

}
.police {
    font-family: "Comic_Neue";
}
</style>