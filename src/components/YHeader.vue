<template>
  <div class="w-100 header">
    <div class="y-header flex-align-sb mr-auto">
      <div class="logo-container">
        <img :src="logo" alt="" class="logo float-l  mr-10">
        <div class="float-l fs-18">
          <span class="lh-1 fw-7">Yomij</span>
          <p class="fs-12 c-6 lh-1"> A Patient In Society</p>
        </div>
      </div>
      <ul class="nav ">
        <li><a class="link" href="">Yomi</a></li>
        <li>
          <router-link class="link" :to="{name: 'AsPhotographer'}">Photographer</router-link>
        </li>
        <li><a class="link" href="">Programmer</a></li>
        <li><a class="link" href="">Music Lover</a></li>
        <li><a class="link" href="">About</a></li>
        <li><a class="button-common contact">Contact Yomi</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo-color.png'

export default {
  name: 'YHeader',
  data () {
    return {
      logo
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    height: 62px;
    z-index: 99;
    padding: 0 20px;
    background-color: #fff;
  }

  .y-header {

    // width: 70%;
    margin: 0 auto;
    width: 100%;
    height: 62px;
    // border-bottom: 1px solid rgba(100,100,100,.2);

    background-color: #fff;
    // line-height: 62px;
    .logo-container {
      height: (40 / 16)+rem;
    }
    .logo {
      height: 2.5rem;
      width: 2.5rem;
    }
    .nav {
      li {
        float: left;
      }
      .link {
        color: #999;
        float: left;
        padding: 19px 12px;
        height: 100%;
        transition: color .2s ease-in-out, opacity .2s ease-in-out;
        &:hover {
          color: #111;
        }
      }
      .contact {
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 1px 1px rgba(0, 0, 0, 0.06);
        border: 1px solid #dddddd;
        top: 12px;
        margin-bottom: 0;

        &:hover {
          border: 1px solid #bbb;
          color: #111;
        }
      }

    }
  }

  @media screen and (max-width: 800px) {

  }

  @media only screen and (min-width: 800px) {
    .example {
      background: green;
    }
  }
</style>
