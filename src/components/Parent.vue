<template>
  <div id="parent"><h2> {{ mennssagge }} </h2>
  <Child></Child>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  components: {
    Child: Child
  },

  data() {
    return {
      mennssagge: "I'm Annakin, the Father",
    };
  },

};
</script>

