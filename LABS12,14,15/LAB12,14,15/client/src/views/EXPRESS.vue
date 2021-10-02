<template>
  <div>
    <PackageJSON />
  </div>
</template>

<script>
// @ is an alias to /src
import PackageJSON from "@/components/PackageJSON.vue";

export default {
  name: "EXPRESS",
  components: {
    PackageJSON,
  },
};
</script>
