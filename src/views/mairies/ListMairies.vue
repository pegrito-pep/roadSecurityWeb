<template>
  <div class="container-fluid">
    <!--page header start -->
    <div class="page-header">
      <div class="row align-items-end">
        <div class="col-lg-8">
          <div class="page-header-title">
            <i class="ik ik-file-text bg-blue"></i>
            <div class="d-inline">
              <h5>Mairies</h5>
              <span>Liste des mairies de la ville de {{ superMairieNom }}</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <nav class="breadcrumb-container" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="../index.html">
                  <i class="ik ik-home"></i>
                </a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Mairies de ville la ville de {{ superMairieNom }}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <!--page header end -->
    <div class="row">
      <div class="col-md-12">
        <div class="mb-2 clearfix">
          <a
            class="btn pt-0 pl-0 d-md-none d-lg-none"
            data-toggle="collapse"
            href="#displayOptions"
            role="button"
            aria-expanded="true"
            aria-controls="displayOptions"
          >
            Display Options
            <i class="ik ik-chevron-down align-middle"></i>
          </a>
          <div class="collapse d-md-block display-options" id="displayOptions">
            <div class="d-block d-md-inline-block">
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#addMairieModal"
              >Ajouter une Commune D'arrondissement</button>
              <div class="search-sm d-inline-block float-md-left mr-1 mb-1 align-top"></div>
              <div class="card" style="width: 19%;position: relative;left: 30%; top: -104px;">
                <div class="user-details text-align-center">
                  <div v-if="superMairieNom =='bafoussam'">
                    <img  src="/img/Smairies/bafoussam.png" />
                  </div>
                  <div v-if="superMairieNom =='Douala'">
                    <img  src="/img/Smairies/douala.png" />
                  </div>
                  <div v-if="superMairieNom =='yaounde'">
                    <img  src="/img/Smairies/Yaounde.png" />
                  </div>
                  <div v-if="superMairieNom =='bertoua'">
                    <img  src="/img/Smairies/bertoua.png" />
                  </div>
                  <div v-if="superMairieNom =='garoua'">
                    <img  src="/img/Smairies/garoua.jpg" />
                  </div>
                  <div v-if="superMairieNom =='ngaoundere'">
                    <img  src="/img/Smairies/ngaoundere.png" />
                  </div>
                  <div v-if="superMairieNom =='maroua'">
                    <img  src="/img/Smairies/maroua.png" />
                  </div>
                  <div v-if="superMairieNom =='ebolowa'">
                    <img  src="/img/Smairies/ebolowa.png" />
                  </div>
                  <div v-if="superMairieNom =='bamenda'">
                    <img  src="/img/Smairies/bamenda.png" />
                  </div>
                  <div v-if="superMairieNom =='buea'">
                    <img  src="/img/Smairies/buea.png" />
                  </div>
                </div>
              </div>
              <div class="float-md-right" style="position: relative;; top: -204px;">
                <span
                  class="text-muted text-small mr-2"
                >Displaying 1-{{ pageSize }} of {{ this.totalItems }} items</span>
                <b-form-select
                  v-model="pageSize"
                  class
                  style="width: 5em; height:2em;"
                  @change="handlePageSizeChange($event)"
                >
                  <option v-for="size in pageSizes" :key="size" :value="size">{{ size }}</option>
                </b-form-select>
              </div>
            </div>
          </div>
        </div>
        <div class="separator mb-20"></div>
        <div class="row layout-wrap d-flex" id="layout-wrap" style="width:90%">
          <div
            style="width:90%"
            class="sos-st-card facebook cont" 
            v-for="mairie in mairies"
            :key="mairie.idMairie"
          >
            <div class="card card-block">
                <div class="row align-items-center">
                  <div class="col">
                    <h3 class="mb-0">
                      <b-img src="/img/iconeMairie.png"></b-img>
                      code:{{ mairie.code }}<br>
                      <span class="pl-3">{{ mairie.nom }}</span>
                    </h3>
                  </div>
                  <div class="col-auto">
                    <h5 class="mb-0"></h5>
                  </div>
                        
                </div>
            </div>
            <!--<div class="card right">
                <div>
                  <h3 class="mb-0">
                    <b-img :src="mairie.maire.avatar"></b-img>
                      <span>{{ mairie.maire.nom }}</span>
                  </h3>
                </div>
                <div class="col-auto">
                  <p>Tél: <span>{{ mairie.maire.tel }}</span></p>
                  <p>Matricule: <span>{{ mairie.maire.matricule }}</span></p>
                </div>
            </div>-->
          </div>
        </div>
      </div>
    </div>
    <add-mairie />
  </div>
</template>
<script>
import AddMairie from "@/views/mairies/AddMairie.vue";

export default {
  name: "list-mairies",
  components: {
    AddMairie
  },
  data: () => ({
    domaine: "",
    mairies: [],
    pageSize: 4,
    pageSizes: [2, 4, 6, 8],
    totalItems: 0,
    superMairieNom: null
  }),

  methods: {
    handlePageChange(value) {
      this.page = value;
      //this.retrieveQuizzes();
    },
    async getMairiesOfSuperMairie() {
      let id = storage.get("superMairie").idSuperMairie;
      this.mairies = await axios
        .get("/supers-mairies/" + id + "/mairies")
        .then(response => response.result);
      console.log("Mairies", this.mairies);
    },
    async getSuperMairieData() {
      this.superMairieNom=storage.get("superMairie").nom
    }
  },
  async mounted() {
    await this.getSuperMairieData();
    await this.getMairiesOfSuperMairie();
    this.$root.$on("new-mairie-added", newMairie => {
      console.log("mairie ajoutée",newMairie)
      this.mairies.unshift(newMairie);
    });
  }
};
</script>
<style scoped>
.user-name {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 900;
}
.user-details {
  padding: 1em;
}
.cont{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.right{
  width:38%;  
}

</style>