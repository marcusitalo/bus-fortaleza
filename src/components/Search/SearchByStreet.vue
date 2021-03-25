<template>
  <div class="searchSection">
    <div class="viewSearch">
      <input
        type="text"
        name=""
        id="searchBar"
        placeholder="Pesquisar por logradouro." 
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Pesquisar por logradouro.'" 
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
  name: "SearchByStreet",
  props: {
    streets: Array,
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
        let filteredStreets =
          search.trim() == ""
            ? this.streets
            : this.streets.filter(
                (street) =>
                  (
                    street.tipo.toUpperCase().trim() +
                    " " +
                    street.nome.toUpperCase().trim()
                  ).indexOf(search.toUpperCase().trim()) != -1
              );
        this.$emit("applyFilterStreet", { filteredStreets: filteredStreets });
      }, 800);
    },
    cleanSearchBar() {
      this.search = "";
      this.debounce();
      this.$emit("cleanSearchStreet");
    },
  },
};
</script>
<style scoped>
.searchBar {
  margin: 0px 10px;
  width: 285px;
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
