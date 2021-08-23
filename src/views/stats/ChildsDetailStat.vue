<template>
  <div class="d-flex" style="width:100%">
    <div class="col-xl-3 col-md-6 pilote0">
      <div class="card bg-facebook soc-cont-card">
        <div class="card-block">
          <div class="soc-slider">
            <div class="owl-carousel owl-loaded owl-drag" id="fb-slider">
              <div class="owl-stage-outer">
                <div
                  class="owl-stage"
                  style="transform: translate3d(-885px, 0px, 0px); transition: all 0.25s ease 0s; width: 1770px;"
                >
                  <div class="owl-item cloned" style="width: 295px;">
                    <div class="item">
                      <h2>Garçons :{{ this.childsDetailsStats.nbInscritsG }}</h2>
                    </div>
                  </div>
                  <div class="owl-item cloned" style="width: 295px;">
                    <div class="item">
                      <h2>Filles :{{ this.childsDetailsStats.nbInscritsF }}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <i class="soc-cont-icon" v-bind:class="{ 'fas fa-male': isActive, 'fa fa-female': !isActive }"></i>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 pilote1">
      <div class="card bg-twitter soc-cont-card">
        <div class="card-block">
          <div class="soc-slider">
            <div class="owl-carousel owl-loaded owl-drag" id="tw-slider">
              <div class="owl-stage-outer">
                <div
                  class="owl-stage"
                  style="transform: translate3d(-590px, 0px, 0px); transition: all 0.25s ease 0s; width: 1770px;"
                >
                  <div class="owl-item cloned" style="width: 295px;">
                    <div class="item">
                      <h2>Garçons :{{ this.ratioGarcons }}%</h2>
                    </div>
                  </div>
                  <div class="owl-item cloned" style="width: 295px;">
                    <div class="item">
                      <h2>Filles:{{ this.ratioFilles }}%</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <i class="ik ik-bar-chart soc-cont-icon"></i>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 pilote2">
      <div class="card bg-google soc-cont-card">
        <div class="card-block">
          <div class="soc-slider">
            <div class="owl-carousel owl-loaded owl-drag" id="gp-slider">
              <div class="owl-stage-outer">
                <div
                  class="owl-stage"
                  style="transform: translate3d(-590px, 0px, 0px); transition: all 0.25s ease 0s; width: 1770px;"
                >
                  <div class="owl-item cloned" style="width: 295px;">
                    <div class="item">
                      <h3>de 0 à 5 ans: {{ this.nbZeroCinq }}</h3>
                    </div>
                  </div>
                  <div class="owl-item cloned" style="width: 295px;">
                    <div class="item">
                      <h3>de 5 à 10 ans: {{ this.nbCinqDix }}</h3>
                    </div>
                  </div>
                  <div class="owl-item active" style="width: 295px;">
                    <div class="item">
                      <h3>de 10 à 15 ans: {{ this.nbDixQuinze }}</h3>
                    </div>
                  </div>
                  <div class="owl-item" style="width: 295px;">
                    <div class="item">
                      <h3>de 15 à 18 ans: {{ this.nbQuinzeDixHuit }}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <i class="ik ik-bar-chart-2 soc-cont-icon"></i>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 pilote3">
      <div class="card bg-insta soc-cont-card">
        <div class="card-block">
          <div class="soc-slider">
          <b-carousel
                id="carousel-1"
                :interval="4000"
                
                img-width="1024"
                img-height="200"
                style="text-shadow: 1px 1px 2px #333;"
            >

                <b-carousel-slide  v-for="(item) in nbrPays" :key="item.pays">
                    <h3>{{ item.pays }} : {{ item.nbr}}</h3>
                    
                </b-carousel-slide>
            </b-carousel>
          </div>
          <i class="fa fa-flag soc-cont-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChildsDetailsStats",
  data: () => ({
    childsDetailsStats: {
      nbTotal: "",
      nbInscritsG: "",
      nbInscritsF: ""
    },
    ratioGarcons: "",
    ratioFilles: "",
    nbZeroCinq: 0,
    nbCinqDix: 0,
    nbDixQuinze: 0,
    nbQuinzeDixHuit: 0,
    nbrPays: [],
    isActive:true,
  }),
  methods: {
    changeIconGender(){
        this.isActive=!this.isActive;
    },
    getLangStats() {
      axios.get("/stats/enfants").then(response => {
        this.childsDetailsStats.nbTotal = response.result.total;
        this.childsDetailsStats.nbInscritsG = response.result.garcons;
        this.childsDetailsStats.nbInscritsF = response.result.filles;
        this.ratioGarcons =
          (this.childsDetailsStats.nbInscritsG /
            this.childsDetailsStats.nbTotal) *
          100;
        this.ratioFilles =
          (this.childsDetailsStats.nbInscritsF /
            this.childsDetailsStats.nbTotal) *
          100;
        this.nbrPays = response.result.nbrPays;
        console.log("childsDetailsStats", this.childsDetailsStats);
        console.log("nbrPays", this.nbrPays);

        $("#ps-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay: true,
        nav: false,
        loop: true
      });
      });
    },

    carousel: function() {
      // Social Slider start
      $("#fb-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay: true,
        nav: false,
        loop: true
      });
      $("#tw-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay: true,
        nav: false,
        loop: true
      });
      $("#gp-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay: true,
        nav: false,
        loop: true
      });
      
      // Social Slider end
    }
  },
  async mounted() {
    await this.getLangStats();
    this.$root.$on("new-synchro-added", () => {
      this.getLangStats();
    });

    this.carousel();
  },
  created() {
    this.interval = setInterval(() => this.changeIconGender(), 5000);
}
};
</script>
<style>
#carousel-1 .carousel-caption {
    position: relative !important;
    left:0%!important;
}

</style>
<style scoped>

.soc-cont-card:after{
    color: black;
   font-weight: bold;
  padding-left:49px!important;
   
}
.pilote0 .soc-cont-card:after {
  content: "Nombre d'inscrits" !important;
 
}
.pilote1 .soc-cont-card:after {
  content: "Taux par sexe" !important;
  /*font-weight: bold;*/
}
.pilote2 .soc-cont-card:after {
  content: "Enfants par tranche d'âge" !important;
 /* font-weight: bold;*/
}
.pilote3 .soc-cont-card:after {
  content: "Enfants par pays" !important;
  /*font-weight: bold;*/
}
.bg-insta {
  background-color: #4fd11c !important;
}
</style>