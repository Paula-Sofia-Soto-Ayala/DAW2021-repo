<template>
  <div>
    <b-card
      v-for="carta in cartas"
      :key="carta.titulo"
      :header="carta.titulo"
      bg-variant="dark"
      text-variant="white"
      class="text-center"
    >
      <b-card-text>
        {{ carta.texto }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export function Carta(titulo, texto) {
  this.titulo = titulo;
  this.texto = texto;
}
export default {
  name: "ModeloVistaControlador",
  props: {
    cartas: {
      required: true,
      validator: function (value) {
        return value.every((e) => e instanceof Carta);
      },
    },
  },
};
</script>

<style></style>
