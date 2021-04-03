<template>
  <div class="viewStreet">
    <div
      v-for="street in streets"
      :key="street.id"
      :class="
        selectedStreet === street.id
          ? 'cardStreet selectedStreet'
          : 'cardStreet'
      "
      @click="showBusByStreet(street)"
    >
      <span class="streetNumber">{{ street.tipo }}</span>
      <p class="streetName">{{ street.nome }}</p>
      <img
        src="../../assets/images/loading.gif"
        class="loading"
        v-if="loadingStreet === street.id"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

const prefixStreet = "street_";

export default {
  name: "CardStreet",
  props: {
    streets: Array,
  },
  data() {
    return {
      selectedStreet: 0,
      buses: [],
      loadingStreet: 0,
    };
  },
  methods: {
    showBusByStreet: async function(street) {
      this.selectedStreet = street.id;
      this.loadingStreet = street.id;
      await this.checkInLocalStorage(street.id);
      this.loadingStreet = 0;
      this.$emit("setBusesByStreet", { buses: this.buses });
    },
    getBusByStreet: async function(street_id) {
      await axios
        .get(`${process.env.VUE_APP_BUS_STREET}${street_id}`)
        .then((res) => {
          this.buses = res.data;
        });
    },
    checkInLocalStorage: function(street_id) {
      if (localStorage[prefixStreet + street_id]) {
        let data = JSON.parse(localStorage[prefixStreet + street_id]);
        this.buses = data.buses;
      }
      return this.setInLocalStorage(street_id);
    },
    setInLocalStorage: async function(street_id) {
      await this.getBusByStreet(street_id);
      const data = {
        buses: this.buses,
      };
      localStorage[prefixStreet + street_id] = JSON.stringify(data);
    },
  },
};
</script>
<style scoped>
.loading {
  position: absolute;
  width: 35px;
  right: -2px;
}
.cardStreet {
  display: flex;
  align-items: center;
  height: 4vh;
  margin: 5px 2px;
  box-shadow: 0px 0px 1px 1px;
  cursor: pointer;
  position: relative;
  background-image: url("../../assets/images/map-marker-512.png");
  padding: 2px 25px;
  background-size: 6%;
  background-repeat: no-repeat;
  background-position: 3px 2px;
}
.cardStreet.selectedStreet {
  background-color: var(--ligthgray);
}
span.streetNumber {
  color: var(--secondary);
  padding: 5px;
  font-weight: bold;
  font-family: "Heebo";
}
@media screen and (max-width: 576px) {
  .cardStreet {
    font-size: 12px;
    padding: 7px 30px;
    font-weight: bolder;
    background-position: center left;
    margin: 5px 5px;
  }
}
</style>
