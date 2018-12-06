<template>
  <div class="main-page">
    <div class="first h-100 w-100">
      <div class="mr-auto w-0 ta-center">
        <div>
          <p class="title lh-1 c-red">Hi, I'm Yomi</p>
          <p class="fs-16 c-9 fw-300 mt-8">These Are Some Roles Of Mine.</p>
        </div>
        <ul class="nav b-bottom b-top flex-align-center">
          <li><a class="link" href="">As Yomi</a></li>
          <li>
            <router-link class="link" :to="{name: 'AsPhotographer'}">As Photographer</router-link>
          </li>
          <li><a class="link" href="">As Programmer</a></li>
          <li><a class="link" href="">As Music Lover</a></li>
          <li><a class="link" href="">About</a></li>
        </ul>
      </div>
      <img :src="logo" class="logo" alt="">
    </div>
    <div class="h-100 w-100 bgc-6">
      a
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.png'

export default {
  name: '',
  data () {
    return {
      logo
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .main-page {
    font-family: "Open Sans";
    height: 100%;
    .logo {
      height: 3rem;
      width: 3rem;
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
    }
    .first {
      background-color: #f6f6f6;
      padding-top: 8rem;
      .title {
        font-size: 3rem;
        font-weight: 500;
      }
      .ta-center {
        width: 770px;
      }
    }
    .nav {
      height: 4.75rem;
      line-height: 4.75rem;
      font-weight: 300;
      margin-top: 3rem;
      .link {
        margin-right: 1rem;
        // padding:
      }
    }
  }
</style>
