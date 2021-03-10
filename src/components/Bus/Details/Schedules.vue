<template>
  <div v-if="schedules" class="schedulesBus">
    <div v-if="schedules[0] && schedules[1]" class="goingReturnBus">
      <h1>
        {{ schedules[0].postoControle }}
      </h1>
      <div
        v-for="(schedule, index) in schedules[0].horarios"
        :key="'sg' + index"
        class="schedulesBusView"
      >
        <p
          :class="
            diffHour(schedule.horario)
              ? 'scheduleView unavailable'
              : 'scheduleView'
          "
        >
          {{ schedule.horario }}
        </p>
        <img
          src="../../../assets/icons/acessibilidade.png"
          title="Possui acessibilidade"
          class="accessibility"
          v-if="schedule.acessivel == 'sim'"
        />
      </div>
    </div>
    <div v-if="schedules[0] && schedules[1]" class="goingReturnBus">
      <h1>
        {{ schedules[1].postoControle }}
      </h1>
      <div
        v-for="(schedule, index) in schedules[1].horarios"
        :key="'sr' + index"
        class="schedulesBusView"
      >
        <p
          :class="
            diffHour(schedule.horario)
              ? 'scheduleView unavailable'
              : 'scheduleView'
          "
        >
          {{ schedule.horario }}
        </p>
        <img
          src="../../../assets/icons/acessibilidade.png"
          title="Possui acessibilidade"
          class="accessibility"
          v-if="schedule.acessivel == 'sim'"
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
    time: String,
  },
  methods: {
    diffHour: function(hour) {
      if (hour === "00:00") return false;
      var timeNow = parseInt(this.time.replace(":", ""));
      var schedule = parseInt(hour.replace(":", ""));

      return schedule < timeNow;
    },
  },
};
</script>
<style scoped>
.schedulesBus {
  width: 30vw;
  display: inline-block;
  vertical-align: top;
}
.schedulesBusView {
  display: inline-block;
}
.schedulesBus h1 {
  width: 99%;
  font-size: 15px;
  color: var(--secondary);
  border-bottom: 1px solid var(--secondary);
}
p.scheduleView {
  display: inline-block;
  margin: 0px 5px;
  font-size: 12px;
}
p.unavailable {
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
    padding: 8%;
    margin-bottom: 100px;
  }
}
</style>
