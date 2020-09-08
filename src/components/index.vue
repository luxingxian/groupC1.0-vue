<template>
	<div>
		<div class="banner">
			<div id="slideBox" class="slideBox">
				<div class="bd">
					<ul>
						<li>
							<a class="pic" href="javascript:;"><img src="/static/lunbo1.png" /></a>
						</li>
						<li>
							<a class="pic" href="javascript:;"><img src="/static/lunbo2.png" /></a>
						</li>
						<li>
							<a class="pic" href="javascript:;"><img src="/static/lunbo3.png" /></a>
						</li>
					</ul>
				</div>
				<div class="hd">
					<ul>
					</ul>
				</div>
			</div>
		</div>

		<div class="main">
			<div class="informationmain">
				<div class="information">
					<div class="imtop">
						<p class="imttop">城市</p>
						<p class="imtcity"  v-for="item in Address"><span>{{item}}</span><i></i></p>
					</div>
					<div class="imtime">
						<div class="imtime_l">
							<router-link to="rili.vue">
								<p class="itpone">入住</p>
								<p class="itptwo">1月2日<em>今天</em></p>
							</router-link>
						</div>
						<div class="imtime_r">
							<router-link to="rili.vue">
								<p class="itpthree">离店</p>
								<p class="itpfour">1月3日<em>周三</em></p>
							</router-link>
						</div>
						<div class="imtime_sum">
							<span><i>1</i>晚</span>
						</div>
					</div>
					<div class="iminput">
						<p>
							<i></i>
							<input type="text" placeholder="地址／酒店" />
						</p>
					</div>
					<div class="imbut">
						<a href="javascript:;">查找酒店</a>
					</div>
				</div>
			</div>
			<div class="recommend">
				<div class="recommend_top">
					<span><i></i>推荐</span>
				</div>
				<div class="recommend_img">
					<ul>
						<li v-for="item in GroupHotel.merchants">
							{{item.indoor}}
						</li>
						<!-- <li>
							<img src="/static/pic1.png" />
						</li>
						<li>
							<img src="/static/pic1.png" />
						</li>
						<li>
							<img src="/static/pic1.png" />
						</li> -->
					</ul>
				</div>
			</div>
			<div class="mainbut">
				<a class="reservebut" href="javascript:;">
					<p><i></i></p>
					<p>预订</p>
				</a>
				<a class="minebut" href="javascript:;">
					<p><i></i></p>
					<p>我的</p>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
	import "../lib/jquery.min.js";
	import "../lib/oder.js";
	import "../lib/TouchSlide.1.1.js";
	import "../css/reset.css";
	import "../css/index.css";
	export default {
		name: "index",
		data() {
			return {
				msg: "",
				Address: [],
				GroupHotel: []
			};
		},
		methods: {
			showAddress: function() {
		 		var _this = this
				_this.axios .get( "http://hotel.harvetech001.cn/roomBooking/showAddress?groupId=46bdb45b-5744-4268-ba48-bd57eff43c10",{
					headers: {
						
					},
				}).then(function(res) {
					_this.Address = res.data.data
					console.log(_this.Address)
				});
			},
			queryGroupHotel: function() {
		 		var _this = this
				_this.axios .get( "http://hotel.harvetech001.cn/roomBooking/queryGroupHotel?groupId=46bdb45b-5744-4268-ba48-bd57eff43c10",{
					headers: {
						
					},
				}).then(function(res) {
					_this.GroupHotel = res.data.data
					console.log(_this.GroupHotel)
				});
			},
		},
		mounted() {
			this.showAddress();
			this.queryGroupHotel();
		}
	};
	//TouchSlide({
		// slideCell: "#slideBox",
		// titCell: ".hd ul", //开启自动分页 autoPage:true，此时设置 titCell 为导航元素包裹层
		// mainCell: ".bd ul",
		// effect: "leftLoop",
		// easing: "swing",
		// autoPage: true, //自动分页
		// autoPlay: true, //自动播放
		// delayTime: 800, //切换效果持续时间
	//});
</script>