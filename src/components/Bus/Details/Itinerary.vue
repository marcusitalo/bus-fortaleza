<template>
  <div v-if="itineraries" class="itineraryBus">
    <div v-if="itineraries.ida" class="goingBus">
      <div
        v-for="(itinerary, index) in itineraries.ida.itinerarioIda"
        :key="'ig' + index"
        class="itineraryBusView"
      >
        <p class="itineraryView">{{ itinerary.nome }}</p>
      </div>
    </div>
    <div v-if="itineraries.volta" class="returnBus">
      <div
        v-for="(itinerary, index) in itineraries.volta.itinerarioVolta"
        :key="'ir' + index"
        class="itineraryBusView"
      >
        <p class="itineraryView">{{ itinerary.nome }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Itinerary",
  props: {
    itineraries: Object,
    sense: String,
  },
};
</script>
<style scoped>
.itineraryBus {
  display: inline-block;
  width: 50vw;
  padding: 10px;
}
.goingBus,
.returnBus {
  display: inline-block;
  vertical-align: top;
  margin: 0px 25px;
}
p.itineraryView {
  margin: 0px;
  padding: 5px;
  font-size: 12px;
}
.itineraryBusView {
  position: relative;
}
p.itineraryView::before {
  width: 10px;
  height: 10px;
  content: "";
  border: 1px solid;
  position: absolute;
  border-radius: 10px;
  background-color: var(--white);
  margin: 1px -16px;
}
p.itineraryView::after {
  width: 1px;
  height: 20vw;
  content: "";
  position: absolute;
  margin: 13px -5.5px;
  left: 0px;
  background-color: var(--primary);
}
.itineraryBusView:last-child,
.itineraryBusView:first-child {
  color: var(--secondary);
}
.itineraryBusView:last-child > p.itineraryView::after {
  background-color: var(--white);
  width: 3px;
  left: -1px;
}
@media screen and (max-width: 576px) {
  .itineraryBus {
    width: 85%;
    padding: 8%;
  }
}
</style>
