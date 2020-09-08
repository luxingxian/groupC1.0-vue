<style>
.sliderContent{position: relative;height: 10.65rem;}
.sliderContent li{position: absolute;top: 0;left: 0;width: 100%;transition: all 2s;}
.sliderContent img{width: 100%;height: auto;float: left;}
.point{text-align: center;width: 100%;position: absolute;bottom: 0.6rem;left: 0;}
.point span{display: inline-block;height: 0.35rem;width: 0.35rem;border-radius: 100%;background: #fff;opacity: 0.4;margin: 0 0.15rem;}
.point span.active{height: 0.4rem;width: 0.4rem;opacity: 1;}
</style>
<template>
  <div class="sliderContent">
      <ul>
          <li v-for="(pic,index) in sliderPic" v-show="index==curIndex">
              <img :src="pic" alt="">
            </li>
      </ul>
      <p class="point"><span v-for="(pic,index) in sliderPic" :class="{active:index==curIndex}"  v-show="sliderPic.length>1"></span></p>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "slider",
  data() {
    return {
     curIndex:0,
    };
  },
  props:['sliderPic'],
 
  methods: {
    autoSlider:function(){
        var _this=this;
        var auto=setInterval(function(){
            if(_this.sliderPic.length==1){
                clearInterval(auto);
            }
            _this.curIndex++;
            if(_this.curIndex==_this.sliderPic.length){
                _this.curIndex=0;
            }
        },3000)
    }
    },
    
  mounted() {
      this.autoSlider();
  }
};
</script>
