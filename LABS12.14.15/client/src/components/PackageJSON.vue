<template>
    <div class="card-align">
      <b-card no-body class="overflow-hidden" style="max-width: 750px">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="¿Qué es un package.json?">
              <b-card-text>
                Es un un archivo de definición o manifiesto para nuestro
                proyecto, en el cual especificamos referencias al proyecto como:
                autor, repositorio, versión y sobre todo las dependencias, entre
                otros.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
</template>

<script>
export default {
  name: "PackageJSON",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card-align {
  display: flex;
  justify-content: center;
  margin-top: 4%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
