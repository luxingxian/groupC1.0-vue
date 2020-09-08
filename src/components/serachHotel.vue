	<template>
	<div>
		<div class="all">
			<div class="title">
				<p class="titleName"><b>查找酒店</b></p>
				<a href="perTraveller.html"><img src="/static/titleBack.png"></a>
			</div>
			<div class="serachAll">
				<div class="serachAddress fl"><p>{{query.city}}</p></div>
				<div class="serachInput fr">
					<input type="search" placeholder="搜索地点，酒店"  @keyup.enter="addTodo" v-model="inputValue"/>
				</div>
			</div>
			<div class="serachList">
				<ul>
					<a href="javascript:;"><li>12.11-12.12</li></a>
					<li class="serachSort">{{sprting ? sprting : '默认排序'}}</li>
				</ul>
			</div>
			<div class="productList" v-for="item in list.hotelsDetails">
				<div class="listImg">
					<img v-bind:src="item.cover"/>
					<em class="w_collect"><img src="/static/Group6.png" class="Group_2" v-show="Group_2" @click="showToggle(item)" /></em>
					<em class="w_collect"><img src="/static/Group6active.png" class="Group_2" v-show="Group_3" @click="changeImg(item)" /></em>
					<span class="priceList" >￥{{item.minPrice}}<i>起</i></span>
				</div>
				<div class="listDetail">
					<p class="listName fl">{{item.name}}</p>
					<p class="listBtn fr">立即预定</p>
				</div>
			</div>
		</div>
		<!--收藏-->
	
		<div class="IdType">

		</div>
		<div class="IdSlider">
			<p><span class="fr">&times;</span></p>
			<ul>
				<li :class="{'active':item.optionShow}"  v-for="(item,index,name) in listDast" @click="listSure(item)"><i>{{item.name}}</i></li>
			</ul>
		</div>
		<div class="citySlider">
			<p><span class="fr">&times;</span></p>
			<ul>
				<p>当前定位城市：<i>{{query.city}}</i></p>
        <li v-for="(item,index) in Addresslist" :class="{'active':index==num}" @click="citySure(item,index)"><i>{{item}}</i></li>
			</ul>
		</div>
    <p class="errorPops" v-show="Policy">已取消</p>
		<p class="errorPops" v-show="Fpolicy">收藏成功</p>
	</div>
	</template>
	<script>
import "../lib/jquery.min.js";
import "../lib/oder.js";
import "../css/reset.css";

import "../css/w_style.css";
import "../css/public.css";
export default {
  name: "serachHotel",
  data() {
    return {
      // 酒店
      list: {},
      Addresslist: [],
      sprting: "",
      num: 0,
      Group_2: true,
      Group_3: false,
      Fpolicy: false,
      Policy: false,
      inputValue: "",
      query: {
        groupId: "46bdb45b-5744-4268-ba48-bd57eff43c10",
        city: "北京市",
        checkTime: "2017-11-22",
        outTime: "2017-11-24"
      },
      listDast: [
        { name: "默认排序", value: "0", optionShow: false },
        { name: "评分最高", value: "1", optionShow: false },
        { name: "价格从高到低", value: "2", optionShow: false },
        { name: "价格从低到高", value: "3", optionShow: false },
        { name: "评论最多", value: "4", optionShow: false }
      ]
    };
  },
  methods: {
    // 酒店接口
    hotellist: function() {
      var _this = this;
      _this.axios
        .get(
          "http://hotel.harvetech001.cn/roomBooking/hotelRoomMessage/showGroupHotels?groupId=" +
            this.query.groupId +
            "&city=" +
            this.query.city +
            "&checkTime=" +
            this.query.checkTime +
            "&outTime=" +
            this.query.outTime +
            "&key=" +
            _this.inputValue
        )
        .then(function(res) {
          _this.list = res.data.data;
          if (res.data.data.hotelsDetails.length > 0) {
            if (res.data.msg) {
              $(".errorPop")
                .html("抱歉未能找到您搜索内容")
                .fadeIn(400)
                .delay(1000)
                .fadeOut(400);
            } else {
            }
          }
        });
    },
    //城市地址接口
    hotelAddress: function() {
      var _this = this;
      _this.axios
        .get(
          "http://hotel.harvetech001.cn/roomBooking/showAddress?groupId=" +
            this.query.groupId
        )
        .then(function(res) {
          _this.Addresslist = res.data.data;
        });
    },
    // 城市点击
    citySure: function(item, index) {
      var _this = this;
      _this.num = index;
      _this.query.city = item;
      $(".IdType").fadeOut();
      $(".citySlider").hide();
    },
    // 排序点击
    listSure: function(item) {
      var _this = this;
      _this.sprting = item.name;
      this.hotellist();
    },
    // 排序循环
    eachlist: function() {
      var c = $(".serachSort").text();
      for (var i = 0; i < this.listDast.length; i++) {
        if (this.listDast[i].name == c) {
          this.listDast[i].optionShow = true;
        }
      }
    },
    addTodo: function() {
      var _this = this;

      if (_this.inputValue == "") {
      } else {
        _this.hotellist();
      }
    },
    /*添加收藏*/
    showToggle: function(item) {
      var _this = this;
      _this.Group_2 = false;
      _this.Group_3 = true;
      _this.axios
        .post(
          "http://hotel.harvetech001.cn/roomBooking/hotelRoomCollection/create?merchantId=183d297b-326c-46e7-9c9b-7663094d565e",
          {
            merchantId: "183d297b-326c-46e7-9c9b-7663094d565e"
          },
          {
            headers: {
              "X-Token": "8ca22c74-0198-4c24-8978-1406e7cc84e4"
            }
          }
        )
        .then(function(res) {
          if (res.data.result == false) {
            _this.Fpolicy = true;
            setTimeout(function() {
              _this.Fpolicy = false;
            }, 1000);
          }
        });
    },
    /*取消收藏*/
    changeImg: function(item) {
      var _this = this;
      _this.Group_3 = false;
      _this.Group_2 = true;
      _this.axios
        .post(
          "http://hotel.harvetech001.cn/roomBooking/hotelRoomCollection/cancel?collectionId=183d297b-326c-46e7-9c9b-7663094d565e",
          {
            merchantId: "183d297b-326c-46e7-9c9b-7663094d565e"
          },
          {
            headers: {
              "X-Token": "8ca22c74-0198-4c24-8978-1406e7cc84e4"
            }
          }
        )
        .then(function(res) {
          console.log(res.data);
          if (res.data.result == false) {
            _this.Policy = true;
            setTimeout(function() {
              _this.Policy = false;
            }, 1000);
          }
        });
    }
  },
  mounted() {
    this.hotellist();
    this.eachlist();
    this.hotelAddress();
    jquerymath();
  }
};
function jquerymath() {
  //排序
  //排序下拉
  var idheight = $(".IdSlider").height();
  $(".IdSlider").css("bottom", -idheight);
  $(".serachSort").click(function() {
    $(".IdType").fadeIn();
    $(".IdSlider").show();
    $(".IdSlider").animate({
      bottom: "0"
    });
  });
  //排序关闭
  $(".IdSlider p span").click(function() {
    $(".IdType").fadeOut();
    $(".IdSlider").hide();
    $(".IdSlider").animate({
      bottom: -idheight
    });
  });
  //排序选择
  $(".IdSlider ul li").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".IdType").fadeOut();
    $(".IdSlider").hide();
    $(".IdSlider").animate({
      bottom: -idheight
    });
  });

  //城市
  //城市下拉
  var idheight = $(".citySlider").height();
  $(".citySlider").css("bottom", -idheight);
  $(".serachAddress").click(function() {
    $(".IdType").fadeIn();
    $(".citySlider").show();
    $(".citySlider").animate({
      bottom: "0"
    });
  });
  //城市关闭
  $(".citySlider p span").click(function() {
    $(".IdType").fadeOut();
    $(".citySlider").hide();
    $(".citySlider").animate({
      bottom: -idheight
    });
  });
  //城市选择
  $(".citySlider ul li").click(function() {
    $(".IdType").fadeOut();
    $(".citySlider").hide();
    $(".citySlider").animate({
      bottom: -idheight
    });
  });
}
</script>