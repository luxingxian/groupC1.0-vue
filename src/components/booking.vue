<template>
	<div class="contentBox booking">
		<div class="topPic clearfix">
      <slider :sliderPic="roomMess.picList"></slider>
			<a href="javascript:;"><img src="/static/Group 12.png" class="iconBack" @click="goToListhouse()" /></a>
			<a href="javascript:;"><img src="/static/Group 13.png" class="iconShare"/></a>
		</div>
		<div class="messContent">
			<p class="roomPrice">￥{{roomMess.roomStatus==3?roomMess.basePrice:roomMess.price}}</p>
			<p class="roomName">{{roomMess.name}}</p>
			<p class="sale" v-if="roomPreferentials.length>0"><span>优惠策略</span>{{roomPreferentials.showPreferential}}</p>
			<p class="paymentIcons">
				<img src="/static/iconxian.png" v-if="payType.typeOne"/>
				<img src="/static/iconyu.png" v-if="payType.typeTwo"/>
				<img src="/static/icondan.png" v-if="payType.typeThree"/>
			</p>
		</div>
		<div class="infoContent">
			<p>房间面积：{{roomMess.roomArea}}平米，可入住{{roomMess.checkInNum}}人，{{roomMess.breakfast?'不含早餐':roomMess.breakfast==1?'含单早':roomMess.breakfast==2?'含双早':'含'+roomMess.breakfast+'份早餐'}}</p>
			<p>房间设施：{{roomMess.bedType}}</p>
			<p>内否加床：{{roomMess.isExtraBed}}</p>
		</div>
		<div class="facilityContent" v-if="showFacility">
			<p class="facilityTitle" @click="showList" :class="{iconUp:isShowAll}"><span>设施服务</span></p>
			<div class="facilityList" :class="{showAll:isShowAll}">
				<ul class="clear">
					<li class="fl clear" v-for="icon in roomIcons">
						<p class="fl">
							<img v-bind:src="icon.iconUrl" />
						</p>
						<p class="list_text2 fl">{{icon.iconName}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="bottomBar">
			<p class="clearfix">
				<a href="tel:18518099332" class="phone" v-if="showPhone">
					<img src="/static/iconPhone.png" alt="">
					<i>电话</i>
				</a>
				<span class="bookingBtn" v-bind:class="{'phoneBook':roomMess.roomStatus==3,'roomFull':roomMess.roomStatus==1}" @click="goToSubmit()">{{bookText}}</span>
			</p>
		</div>
	</div>
</template>

<script type="text/javascript">
import "../lib/oder.js";
import "../css/reset.css";
import "../css/public.css";
import "../css/personalCenter.css";
import slider from './public/slider.vue'
export default {
  name: "booking",
  data() {
    return {
      Token: "d25273d1-491c-49e6-8837-6ee5349017e2",
      roomId: "9c88d6b8-013c-4a21-883e-0d82dd505a75",
	  startDate: "2018-01-30",
	  endDate:"2018-03-25",
      roomMess: {},
      payType: {
        type: false,
        typeOne: false,
        typeTwo: false,
        typeThree: false
      },
      showFacility: false,
      //showFacilityList: false,
      roomIcons: [],
      showPhone: true,
	  bookText: "立即预定",
    roomPreferentials:[],
    isShowAll:false,
    };
  },
  
  methods: {
    getRoomDetail: function() {
      var _this = this;
      this.axios
        .get(
          "http://hotel.harvetech001.cn/roomBooking/hotelRoomMessage/getRoomDetail?endDate="+_this.endDate+'&roomId=' +
            _this.roomId +
            "&startDate=" +
            _this.startDate,
          {
            headers: {
              "Accept": "application/json;",
              "X-Token": _this.Token
            }
          }
        )
        .then(function(res) {
          if (res.data.result) {
            _this.roomMess = res.data.data.room;
		      	_this.roomIcons = res.data.data.icons;
		      	_this.roomPreferentials=res.data.data.roomPreferentials;
            if (_this.roomIcons.length > 0 && _this.roomIcons != undefined) {
              _this.showFacility = true;
            } else {
              _this.showFacility = false;
            }
            _this.showPayType();
          }
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    showPayType: function() {
      if (this.roomMess.payType == 1) {
        this.payType.typeOne = true;
      } else if (this.roomMess.payType == 2) {
        this.payType.typeTwo = true;
      } else if (this.roomMess.payType == 3) {
        this.payType.typeOne = true;
        this.payType.typeTwo = true;
      } else if (this.roomMess.payType == 4) {
        this.payType.typeThree = true;
      } else if (this.roomMess.payType == 5) {
        this.payType.typeOne = true;
        this.payType.typeThree = true;
      } else if (this.roomMess.payType == 6) {
        this.payType.typeTwo = true;
        this.payType.typeThree = true;
      } else if (this.roomMess.payType == 7) {
        this.payType.typeOne = true;
        this.payType.typeTwo = true;
        this.payType.typeThree = true;
      }
      if (this.roomMess.roomStatus == 0) {
        this.showPhone = true;
        this.bookText = "立即预定";
      } else if (this.roomMess.roomStatus == 1) {
        this.showPhone = true;
        this.bookText = "已满房";
      } else if (this.roomMess.roomStatus == 3) {
        this.showPhone = false;
        this.bookText = "电话预约";
      }
	},
	showList:function(){
	 	this.isShowAll=!this.isShowAll;
	},
    //立即预定页面跳转
    goToSubmit: function() {
      if (this.roomMess.roomStatus == 0) {
        this.$router.push({
          path: "/"
        });
      } else {
        return false;
      }
    },
    //顶部返回按钮返回酒店详情页
    goToListhouse: function() {
      this.$router.push({
        path: "/List_houses",
        query: { merchantId: this.roomMess.merchantId }
      });
    }
  },
  components:{
    slider,
  },
  mounted() {
    this.getRoomDetail();
  }
};
</script>

