
	<template>
		<div class="contentBox">
			<div class="bgConetnt">
				<div class="content">
					<div class="userInfo">
						<div class="userMess">
							<a href="javascript:;" class="userPic">
								<img src="/static/p_userPic.png" alt="" />
								<p class="userName">JSON</p>
							</a>
						</div>
						<div class="userPersonal">
							<a href="javascript:;">
								<p><img src="/static/p_yuyue.png"/></p>
								<p>我的预约</p>
							</a>
							<a href="javascript:;" @click="goTo('myCollect')">
								<img src="/static/p_line.png" class="leftLine"/>
								<p><img src="/static/p_shoucang.png"/></p>
								<p>我的收藏</p>
								<img src="/static/p_line.png" class="rightLine"/>
							</a>
							<a href="javascript:;" @click="jifen">
								<p><img src="/static/p_jifen.png"/></p>
								<p>积分</p>
							</a>
						</div>
					</div>
					<div class="userList">
						<a href="javascript:;" @click="goTo('comment')">
							<p><img src="/static/p_list1.png" class="listicon"/>我的评价<img src="/static/p_gt.png" class="fr goto"/></p>
						</a>
						<a href="javascript:;" @click="goTo('realName')">
							<p><img src="/static/p_list2.png" class="listicon"/>实名认证<img src="/static/p_gt.png" class="fr goto"/></p>
						</a>
						<a href="javascript:;" @click="goTo('perTraveller')">
							<p><img src="/static/p_list3.png" class="listicon"/>常住旅客<img src="/static/p_gt.png" class="fr goto"/></p>
						</a>
						<a href="javascript:;" class="borderNone">
							<p><img src="/static/p_list4.png" class="listicon"/>关于我们<img src="/static/p_gt.png" class="fr goto"/></p>
						</a>
					</div>
				</div>
			</div>
			<div class="bottomTab">
				<a href="/" class="IconHome">
					<p><img src="/static/bottomIcon1.png"/></p>
					<p>预定</p>
				</a>
				<a href="jiavascript:;" class="IconMy">
					<p><img src="/static/bottomIcon2.png"/></p>
					<p>我的</p>
				</a>
			</div>
			<p class="errorPop" v-if="showTip">敬请期待~</p>
		</div>
	</template>
<script>
import "../lib/oder.js";
import "../css/reset.css";
import "../css/personalCenter.css";
export default {
  name: "personalCenter",
  data() {
    return {
      showTip: false
    };
  },
  methods: {
    goTo: function(pageName) {
      this.$router.push({
        path: "/" + pageName
      });
    },
    jifen: function() {
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
