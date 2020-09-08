<template>
  <div class="all">
			<div class="title">
				<p class="titleName"><b>常住旅客</b></p>
				<a href="javascript:;"><img src="/static/titleBack.png"></a>
			</div>
			<div class="addPerson">
				<p>
					<span class="fl">新增常住旅客</span>
					<router-link :to="{ path: '/add_perTraveller' }">
						<i class="fr"><img src="/static/addPerson.png"></i>
					</router-link>
				</p>
			</div>
			<!-- <router-link :to="{ path: '/edit_perTraveller' }"> -->

				<div class="addDetails"  v-for="item in list">
					<div @click="seeInterface(item)">
					<p class="p1"><i>姓名</i><span v-model="name">{{item.name}}</span></p>
					<p class="p2"><i>手机号</i><span v-model="telephone">{{item.telephone}}</span><em class="fr"><img src="/static/telHref.png"></em></p>
					<p class="p3"><i>证件类型</i><span>
						<span v-if="item.cardType == 0">户口簿</span>
						<span v-if="item.cardType == 1">居民身份证</span>
						<span v-if="item.cardType == 2">护照</span>
						<span v-if="item.cardType == 3">港澳居民来往内地通行证</span>
						<span v-if="item.cardType == 4">台湾居民来往大陆通行证</span>
						<span v-if="item.cardType == 5">中华人民共和国旅行证</span>
						<span v-if="item.cardType == 6">军官证</span>
						<span v-if="item.cardType == 7">警官证</span>
						<span v-if="item.cardType == 8">士兵证</span>/
						<em>{{item.cardCode}}</em></span></p>
				</div>
				</div>
			<!-- </router-link> -->
		</div>
</template>

<script>
import "../lib/jquery.min.js";
import "../lib/oder.js";
import "../css/reset.css";
import "../css/public.css";
import "../css/w_style.css";
export default {
  name: "perTraveller",
  data() {
    return {
      list: [],
      telephone: "",
      code: "",
      name:"",
      id:"",
      cardCode:'',
      cardType:""
    };
  },
  methods: {
    personlist: function() {
      var _this = this;
      _this.axios
        .get(
          "http://hotel.harvetech001.cn/roomBooking/frequentContact/showFrequentContactList",
          {
            headers: {
              "X-Token": "6472e557-a182-49e3-be76-54bddb84be7f"
            }
          }
        )
        .then(function(res) {
          _this.list = res.data.data;
          console.log(res.data.data)
          if (_this.list) {
            for (var i = 0; i < _this.list.length; i++) {
          		_this.telephone =_this.list[i].telephone.substring(0, 3) +"****" + _this.list[i].telephone.substring(7);
          		// console.log(typeof(_this.list[i].cardCode))
          		if(_this.list[i].cardCode){
          		 		_this.code =_this.list[i].cardCode.substring(0, 3) +"****" + _this.list[i].cardCode.substring(7);
          		    //  console.log(_this.cardCode)
          		 }

            }
          }
        });
    },
    // 跳转编辑页面
    seeInterface: function(item,name,telephone) {
      var self = this;
      self.$router.push({
        path: "/edit_perTraveller",
        query: {id:item.id,name:item.name,telephone:item.telephone,cardCode:item.cardCode,cardType:item.cardType}
      });
    }
  },
  mounted() {
   
    this.personlist();
    // alert("pppp")
  }
};
</script>



