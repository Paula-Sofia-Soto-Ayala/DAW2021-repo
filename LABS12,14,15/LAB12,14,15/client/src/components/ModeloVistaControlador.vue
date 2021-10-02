<template>
  <div>
    <h1>This is a lista</h1>
    <ul>
      <li v-for="dato in datos" :key="dato">
        {{ dato }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ModeloVistaControlador",
  props: {
    datos: Array,
  },
};
</script>

<style></style>
