<template>
  <div class="container-fluid">
    <!--page header start -->
    <div class="page-header">
      <div class="row align-items-end">
        <div class="col-lg-8">
          <div class="page-header-title">
            <i class="ik ik-file-text bg-blue"></i>
            <div class="d-inline">
              <h5>Mairies de ville</h5>
              <span>Liste des mairies des villes</span>
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
              <li class="breadcrumb-item active" aria-current="page">Mairies de ville</li>
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
                data-target="#superMairieModal"
              >Ajouter une super mairie</button>
              <div class="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
              </div>
            </div>
          </div>
        </div>
        <div class="separator mb-20"></div>
        <div class="row layout-wrap" id="layout-wrap" style="width:99%">
          <div
            class="col-xl-3 col-lg-4 col-12 col-sm-6 mb-4 list-item list-item-grid"
            v-for="item in this.superMairies"
            :key="item.idSuperMairie"
          >
            <div class="card d-flex flex-row mb-3">
              <a
                class="d-flex card-img"
                @click.prevent="showDetails(item)"
                href="#editLayoutItem"
                data-toggle="modal"
                data-target="#editLayoutItem"
              >
                <b-img
                  :src="getImage(item.nom)"
                  class="list-thumbnail responsive border-0"
                  style="height:18em"
                />
              </a>
              <div class="d-flex flex-grow-1 min-width-zero card-content">
                <div
                  class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"
                >
                  <a
                    class="list-item-heading mb-1 truncate w-40 w-xs-100"
                    href="#editLayoutItem"
                    data-toggle="modal"
                    data-target="#editLayoutItem"
                    style="font-weight: bold; text-transform:uppercase;"
                  >{{ item.nom }}</a>
                </div>
                <div class="list-actions">
                  <a @click.prevent="showDetails(item)" href="#">
                    <i class="ik ik-eye"></i>
                  </a>
                </div>
                <div class="custom-control custom-checkbox pl-1 align-self-center">
                  <label class="custom-control custom-checkbox mb-0">
                    <input type="checkbox" class="custom-control-input" />
                    <span class="custom-control-label"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <super-mairie-details v-if="showDetailSMairie" v-bind:superMairie="selectedSuperMairie"/>
     <add-super-mairie />
  </div>
</template>
<script>
 import SuperMairieDetails from "@/views/supermairies/SuperMairieDetail.vue";
  import AddSuperMairie from "@/views/supermairies/AddSuperMairie.vue";

export default {
  name: "super-mairie",
  components: {
    SuperMairieDetails,
    AddSuperMairie
  },
  data: () => ({
    showDetailSMairie:false,
    superMairies: [],
    selectedSuperMairie: null,

  }),

  methods: {
    getImage(nom){
      return "/img/Smairies/" +nom+".png";
    },
    getSuperMairies(){
      axios.get("/supers-mairies").then(response => {
        this.superMairies = response.result;
      })
      .catch((error) => {
        console.log(error)
      });
    },
    showDetails(superMairie) {
      this.showDetailSMairie=true
      this.selectedSuperMairie = superMairie;
      $('#editLayoutItem').modal('show')
    }
    
  },
  mounted() {
    this.getSuperMairies();
    this.$root.$on("new-super-mairie-added", () => {
      this.getSuperMairies();
    });
  }
};
</script>