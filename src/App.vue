<template>
  <div id="app">
    <h1 id="hello">Hello, Vue Jedis</h1>
    <h2 id="imApp">{{ title }}</h2>
    <Parent></Parent>
  </div>
</template>

<script>
import Parent from "./components/Parent.vue";

export default {
  components: {
    Parent: Parent,
  },
  data() {
    return {
      title: "I'm App.vue, Grandmaster Jedi",
    };
  },
 
};
</script>

<style>
#child {
  color: #752e72;
}

#parent {
  color: #47806d;
}

#imApp {
  color: #b6b66c;
}

#hello {
  color: #1f7cda;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
