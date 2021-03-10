<template>
  <div class="viewDetails" v-if="showDetails">
    <div>
      <div class="headerDetails">
        <h1>{{ nameFullBus }}</h1>
        <span>{{ this.dateNow + " " + this.timeNow }}</span>
      </div>
      <span class="closeDetails" @click="closeDetails()"
        ><img src="../../assets/images/close.png"
      /></span>
    </div>
    <div>
      <Itinerary :itineraries="this.itinerary" />
      <Schedules :schedules="this.schedules" :time="this.timeNow" />
    </div>
  </div>
</template>

<script>
import Itinerary from "./Details/Itinerary";
import Schedules from "./Details/Schedules";

import axios from "axios";

const prefixBus = "bus_";

export default {
  name: "DetailsBus",
  components: {
    Itinerary,
    Schedules,
  },
  props: {
    numberBus: Number,
    nameFullBus: String,
    showDetails: Boolean,
  },
  data() {
    return {
      itinerary: {},
      schedules: [],
      dateNow: "",
      timeNow: "",
    };
  },
  created() {
    this.getDataBus();
  },
  beforeUpdate() {
    this.getDataBus();
  },
  methods: {
    getDataBus() {
      if (localStorage[prefixBus + this.numberBus]) {
        let data = JSON.parse(localStorage[prefixBus + this.numberBus]);
        if (data.dateCache != this.getCurrentDate()) {
          localStorage.removeItem(prefixBus + this.numberBus);
          this.setInLocalStorage();
        } else {
          this.schedules = data.schedules;
          this.itinerary = data.itinerary;
        }
      } else {
        this.setInLocalStorage();
      }
      var date = new Date();
      this.getDateNow(date);
      this.getTimeNow(date);
    },
    closeDetails() {
      this.$emit("closeDetails");
    },
    getDateNow(date) {
      this.dateNow =
        ("0" + date.getDate()).substr(-2) +
        "/" +
        ("0" + (date.getMonth() + 1)).substr(-2) +
        "/" +
        date.getFullYear();
      return this.dateNow;
    },
    getTimeNow(date) {
      this.timeNow =
        ("0" + date.getHours()).slice(-2) +
        ":" +
        ("0" + date.getMinutes()).slice(-2);
      return this.timeNow;
    },
    getCurrentDate: function() {
      const date = new Date();
      const day = ("0" + date.getDate()).slice(-2);
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const year = date.getFullYear();
      return `${year}${month}${day}`;
    },
    getSchedules: async function() {
      try {
        await axios
          .get(
            `${process.env.VUE_APP_SCHEDULES}${
              this.numberBus
            }?data=${this.getCurrentDate()}`
          )
          .then((res) => {
            this.schedules = res.data;
          })
          .catch(function(error) {
            if (error.response) {
              this.schedules = [];
            }
          });
      } catch (error) {
        this.schedules = [];
      }
    },
    getItinerary: async function() {
      try {
        await axios
          .get(`${process.env.VUE_APP_ITINERARY}${this.numberBus}`)
          .then((res) => {
            this.itinerary = res.data;
          })
          .catch(function(error) {
            if (error.response) {
              this.itinerary = {};
            }
          });
      } catch (error) {
        this.itinerary = {};
      }
    },
    setInLocalStorage: async function() {
      await this.getSchedules();
      await this.getItinerary();

      const data = {
        schedules: this.schedules,
        itinerary: this.itinerary,
        dateCache: this.getCurrentDate(),
      };

      localStorage[prefixBus + this.numberBus] = JSON.stringify(data);
    },
  },
};
</script>
<style scoped>
span.closeDetails {
  position: absolute;
  top: 3vh;
  right: 5vw;
  cursor: pointer;
}
span.closeDetails img {
  width: 30px;
}
.viewDetails {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: absolute;
  background-color: var(--white);
  top: 0px;
  left: 0px;
  overflow: auto;
  z-index: 2;
  background-image: url("../../assets/images/details-background.gif");
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: bottom right;
}
.headerDetails {
  text-align: center;
  color: var(--white);
  padding: 20px;
  background-color: var(--primary);
}
.headerDetails h1 {
  font-size: 35px;
  margin: 0px;
}
.headerDetails span {
  font-size: 12px;
}
@media screen and (max-width: 576px) {
  .viewDetails {
    background-size: 50%;
  }
}
</style>
