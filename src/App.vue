<template>
  <div id="app">
    <Title />
    <SearchBus
      v-if="this.buses && searchType == 'bus'"
      :buses="this.buses"
      @applyFilterBus="applyingFilterBus($event)"
    />
    <SearchByStreet
      v-if="this.streets && searchType == 'street'"
      :streets="this.streets"
      @applyFilterStreet="applyingFilterStreet($event)"
      @cleanSearchStreet="cleanSearchStreet()"
    />
    <span class="changeSearch" @click="changeSearch()">{{ labelSearch }}</span>
    <div v-if="this.loading">
      <img src="./assets/images/loading.gif" class="loading" />
    </div>
    <div class="viewsInformations">
      <CardStreet
        v-if="this.filteredStreets && searchType == 'street'"
        :streets="this.filteredStreets"
        @setBusesByStreet="showBusByStreet($event)"
        class="listsCards"
      />
      <CardBus
        v-if="
          this.filteredBuses &&
            (searchType == 'bus' || showBusesByStreet == true)
        "
        :buses="this.filteredBuses"
        :numberBus="this.numberBus"
        @detailsBus="detailsBus($event)"
        class="listsCards"
      />
    </div>
    <DetailsBus
      v-if="this.numberBus"
      :showDetails="this.showDetailsBus"
      :numberBus="this.numberBus"
      :nameFullBus="this.nameBus"
      @closeDetails="closeDetailsBus()"
    />
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import SearchBus from "./components/Search/SearchByBus.vue";
import SearchByStreet from "./components/Search/SearchByStreet.vue";
import CardBus from "./components/Bus/CardBus";
import CardStreet from "./components/Street/CardStreet.vue";
import DetailsBus from "./components/Bus/DetailsBus.vue";

import axios from "axios";

export default {
  name: "App",
  components: {
    Title,
    SearchBus,
    SearchByStreet,
    CardBus,
    CardStreet,
    DetailsBus,
  },
  data() {
    return {
      buses: [],
      filteredBuses: [],
      streets: [],
      filteredStreets: [],
      numberBus: null,
      searchType: "bus",
      labelSearch: "Pesquisar por via",
      showBusesByStreet: false,
      nameBus: "",
      showDetailsBus: false,
      loading: true,
    };
  },
  created() {
    if (localStorage.data) {
      let data = JSON.parse(localStorage.data);
      this.buses = data.buses;
      this.filteredBuses = this.buses;
      this.streets = data.streets;
      this.filteredStreets = this.streets;
    } else {
      this.setInLocalStorage();
    }
    this.loading = false;
  },
  methods: {
    getBuses: async function() {
      await axios.get(`${process.env.VUE_APP_BUS}`).then((res) => {
        this.buses = res.data;
      });
    },
    getStreets: async function() {
      await axios.get(`${process.env.VUE_APP_STREETS}`).then((res) => {
        this.streets = res.data;
      });
    },
    closeDetailsBus() {
      this.showDetailsBus = false;
    },
    detailsBus: function(event) {
      this.numberBus = event.numberBus;
      this.nameBus = event.name;
      this.showDetailsBus = true;
    },
    setInLocalStorage: async function() {
      await this.getBuses();
      await this.getStreets();

      const data = {
        buses: this.buses,
        streets: this.streets,
      };
      this.filteredBuses = this.buses;
      this.filteredStreets = this.streets;
      localStorage.data = JSON.stringify(data);
    },
    showBusByStreet(event) {
      this.showBusesByStreet = true;
      this.filteredBuses = event.buses;
    },
    cleanSearchStreet() {
      this.showBusesByStreet = false;
      this.filteredBuses = this.buses;
    },
    applyingFilterBus(event) {
      this.filteredBuses = event.filteredBuses;
    },
    applyingFilterStreet(event) {
      this.filteredStreets = event.filteredStreets;
    },
    changeSearch() {
      this.searchType = this.searchType == "bus" ? "street" : "bus";
      this.labelSearch =
        this.searchType == "bus" ? "Pesquisar por via" : "Pesquisar por Ônibus";
      this.filteredBuses = this.buses;
      this.showBusesByStreet = false;
    },
  },
};
</script>

<style>
html {
  margin: 0px auto;
  padding: 0px auto;
  background-image: url("assets/images/bus.gif");
  background-size: 50%;
  background-repeat: no-repeat;
  width: 99vw;
  height: 100vh;
  background-position: bottom right;
}
#app {
  text-align: left;
  color: var(--primary);
}
.changeSearch {
  font-size: 9px;
  color: var(--secondary);
  margin: 0px 10px;
  display: flex;
  text-decoration: underline;
  cursor: pointer;
  padding: 3px 5px;
}
.viewsInformations {
  display: flex;
  padding: 10px;
  flex: 1;
  flex-flow: wrap;
  position: relative;
}
img.loading {
  width: 100px;
}
.listsCards {
  height: 70vh;
  overflow: auto;
  width: 400px;
}
::-webkit-scrollbar {
  width: 7px;
  border: 1px solid var(--ligthblue);
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background: var(--secondary);
  border-radius: 10px;
  height: 200px;
}
</style>
