<template>
  <div v-if="schedules" class="schedulesBus">
    <div v-if="schedules[0] && schedules[1]" class="goingReturnBus">
      <h1>
        {{ schedules[0].postoControle }}
      </h1>
      <div
        v-for="schedule in schedules[0].horarios"
        :key="schedule.horario"
        :class="
          'schedulesBusView' +
            (availableGoing == schedule.horario ? ' available' : '')
        "
      >
        <p
          :class="
            'scheduleView ' + getStatusSchedules('going', schedule.horario)
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
        v-for="schedule in schedules[1].horarios"
        :key="schedule.horario"
        :class="
          'schedulesBusView' +
            (availableReturn == schedule.horario ? ' available' : '')
        "
      >
        <p
          :class="
            'scheduleView ' + getStatusSchedules('return', schedule.horario)
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
  data() {
    return {
      indicationAvailableGoing: false,
      indicationAvailableReturn: false,
      availableGoing: "",
      availableReturn: "",
    };
  },
  created() {
    this.indicationAvailableGoing = false;
    this.indicationAvailableReturn = false;
    this.availableGoing = "";
    this.availableReturn = "";
  },
  methods: {
    getStatusSchedules: function(sense, hour) {
      if (hour === "00:00") return true;
      var timeNow = parseInt(this.time.replace(":", ""));
      var schedule = parseInt(hour.replace(":", ""));
      var timeResult = schedule < timeNow;

      this.available(sense, timeResult, hour);

      return timeResult ? "unavailable" : "";
    },
    available: function(sense, timeResult, hour) {
      if (
        !timeResult &&
        !this.indicationAvailableGoing &&
        hour !== "00:00" &&
        sense == "going"
      ) {
        this.indicationAvailableGoing = true;
        this.availableGoing = hour;
      }
      if (
        !timeResult &&
        !this.indicationAvailableReturn &&
        hour !== "00:00" &&
        sense == "return"
      ) {
        this.indicationAvailableReturn = true;
        this.availableReturn = hour;
      }
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
  width: 55px;
  padding: 0px 5px;
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
  text-align: left;
}
.available {
  background-color: var(--primary);
  color: var(--white);
  border-radius: 20px;
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
