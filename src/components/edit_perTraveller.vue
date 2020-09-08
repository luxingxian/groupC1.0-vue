<style>
.errorPop{position: fixed;top: 50%;left: 50%;opacity: 0.9;background: #222328;border-radius: 10px;min-width: 7.875rem; margin-left:-3.9375rem;height: 1.5rem;line-height: 1.5rem;margin-top: -0.75rem; text-align: center;font-size: 0.6em;color: #FFFFFF;z-index: 2;display:none; }
</style>

	<template>
		<div>
			<div class="all">
				<div class="title">
					<p class="titleName"><b>编辑常住旅客</b></p>
					<router-link :to="{ path: '/perTraveller' }"><img src="/static/titleBack.png"></router-link>
				</div>
				<div class="editInfor">
					<div class="editInforAll">
						<div class="editinforList">
							<p><i>*</i>姓名</p>
							<input type="text" class="inputname" v-model="query.name"/>
						</div>
						<div class="editinforList">
							<p><i>*</i>手机号</p>
							<input type="number" class="inputTel" v-model="query.telephone"/>
						</div>
						<div class="editinforList">
							<p>证件类型 </p>
							<em class="idvalue">
                	<span v-if="query.cardType == 0">户口簿</span>
						      <span v-if="query.cardType == 1">居民身份证</span>
						      <span v-if="query.cardType == 2">护照</span>
						      <span v-if="query.cardType == 3">港澳居民来往内地通行证</span>
						      <span v-if="query.cardType == 4">台湾居民来往大陆通行证</span>
						      <span v-if="query.cardType == 5">中华人民共和国旅行证</span>
						      <span v-if="query.cardType == 6">军官证</span>
						      <span v-if="query.cardType == 7">警官证</span>
						      <span v-if="query.cardType == 8">士兵证</span>
              </em>
						</div>
						<div class="editinforList lastList">
							<p>证件号码</p>
							<input type="text" maxlength="18" v-model="query.cardCode"/>
						</div>
					</div>
					<a href="javascript:;" class="btnhref" @click="btnhref"><div class="inforSure fl">确定</div></a><div class="infordelete fr">删除</div>
				</div>
			</div>
			<!--验证信息-->
			<div class="errorPop">
				<!--请填写常住旅客手机号-->
			</div>
			<!--证件类型-->
			<div class="IdType" >

			</div>
			<div class="IdSlider">
				<p>证件类型<span class="fr">&times;</span></p>
				<ul>
					<li :class="{'active':item.optionShow}"  v-for="(item,index) in listDast" @click="listSure(item)"><i>{{item.name}}</i></li>
				</ul>
			</div>
			<!--删除旅客-->
			<div class="delPerson">
				<p>确定删除该旅客吗？</p>
				<div class="delPersonbtn">
					<em class="delcancel fl">取消</em>
					<a href="javascript:;" class="delhref"><em class="delsure fr" @click="delsure">删除</em></a>
				</div>
			</div>
		</div>
	</template>
		<script>
import "../lib/oder.js";
import $ from "jquery";
import "../css/reset.css";
import "../css/public.css";
import "../css/w_style.css";
export default {
  name: "edit_perTraveller",
  data() {
    return {
      query: {
        id: "",
        telephone: "",
        name: "",
        cardCode: "",
        cardType: ""
      },
      listDast: [
        { name: "户口簿", value: "0" ,optionShow:false},
        { name: "居民身份证", value: "1" ,optionShow:false},
        { name: "护照", value: "2" ,optionShow:false},
        { name: "港澳居民来往内地通行证", value: "3" ,optionShow:false},
        { name: "台湾居民来往大陆通行证", value: "4",optionShow:false },
        { name: "中华人民共和国旅行证", value: "5" ,optionShow:false},
        { name: "军官证", value: "6" ,optionShow:false},
        { name: "警官证", value: "7" ,optionShow:false},
        { name: "士兵证", value: "8" ,optionShow:false}
      ]
    };
  },
  watch: {
    query: {
      handler(newValue, oldValue) {},
      $route: "editlist",
      $route: "deletelist",
      deep: true
    }
  },
  methods: {
    // 传值接口
    editlist: function() {
      var _this = this;
      _this.axios
        .post(
          "http://hotel.harvetech001.cn/roomBooking/frequentContact/modify?frequentContactId=" +
            this.query.id,
          {
            telephone: this.query.telephone,
            name: this.query.name,
            cardCode: this.query.cardCode,
            cardType: this.query.cardType
          },
          {
            headers: {
              "content-type": "application/json;charset=UTF-8",
              "X-Token": "6472e557-a182-49e3-be76-54bddb84be7f"
            }
          }
        )
        .then(function(res) {
          _this.list = res.data;
        });
    },
    // 删除列表接口
    deletelist: function() {
      var _this = this;
      _this.axios
        .post(
          "http://hotel.harvetech001.cn/roomBooking/frequentContact/delete?frequentContactId=" +
            this.query.id,
          null,
          {
            headers: {
              "content-type": "application/json;charset=UTF-8",
              "X-Token": "6472e557-a182-49e3-be76-54bddb84be7f"
            }
          }
        )
        .then(function(res) {});
    },
    // 确定按钮
    btnhref: function() {
      var _this = this;
      this.editlist();
      var name = _this.query.name;
      var tel = _this.query.telephone;
      //手机号正则
      var zephone = /^1[3|4|5|7|8][0-9]{9}$/;
      if (name == "" && tel == "") {
        $(".errorPop")
          .html("请填写常住旅客姓名")
          .fadeIn(400)
          .delay(1000)
          .fadeOut(400);
      } else {
        if (name == "") {
          $(".errorPop")
            .html("请填写常住旅客姓名")
            .fadeIn(400)
            .delay(1000)
            .fadeOut(400);
        }
        if (tel == "") {
          $(".errorPop")
            .html("请填写常住旅客手机号")
            .fadeIn(400)
            .delay(1000)
            .fadeOut(400);
        }
        if (zephone.test(tel) == false && tel != "") {
          $(".errorPop")
            .html("手机号格式不正确")
            .fadeIn(400)
            .delay(1000)
            .fadeOut(400);
        }
      }
      if (name != "" && tel != "" && zephone.test(tel) == true) {
        setTimeout(function() {
          _this.$router.push("/perTraveller");
        }, 500);
      }
    },
    // 删除按钮
    delsure: function() {
      var _this = this;
      _this.deletelist();
      setTimeout(function() {
        _this.$router.push("/perTraveller");
      }, 500);
    },
    // 點擊選擇
    listSure: function(item) {
      var _this = this;
      _this.query.cardType = item.value;
      console.log(_this.query.cardType, "_this.query.cardType");
    },
    // 循环
    eachlist: function() {
      var c = $(".idvalue").find("span").text();
      for (var i = 0; i < this.listDast.length; i++) {
          var bbb = this.listDast[i].name;
          if (this.listDast[i].name == c) {
            this.listDast[i].optionShow = true;
              console.log(this.listDast[i].name,'this.listDast[i].name',c,'c')
        }
      }
    }
  },
  mounted() {
    this.query.id = this.$route.query.id ? this.$route.query.id : "";
    this.query.telephone = this.$route.query.telephone
      ? this.$route.query.telephone
      : "";
    this.query.name = this.$route.query.name ? this.$route.query.name : "";
    this.query.cardCode = this.$route.query.cardCode
      ? this.$route.query.cardCode
      : "";
    this.query.cardType = this.$route.query.cardType
      ? this.$route.query.cardType
      : "";
    jquerymath();
    this.eachlist();
  }
};
function jquerymath() {
  //默认选中第一项
  $(".inputname").focus();
  //证件类型下拉
  var idheight = $(".IdSlider").height();
  $(".IdSlider").css("bottom", -idheight);
  $(".editinforList .idvalue").click(function() {
    $(".IdType").fadeIn();
    $(".IdSlider").show();
    $(".IdSlider").animate({
      bottom: "0"
    });
  });
  //证件类型关闭
  $(".IdSlider p span").click(function() {
    $(".IdType").fadeOut();
    $(".IdSlider").hide();
    $(".IdSlider").animate({
      bottom: -idheight
    });
  });
  //证件类型选择
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
  //删除
  $(".infordelete").click(function() {
    $(".delPerson,.IdType").fadeIn();
  });
  $(".delcancel").click(function() {
    $(".delPerson,.IdType").fadeOut();
  });
  $(".delsure").click(function() {
    $(".delPerson,.IdType").fadeOut();
  });
}
</script>