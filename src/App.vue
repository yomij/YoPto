<template>
  <div id="app" :class="{'has-padding': $route.name !== 'MainPage'}">
    <YHeader v-if="$route.name !== 'MainPage'" />
    <router-view/>
  </div>
</template>

<script>
import YHeader from './components/YHeader'

export default {
  name: 'App',
  components: {
    YHeader
  },
  created () {
    console.log(this.$route)
  },
  methods: {}
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    margin: 0;

  }

  .has-padding {
    padding: 62px 0 0;
  }
</style>
