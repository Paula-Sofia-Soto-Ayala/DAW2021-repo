<template>
  <div>
    <div>Only Sofiringa</div>
    <ModeloVistaControlador :datos="lista" />
  </div>
</template>

<script>
import ModeloVistaControlador from "../components/ModeloVistaControlador.vue";
export default {
  name: "MVC",
  data() {
    return {
      lista: ["Sofia", "Lalo"],
    };
  },
  components: {
    ModeloVistaControlador,
  }
};
</script>
<style scoped>
div {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
}
</style>
