<template>
  <div class="viewBus">
    <div
      v-for="bus in buses"
      :key="bus.numero"
      class="cardBus"
      @click="showDetails(bus)"
    >
      <span class="busNumber">{{ bus.numero | formatNumber }}</span>
      <p class="busName">{{ bus.nome }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBus",
  props: {
    buses: Array,
  },
  data() {
    return {
      numberBus: null,
    };
  },
  methods: {
    showDetails: function(bus) {
      this.$emit("detailsBus", { numberBus: bus.numero, name: bus.numeroNome });
    },
  },
  filters: {
    formatNumber(value) {
      return ("" + value).padStart(3, "0");
    },
  },
};
</script>
<style scoped>
.cardBus {
  display: flex;
  align-items: center;
  height: 4vh;
  margin: 5px 2px;
  padding: 2px 30px;
  box-shadow: 0px 0px 1px 1px;
  cursor: pointer;
  background-image: url("../../assets/images/bus-stop.png");
  background-size: 9%;
  background-repeat: no-repeat;
}
span.busNumber {
  color: var(--secondary);
  padding: 5px;
}
.viewBus::-webkit-scrollbar {
  width: 7px;
  border: 1px solid var(--ligthblue);
  border-radius: 20px;
}
.viewBus::-webkit-scrollbar-thumb {
  background: var(--secondary);
  border-radius: 10px;
  height: 200px;
}
</style>
