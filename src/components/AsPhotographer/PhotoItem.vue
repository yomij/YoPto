<template>
  <div class="photo-item" :class="{loading: !img}" :style="{height: height}" ref="photoItem">
    <img class="photo" v-show="img" :src="img" @mouseenter="isShow = true" />
    <div class="operation" v-show="isShow" @mouseleave="isShow = false">
      <a class="like button-common">
        <svg class="heart-icon" version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false"><path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path></svg>
      </a>
      <div class="bottom-tip">
        <p class="photo-inf">
          <i class="iconfont icon-xiangjisheying fs-18"></i> yomi
          <i class="iconfont icon-web-icon- fs-20"></i> 18-7-30
        </p>
        <a class="download button-common">
          <svg class="download-icon" version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false"><path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path></svg>
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoItem',
  props:{
    imgOb: {
        default: () => {},
        type: Object
      },
      standardWidth: {
        default: 0,
        type: Number
      }
  },
  created() {
      this.height = this.standardWidth * this.imgOb.height / this.imgOb.width + 'px';
      this.imgLoading(this.imgOb)
  },
  mounted() {
    this.offsetTop = this.$refs.photoItem.offsetTop
  },
  data () {
    return {
        img: undefined,
        height: 0,
        isShow: false,
        offsetTop: 0
    }
  },
  methods: {
    imgLoading(imgOb) {
        let img = new Image(),
            times = 0;
        img.src = imgOb.smallUrl
        if(img.complete){
            this.img = imgOb.smallUrl;
            this.height = 'auto';
        }else{
            img.onload = () => {
                this.img = imgOb.smallUrl;
                this.height = 'auto';
            }
        }
    }
  },
  watch: {
      imgOb: {
        handler: function(val) {
          this.imgLoading(val)
        },
        deep: true
      }
  }
}
</script>

<style scoped lang="scss">
.photo-item {
    width: 100%;
    margin-bottom: 24px;
    height: auto;
    position: relative;
    &.loading {
        width: 100%;
        background: #ddd;
    }
    .hover {

    } 
    .photo {
        cursor: zoom-in;
        width: 100%;
        margin-bottom: 24px;
    }
    .operation {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        cursor: zoom-in;
        padding: 20px;
        background-image: linear-gradient(180deg,rgba(0,0,0,.2) 0,transparent 40%,transparent 60%,rgba(0,0,0,.3));
        .like {
            // width: 80px;
            float: right;
            background-color: hsla(0,0%,100%,.85);
            border: 1px solid transparent;
            box-shadow: 0 1px 1px rgba(0,0,0,.04);
            &:hover {
              background-color: hsla(0, 0%, 100%, 1);
            }
            .heart-icon {
              position: relative;
              top: -1px;
              width: 15px;
              fill: #f15151
            }
        }
        .bottom-tip {
          position: absolute;
          bottom: 20px;
          width: calc(100% - 40px);
          line-height: 32px;
           box-sizing: border-box;
          .photo-inf {
            color: hsla(0,0%,100%,.85);
            cursor: pointer;
            display: inline-block;;
            &:hover {
              color: hsla(0, 0%, 100%, 1);
            }
          }
          .download {
            float: right;
            color: hsla(0,0%,100%,.85);
            background-color: hsla(0,0%,100%,.85);
            border: 1px solid transparent;
            box-shadow: 0 1px 1px rgba(0,0,0,.04);
            &:hover {
              background-color: hsla(0, 0%, 100%, 1);
            }
            .download-icon {
              position: relative;
              top: -1px;
              width: 15px;
              color: #777;
              fill: currentColor;
            }
          }
        }
    } 
}
</style>
