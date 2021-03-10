<template>
  <div class="searchSection">
    <div class="viewSearch">
      <input
        type="text"
        name=""
        id="searchBar"
        placeholder="Pesquisar seu Ônibus."
        v-model="search"
        class="searchBar"
        @keyup="debounce"
      />
      <span
        for="searchBar"
        v-if="search"
        class="btn-clean"
        @click="cleanSearchBar"
        >X</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchByBus",
  props: {
    buses: Array,
  },
  data() {
    return {
      search: "",
      timeDelay: null,
    };
  },
  methods: {
    debounce: function() {
      clearTimeout(this.timeDelay);
      this.timeDelay = this.applyFilter(this.search);
    },
    applyFilter: function(search) {
      this.timeDelay = setTimeout(() => {
        let filteredBuses =
          search.trim() == ""
            ? this.buses
            : this.buses.filter(
                (bus) =>
                  bus.numeroNome.toUpperCase().indexOf(search.toUpperCase()) !=
                  -1
              );
        this.$emit("applyFilterBus", { filteredBuses: filteredBuses });
      }, 800);
    },
    cleanSearchBar() {
      this.search = "";
      this.debounce();
    },
  },
};
</script>
<style scoped>
.searchBar {
  margin: 0px 10px;
  width: 300px;
  border: 0px;
  padding: 5px;
  border: 1px solid var(--primary);
  text-align: center;
  border-radius: 20px;
  font-family: monospace;
  color: var(--primary);
  font-weight: 600;
  padding-right: 28px;
}
.searchBar::placeholder {
  color: var(--primary);
}
.viewSearch {
  display: inline-block;
}
.btn-clean {
  position: absolute;
  margin: 1px -39px;
  font-family: cursive;
  font-size: 15px;
  font-weight: bold;
  color: var(--white);
  cursor: pointer;
  background-color: var(--secondary);
  width: 28px;
  height: 25px;
  border-top-right-radius: 20px;
  text-align: center;
  border-bottom-right-radius: 20px;
}
</style>
