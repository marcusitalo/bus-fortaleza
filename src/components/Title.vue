<template>
  <div>
    <h2>Ônibus de Fortaleza</h2>
    <span
      >Horários e itinerário das linhas de ônibus da cidade de Fortaleza</span
    >
  </div>
</template>

<script>
export default {
  name: "Title",
};
</script>
<style scoped>
h2 {
  margin: 0px;
  color: var(--primary);
  margin: 0px 8px;
}
span {
  font-size: 10px;
  color: var(--secondary);
  font-family: system-ui;
  margin: 0px 8px;
  border-bottom: 1px solid;
  width: 95%;
  display: block;
  margin-bottom: 10px;
}
</style>
