<template>
	<div class="subOrder">
		<div class="submit_list">
			<div class="title">
				<p class="titleName"><b>提交订单</b></p>
				<a href="javascript:;"><img src="/static//titleBack.png"></a>
			</div>
			<!--nav    ed-->
			<div class="l_container l_card">
				<div class="l_content">
					<p class="hotel_name">{{roomInfo.room.merchantName}}</p>
					<div class="hotel_mess">
						<router-link to="/rili"><p>入住 <span>{{submitOrder.checkInTime}}</span>离店 <span>{{submitOrder.checkOutTime}}</span><i class="jian wan"><em>{{submitOrder.num}}</em>晚</i><em class="f_img"></em></p></router-link>
						<p><em class="f_display">{{roomInfo.room.name}}</em>&nbsp;&nbsp;<span>{{submitOrder.bedType}}</span><span>{{roomInfo.room.breakfast==0||roomInfo.room.breakfast==undefined?'不含早':roomInfo.room.breakfast==1?'含单早':roomInfo.room.breakfast==2?'含双早':'含'+roomInfo.room.breakfast+'份早餐'}}</span></p>	
						<p></p>				
					</div>
				</div>
			</div>

			<div class="l_container room_mess">
				<div class="l_content">
					<div class="room_table">
						<div class="ta1 clearfix">
							<p class="left">客房数量</p>
							<p class="right p12" @click="checkRoomNum" ><span>{{submitOrder.num}}</span> 间<img src="/static/f_don.png" alt="" /></p>
						</div>
						<div class="room_num" v-if="showCheckNum">
							<ul class="clearfix">
								<li v-for="(num,index) in 10" @click="checkNum(index)" :class="{active:curIndex==index}">{{num}}</li>
							</ul>
						</div>
						<div class="room_person clearfix">
							<div class="room_person_left" :style="{lineHeight:2*submitOrder.num+'rem'}">
								入住人
							</div>
							<div class="room_person_right clearfix">
								<p v-for="(person,index) in submitOrder.num"><input type="text" placeholder="请填写入住人姓名" v-model="name" @input="nameInput()"/></p>
							</div>
						</div>

						<div class="room_phone clearfix room_phone_border">
							<p class="left">手机号</p>
							<p class="right"><input type="number" placeholder="请填写手机号" class="phone" v-model="submitOrder.telephone" /></p>
						</div>

						<div class="room_phone clearfix">
							<p class="left">入住偏好</p>
							<p class="right"><input type="text" placeholder="特殊要求" maxlength="20" v-model="submitOrder.habit"/></p>
						</div>
					</div>

					<p class="room_time">到店时间&nbsp;<span class="date">{{submitOrder.checkInTime}}</span>&nbsp;&nbsp;<span class="time">{{submitOrder.retentionTime}}</span>之前</p>
					<p class="sale">
						提前3天预订享9.8折，不与其他优惠共享；
					</p>
					<p class="sale">
						预付立减10.00元，与连住优惠、提前预订优惠共享；
					</p>
					<p class="zhifu" @click="checkPayType(2)" v-if="payType.typeTwo">预付（不可取消）<input type="radio" id="radio1" name="radio1" checked="checked" /><label for="radio1" :class="{f_active:submitOrder.payMent==2}"></label></p>
					<p class="zhifu zhifu_d" @click="checkPayType(1)" v-if="payType.typeOne">到店支付 （可免费取消）<input type="radio" id="radio2" name="radio1" /><label for="radio2" :class="{f_active:submitOrder.payMent==1}"></label></p>
					<p class="zhifu f_zhifu" @click="checkPayType(3)" v-if="payType.typeThree">担保（不可取消）<input type="radio" id="radio3" name="radio1" checked="checked" /><label for="radio3" :class="{f_active:submitOrder.payMent==3}"></label></p>
					<p class="dan_dec">担保说明：酒店会根据您的担保方式，需暂扣 ¥430.00用于担保。该订单确认后不可取消修改，若未入住担保费用将不予退还。订单完成后，担保金按原路自动退回。</p>
					<p class="zhifu zhifu_e">优惠券<a class="ajiao" href="Coupon_list.html"></a><a class="ajuan" href="javascript:;">不使用优惠券</a></pp>
					<p class="room_time">如需要索取发票，请到前台领取</p>
					<p class="room_kefu">客服电话: {{roomInfo.telNumber}}</p>
				</div>
			</div>
		</div>

		<div class="room_foot">
			<div class="f_foot_list">
					<p class="f_room_btn" v-if="showAssure">担保金额:&nbsp;￥{{roomInfo.assureTotalAmount}}</p>
					<div class="left clearfix" v-if="!showAssure">
						<p class="total_press fl">实付金额:&nbsp;￥{{roomInfo.afterPrefTotalAmount}}</p>
						<p class="youhui fr">已优惠:&nbsp;￥{{roomInfo.totalPrefAmount}}</p>
					</div>
			</div>
			<div class="sub_btn" @click="submitClick"><a href="javascript:;" class="fr">提交订单</a></div>
		</div>
		<!--页面   ed-->		
		<!--验证提示-->
		<p class="errorPop" v-if="showTip">{{errorTip}}</p>
		<!--订单提交成功弹窗-->
		<div class="tan_drop tan1">
			<div class="tan_box">
				<img src="/static/icon_success.png" alt="" />
				<p class="text">订单提交成功</p>
				<p class="btn1 room_btn"><a href="javascript:;">查看订单</a></p>
				<p class="btn2 room_btn"><a href="/">继续看看</a></p>
			</div>
		</div>
		
		<!--订单提交失败弹窗-->
		<div class="tan_drop tan2">
			<div class="tan_box">
				<img src="/static/icon_error.png" alt="" />
				<p class="text">订单提交失败，请重新提交</p>
				<p class="btn3 room_btn"><a href="javascript:;">保存订单</a></p>
			</div>
		</div>
		
		<!--房型不可预订弹窗-->
		<div class="tan_drop tan3">
			<div class="tan_box">
				<p class="text">该房型暂不可预订</p>
				<p class="btn3 room_btn"><a href="/">返回首页</a></p>
			</div>
		</div>
		
		<!--返回弹窗-->
		<div class="tan_drop tan4">
			<div class="tan_box">
				<p class="text">订单尚未提交</p>
				<p class="text">确定要离开当前页面?</p>
				
				<p class="btn3 room_btn"><a href="javascript:;" class="cancle">取消</a><a href="javascript:;" class="ok">确定</a></p>
			</div>
		</div>

		<!--无网络弹窗-->
		<div class="no_network ">
			<div class="tan_box">
				<p class="text">网络不给力，请稍后再试！</p>
				<p class="btn3 room_btn">
					<a href="javascript:;">重新加载</a>
				</p>
			</div>
		</div>
		<!-- 优惠后的金额为0时弹框 -->
		<div class="tan_drop no_pref">
			<div class="tan_box">
				<p class="text">抱歉，您当前选择的房型无法预订，请尽快联系酒店</p>
				<p class="btn1 room_btn">
					<a href="tel:000000000">联系酒店</a>
				</p>
				<p class="btn2 room_btn">
					<a href="/" class="z_cancel">返回首页</a>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
import "../lib/oder.js";
import "../css/reset.css";
import "../css/public.css";
import "../css/personalCenter.css";
export default {
  name: "submitOrder",
  data() {
    return {
      Token: "d25273d1-491c-49e6-8837-6ee5349017e2",
      curIndex: 0,
      showCheckNum: false,
      showAssure: false,
      roomInfo: {},
      errorTip: "",
      showTip: false,
      name: "",
      payType: {
        typeOne: false,
        typeTwo: false,
        typeThree: false
      },
      submitOrder: {
        bedType: "",
        checkInTime: "2018-01-01",
        checkOutTime: "2018-01-05",
        contract: "",
        habit: "",
        num: "1",
        openid: "",
        payMent: "",
        personName: "",
        priTotalAmount: "",
        priceholpreId: "",
        retentionTime: "",
        roomId: "9c88d6b8-013c-4a21-883e-0d82dd505a75",
        submitTime: "",
        telephone: "",
        totalPrefAmount: "",
        verifyToken: ""
      },
      codeUrl: ""
    };
  },
  methods: {
	//获取微信授权接口
    getCodeUrl: function() {
      var _this = this;
      this.axios
        .get(
          "http://hotel.harvetech001.cn/roomBooking/wxOpen/getUserBaseCodeUrl",
          {
            headers: {
              Accept: "application/json",
              "X-Token": _this.Token
            }
          }
        )
        .then(function(res) {
          if (res.data.result) {
            _this.codeUrl = res.data.data;
            _this.getCode();
          } else {
            console.log(res.data.msg);
          }
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
	},
	//???????????获取openId
    getCode: function() {
      var _this = this;
      this.axios
        .get(_this.codeUrl)
        .then(function(res) {
			    _this.submitOrder.openid=res.data;
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getRoomInfo: function() {
      var _this = this;
      this.axios
        .get(
          "http://hotel.harvetech001.cn/roomBooking/roomBook/getNowPrefAllInfoWx?roomId=" +
            _this.submitOrder.roomId +
            "&checkInTime=" +
            _this.submitOrder.checkInTime +
            "&checkOutTime=" +
            _this.submitOrder.checkOutTime +
            "&roomNum=" +
            _this.submitOrder.num,
          {
            headers: {
              Accept: "application/json",
              "X-Token": _this.Token
            }
          }
        )
        .then(function(res) {
          if (res.data.result) {
            _this.roomInfo = res.data.data.roomBookInPlat;
            _this.getSubOrderMess();
            _this.showPayType();
          } else {
            console.log(res.data.msg);
          }
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getSubOrderMess: function() {
      this.submitOrder.bedType = this.roomInfo.roomOrderDTO.bedType;
      this.submitOrder.payMent = this.roomInfo.reqPayMent;
      this.submitOrder.priTotalAmount = this.roomInfo.priTotalAmount;
      this.submitOrder.retentionTime = this.roomInfo.roomOrderDTO.retentionTime;
      this.submitOrder.totalPrefAmount = this.roomInfo.totalPrefAmount;
      this.submitOrder.verifyToken = this.roomInfo.verifyToken;
    },
    checkRoomNum: function() {
      this.showCheckNum = !this.showCheckNum;
    },
    checkNum: function(index) {
      this.roomNum = index + 1;
      this.submitOrder.num = index + 1;
      this.curIndex = index;
      this.showCheckNum = false;
    },
    showPayType: function() {
      if (this.roomInfo.room.payType == 1) {
        this.payType.typeOne = true;
      } else if (this.roomInfo.room.payType == 2) {
        this.payType.typeTwo = true;
      } else if (this.roomInfo.room.payType == 3) {
        this.payType.typeOne = true;
        this.payType.typeTwo = true;
      } else if (this.roomInfo.room.payType == 4) {
        this.payType.typeThree = true;
      } else if (this.roomInfo.room.payType == 5) {
        this.payType.typeOne = true;
        this.payType.typeThree = true;
      } else if (this.roomInfo.room.payType == 6) {
        this.payType.typeTwo = true;
        this.payType.typeThree = true;
      } else if (this.roomInfo.room.payType == 7) {
        this.payType.typeOne = true;
        this.payType.typeTwo = true;
        this.payType.typeThree = true;
      }
    },
    checkPayType: function(type) {
      this.submitOrder.payMent = type;
      if (type == 3) {
        this.showAssure = true;
      } else {
        this.showAssure = false;
      }
    },
    //?????????????????????获取入住人姓名和联系人
    nameInput: function() {
      console.log(this.personName);
    },
    //?????????????????????（submitOrder传参中缺少入住人姓名personName、联系人contract和openid）
    submitClick: function() {
      var _this = this;
      var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/;
      if (this.name == "") {
        this.errorTip = "入住人姓名不能为空";
        this.tipShow();
      } else if (this.submitOrder.telephone == "") {
        this.errorTip = "手机号码不能为空";
        this.tipShow(); 
      } else if (!reg.test(this.submitOrder.telephone)) {
        this.errorTip = "手机号码格式错误";
        this.tipShow();
      } else {
        this.axios
          .post(
            "http://hotel.harvetech001.cn/roomBooking/roomBook/finalSubmitOrderWx",
            JSON.stringify(_this.submitOrder),
            {
              headers: {
                Accept: "application/json",
                "X-Token": _this.Token
              }
            }
          )
          .then(function(res) {
            if (res.data.result) {
            } else {
              console.log(res.data.msg);
            }
            console.log(res);
          })
          .catch(function(err) {
            console.log(err);
          });
      }
      console.log(this.submitOrder);
    },
    tipShow: function() {
      var _this = this;
      _this.showTip = true;
      setTimeout(function() {
        _this.showTip = false;
      }, 2000);
    }
  },
  mounted() {
    this.getCodeUrl();
    this.getRoomInfo();
  }
};
</script>

