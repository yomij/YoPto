<template>
  <div class="photo-lists" ref="">
    <div class="photos-container" v-if="screenWidth">
      <big-photo :imgOb="showImg"></big-photo>
      <div class="photos" v-for="i in listCount" :key="i" :style="{width: 100.0 / listCount + '%'}" ref="photosLength" @click="lookBigPhoto($event, i - 1)">
        <photo-item :data-index='index'  v-for="(img, index) in lists[i - 1]" :key="index" :imgOb="img" :standardWidth="standardWidth" :ref="'pi' + index"></photo-item>  
      </div>
    </div>
  </div>
</template>

<script>
import PhotoItem from './PhotoItem'
import BigPhoto from './BigPhoto'

export default {
  name: 'AsPhotographer',
  components: {
    PhotoItem,
    BigPhoto
  },
  data () {
    return {
      screenWidth: 0,
      listCount: 0,
      timer: false,
      lists: [],
      showImg: {},
      standardWidth: 0,
      testImg: ['http://img.club.pchome.net/kdsarticle/2014/03/27/f6b3a5a63ab45b23ca0e25bb1b8b5a87.jpg', 'https://images.unsplash.com/photo-1534865244288-b47fca3a35e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a37ca6252a729bfa42706b52771382f2&auto=format&fit=crop&w=334&q=80', 'https://images.unsplash.com/photo-1534941946572-23438b26af30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a39cbef202ec33200977e0d25e9f5e8&auto=format&fit=crop&w=750&q=80','http://img.club.pchome.net/kdsarticle/2014/03/27/f6b3a5a63ab45b23ca0e25bb1b8b5a87.jpg', 'https://images.unsplash.com/photo-1534865244288-b47fca3a35e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a37ca6252a729bfa42706b52771382f2&auto=format&fit=crop&w=334&q=80', 'https://images.unsplash.com/photo-1534941946572-23438b26af30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a39cbef202ec33200977e0d25e9f5e8&auto=format&fit=crop&w=750&q=80','http://img.club.pchome.net/kdsarticle/2014/03/27/f6b3a5a63ab45b23ca0e25bb1b8b5a87.jpg', 'https://images.unsplash.com/photo-1534865244288-b47fca3a35e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a37ca6252a729bfa42706b52771382f2&auto=format&fit=crop&w=334&q=80', 'https://images.unsplash.com/photo-1534941946572-23438b26af30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a39cbef202ec33200977e0d25e9f5e8&auto=format&fit=crop&w=750&q=80','http://img.club.pchome.net/kdsarticle/2014/03/27/f6b3a5a63ab45b23ca0e25bb1b8b5a87.jpg', 'https://images.unsplash.com/photo-1534865244288-b47fca3a35e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a37ca6252a729bfa42706b52771382f2&auto=format&fit=crop&w=334&q=80', 'https://images.unsplash.com/photo-1534941946572-23438b26af30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a39cbef202ec33200977e0d25e9f5e8&auto=format&fit=crop&w=750&q=80','http://img.club.pchome.net/kdsarticle/2014/03/27/f6b3a5a63ab45b23ca0e25bb1b8b5a87.jpg', 'https://images.unsplash.com/photo-1534865244288-b47fca3a35e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a37ca6252a729bfa42706b52771382f2&auto=format&fit=crop&w=334&q=80', 'https://images.unsplash.com/photo-1534941946572-23438b26af30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a39cbef202ec33200977e0d25e9f5e8&auto=format&fit=crop&w=750&q=80'],
      testImgs: [{
        smallUrl: 'http://img.club.pchome.net/kdsarticle/2014/03/27/f6b3a5a63ab45b23ca0e25bb1b8b5a87.jpg',
        height: 1200,
        width: 1920
      },{
        smallUrl: 'https://images.unsplash.com/photo-1534865244288-b47fca3a35e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a37ca6252a729bfa42706b52771382f2&auto=format&fit=crop&w=334&q=80',
        height: 501,
        width: 334
      },{
        smallUrl: 'https://images.unsplash.com/photo-1534941946572-23438b26af30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a39cbef202ec33200977e0d25e9f5e8&auto=format&fit=crop&w=750&q=80',
        height: 500,
        width: 750
      },{
        smallUrl: 'http://img.club.pchome.net/kdsarticle/2014/03/27/f6b3a5a63ab45b23ca0e25bb1b8b5a87.jpg',
        height: 1200,
        width: 1920
      },{
        smallUrl: 'https://images.unsplash.com/photo-1534865244288-b47fca3a35e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a37ca6252a729bfa42706b52771382f2&auto=format&fit=crop&w=334&q=80',
        height: 501,
        width: 334
      },{
        smallUrl: 'https://images.unsplash.com/photo-1534941946572-23438b26af30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a39cbef202ec33200977e0d25e9f5e8&auto=format&fit=crop&w=750&q=80',
        height: 500,
        width: 750
      },{
        smallUrl: 'http://img.club.pchome.net/kdsarticle/2014/03/27/f6b3a5a63ab45b23ca0e25bb1b8b5a87.jpg',
        height: 1200,
        width: 1920
      },{
        smallUrl: 'https://images.unsplash.com/photo-1534865244288-b47fca3a35e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a37ca6252a729bfa42706b52771382f2&auto=format&fit=crop&w=334&q=80',
        height: 501,
        width: 334
      },{
        smallUrl: 'https://images.unsplash.com/photo-1534941946572-23438b26af30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a39cbef202ec33200977e0d25e9f5e8&auto=format&fit=crop&w=750&q=80',
        height: 500,
        width: 750
      },{
        smallUrl: 'http://img.club.pchome.net/kdsarticle/2014/03/27/f6b3a5a63ab45b23ca0e25bb1b8b5a87.jpg',
        height: 1200,
        width: 1920
      },{
        smallUrl: 'https://images.unsplash.com/photo-1534865244288-b47fca3a35e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a37ca6252a729bfa42706b52771382f2&auto=format&fit=crop&w=334&q=80',
        height: 501,
        width: 334
      },{
        smallUrl: 'https://images.unsplash.com/photo-1534941946572-23438b26af30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a39cbef202ec33200977e0d25e9f5e8&auto=format&fit=crop&w=750&q=80',
        height: 500,
        width: 750
      },]
    }
  },
  created() {
    //获取数据
    
    //
    this.screenWidth = document.body.clientWidth;
    this.listCount = this.getCount(this.screenWidth);
    window.onresize = () => {
      if(!this.timer) {
        this.timer = true
        setTimeout(() => {
          let screenWidth = document.body.clientWidth;
          this.screenWidth = screenWidth;
          this.listCount = this.getCount(screenWidth);
          this.timer = false;
          console.log(this.standardWidth, screenWidth, document.body.scrollWidth)
          console.log(this.$refs.pi1)
        }, 300)
      }
    }
  },
  destroyed() {
    window.onresize = null
  },
  mounted() {

  },
  methods: {
    getCount(screenWidth) {
      if (screenWidth > 1320) { 
        this.standardWidth = (1320 / 3.0) - 24.0;
        return 3;
      }
      if (screenWidth > 768) {
        this.standardWidth = (screenWidth / 2.0) - 24.0;
        return 2;
      }
      this.standardWidth = screenWidth - 24.0;
      return 1;
    }, 
    lookBigPhoto(e, i) {
      if(e.target.className === 'operation') {
        let index = e.target.parentNode.dataset.index;
        if(index >= 0) {
          this.showImg = this.lists[i][index];
        }
      }
    }
  },
  watch: {
    listCount() {
      if(this.listCount === 1) {
        this.lists = [this.testImgs];
        return;
      }
      let lists = [];
      this.testImgs.forEach((item, index) => {
        let f = index % this.listCount;
        if(typeof lists[f] === 'object') {
          lists[f].push(item)
        } else {
          lists[f] = [item]
        }
      })
      console.log(lists);
      this.lists = lists;
    },
    
  }
}
</script>

<style scoped lang="scss">
@media (min-width: 768px){
  .photos-container {
      max-width: 1320px;
  }
}
.photo-lists {
 width: 100%;
 min-height: 100px;
 overflow-y: auto;
 .photos-container {
   // border: 1px red solid;
   margin: auto;
  //  padding: 0 12px;
   .photos {
     float: left;
     padding: 0 12px;
   }
 }
}
</style>
