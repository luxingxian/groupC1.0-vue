
<template>
	<div class="contentBox login">
		<div class="loginBg">
			<div class="hotelTitle">
				<h3>Welcome</h3>
				<p class="hotelName">欢迎来到某某某某某某某酒店</p>
			</div>
			<div class="account">
				<div class="accountMess">
					<p class="label"><img src="/static/login_icon1.png"/>手机号</p>
					<p class="inputBox">
						<input type="number" placeholder="请输入手机号码" class="phoneNum" v-model="credentials.mobile" @input="getCodeValid"/>
						</p>
					<p class="label" ><img src="/static/login_icon2.png"/>图形验证码</p>
					<p class="inputBox" >
						<input type="text" placeholder="请输入图形验证码" class="codePic" v-model="credentials.codePic" @input="getCodeValid"/>
						<img src="http://hotel.harvetech001.cn/roomBooking/imageCode" class="yan"/>
					</p>
					<p class="label"><img src="/static/login_icon2.png"/>验证码</p>
					<p class="inputBox">
						<input type="text" placeholder="请输入验证码" class="codePhone" v-model="credentials.smsAuthCode"/>
						<span class="validButton" v-bind:class="clickAble?'':'agin'" @click="getCode">{{buttonText}}</span>
					</p>
				</div>
				<div class="loninButton">
					<span @click="login">登录</span>
				</div>
			</div>
			<p class="errorPop" v-if="showTip">{{errorTip}}</p>
		</div>	
	</div>
</template>
<script type="text/javascript">
// ？？？？？页面遗留问题
//1、取到token后存在公用数据中
//2、merchantId首页跳转时接收，现为死值
import "../lib/oder.js";
import "../css/reset.css";
import "../css/public.css";
import "../css/personalCenter.css";
export default {
  name: "login",
  data() {
    return {
      clickAble: false,
      credentials: {
        merchantId: "46bdb45b-5744-4268-ba48-bd57eff43c10",
        mobile: "",
        smsAuthCode: "",
        source: "wx"
      },
      errorTip: "",
      showTip: false,
      phoneReg: /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/,
      countNum: "60",
      buttonText: "获取验证码",
      token: ""
    };
  },
  methods: {
    //获取手机验证码
    getCode: function() {
      var _this = this;
      if (!_this.clickAble) {
        return false;
      } else {
        this.axios
          .get(
            "http://hotel.harvetech001.cn/roomBooking/smsAuthCode/login?mobile=" +
              _this.credentials.mobile +
              "&imageCode=" +
              _this.credentials.codePic
          )
          .then(function(res) {
            console.log(res);
            if (res.data.result) {
              _this.clickAble = false;
              var countdown = setInterval(function() {
                if (_this.countNum == 0) {
                  _this.countNum = 60;
                  _this.clickAble = true;
                  _this.buttonText = "重新获取";
                  clearInterval(countdown);
                } else {
                  _this.countNum--;
                  _this.clickAble = false;
                  _this.buttonText = _this.countNum + "s后重发";
                }
              }, 1000);
            } else {
              _this.errorTip = res.data.msg;
              _this.showTip = true;
              setTimeout(function() {
                _this.showTip = false;
              }, 2000);
              return false;
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    },
    getCodeValid: function() {
      if (
        this.credentials.mobile != "" &&
        this.credentials.mobile != undefined &&
        this.phoneReg.test(this.credentials.mobile) &&
        this.credentials.codePic != "" &&
        this.credentials.codePic != undefined
      ) {
        this.clickAble = true;
      }
    },
    //登录按钮点击验证及登录
    login: function() {
      var _this = this;
      if (
        _this.credentials.mobile == "" ||
        _this.credentials.mobile == undefined
      ) {
        _this.errorTip = "手机号码不能为空";
        _this.tipShow();
      } else if (!_this.phoneReg.test(_this.credentials.mobile)) {
        _this.errorTip = "手机号码格式错误";
        _this.tipShow();
      } else {
        if (
          _this.credentials.codePic == "" ||
          _this.credentials.codePic == undefined
        ) {
          _this.errorTip = "图形验证码不能为空";
          _this.tipShow();
        } else {
          if (
            _this.credentials.smsAuthCode == "" ||
            _this.credentials.smsAuthCode == undefined
          ) {
            _this.errorTip = "手机验证码不能为空";
            _this.tipShow();
          } else {
            _this.axios
              .post(
                "http://hotel.harvetech001.cn/roomBooking/login/mobile",
                JSON.stringify(_this.credentials),
                {
                  headers: { "Content-Type": "application/json;charset=UTF-8" }
                }
              )
              .then(function(res) {
                console.log(res);
                if (res.data.result) {
                  _this.token = res.data.xtoken;
                  _this.$router.push({
                    path: "/"
                  });
                } else {
                  _this.errorTip = res.data.msg;
                  _this.tipShow();
                }
              })
              .catch(function(err) {
                console.log(err);
              });
          }
        }
      }
    },
    tipShow: function() {
      var _this = this;
      _this.showTip = true;
      setTimeout(function() {
        _this.showTip = false;
      }, 2000);
    }
  },
  mounted() {}
};
</script>
