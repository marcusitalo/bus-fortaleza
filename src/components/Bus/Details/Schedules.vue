<template>
  <div v-if="schedules.length" class="schedulesBus">
    <div v-for="schedule, index in schedules" :key="schedule.postoControle" :class="'goingReturnBus '+ (index === 0 ? 'going':'return')">
      <h1>
        {{ schedule.postoControle }}
      </h1>
      <div
        v-for="time,key in schedule.horarios"
        :key="'b'+key+index"
        :class="'schedulesBusView '+ getStatusSchedules(time.horario,index)"
      >
        <p
          class="scheduleView"
        >
          {{ time.horario }}
        </p>
        <img
          src="../../../assets/icons/acessibilidade.png"
          title="Possui acessibilidade"
          class="accessibility"
          v-if="time.acessivel == 'sim'"
        />
      </div> 
    </div>
    <div v-if="!(schedules[0] && schedules[1])">
      <h1>Não foi possível localizar os horários disponíveis.</h1>
      <img
        src="../../../assets/images/not-found.png"
        class="not-found-schedules"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Schedules",
  props: {
    schedules: Array,
    time: String
  },
  methods: {
    getStatusSchedules: function(hour,sense) {
      if (hour === "00:00") return "";

      var timeNow = parseInt(this.time.replace(":", ""));
      var schedule = parseInt(hour.replace(":", ""));
      var timeResult = schedule < timeNow;

      if((this.schedules.going == "" && !timeResult && sense == 0)){
          this.schedules.going = hour 
          return ' available'
      }
      if((this.schedules.return == "" && !timeResult && sense == 1)){
          this.schedules.return = hour 
          return ' available'
      }
      
      return timeResult ? "unavailable" : "";
    }      
  },
};
</script>
<style>
.schedulesBus {
  width: 28vw;
  display: inline-block;
  vertical-align: top;
}
.schedulesBusView {
  display: inline-block;
  width: 55px;
  padding: 0px 5px;
}
.schedulesBus h1 {
  width: 99%;
  font-size: 15px;
  color: var(--secondary);
  border-bottom: 1px solid var(--secondary);
}
.scheduleView {
  display: inline-block;
  margin: 0px 5px;
  font-size: 12px;
  text-align: left;
}
.available {
  background-color: var(--primary);
  color: var(--white);
  border-radius: 20px;
} 
.unavailable p{
  text-decoration: line-through;
  color: #333333;
  opacity: 0.5;
}
.accessibility {
  width: 11px;
}
.not-found-schedules {
  width: 50px;
  text-align: center;
}
@media screen and (max-width: 576px) {
  .schedulesBus {
    width: 85%;
    padding: 7%;
    margin-bottom: 100px;
  }
}
</style>
