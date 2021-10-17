<template>
  <div>
    <ModeloVistaControlador :cartas="cartas" />
  </div>
</template>

<script>
import ModeloVistaControlador from "../components/ModeloVistaControlador.vue";
import { Carta } from "@/components/ModeloVistaControlador.vue";
export default {
  name: "MVC",
  data() {
    return {
      cartas: [
        new Carta(
          "¿Qué beneficios encuentras en el estilo MVC?",
          "El desarrollo de los distintos componentes se puede realizar de manera simultánea entre varios desarrolladores, funciona muy bien para aplicaciones web, alta cohesión: permite la agrupación de lógica de acciones relacionadas en un controlador, lo que lo hace más fácil de leer y reutilizar"
        ),
        new Carta(
          "¿Encuentras alguna desventaja en el estilo arquitectónico MVC?",
          "La curva de aprendizaje para nuevos desarrolladores es un poco superior a los otros modelos que son más simples, la navegación por el código puede ser compleja al disponer de más componentes, lo que se traduce en un mayor número de archivos o unidades."
        ),
      ],
    };
  },
  components: {
    ModeloVistaControlador,
  },
};
</script>
<style scoped>
div {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
}
</style>
