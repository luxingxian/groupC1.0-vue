<template style="background: #F1F2F7;">
	<div class="f_content">
		<div class="f_parent">
			<div class="swiper-container">
				<img v-bind:src="AddressHide.cover" />
			</div>
			<div class="f_position">
				<img src=" /static/Group 12.png" class="f_img fl" />
				<p class="pstion_text fr">
					<img src="/static/Group 13.png" class="Group_1" />
					<img src="/static/Group 6.png" class="Group_2" v-show="Group_2" @click="showToggle" />
					<img src="/static/f_Group .png" class="Group_2" v-show="Group_3" @click="changeImg" />
				</p>
			</div>
			<a href="tel:telephone">
				<p class="f_mniu">联系商家</p>
			</a>
		</div>
		<div class="mniu_back">
			<div class="mniu_text clear">
				<p class="f_mniu_p">{{AddressHide.name}}</p>
				<a href="javascript">
					<div class="mniu_nav">
						<img src="/static/f_wei.png" class="fl nav_first" />
						<span class="fl nav_text">{{AddressHide.address}}</span>
						<img src="/static/Shape Copy@1x.png" class="fr nav_last" />
					</div>
				</a>
				<a href="javascript">
					<div class="f_mack">
						<p class="fl mack_frist">{{AddressHide.grade}}分</p>
						<img src="/static/Shape Copy@1x.png" class="fr mack_last" />
						<span class="fr mack_text">{{AddressHide.commentCount}}条评论</span>
					</div>
				</a>
			</div>
		</div>
		<div class="f_time clear">
			<div class="time_first fl">
				<span>入住</span>
				<span>1月2日&nbsp;&nbsp;&nbsp;&nbsp;<em>今天</em></span>
			</div>
			<div class="time_last fr">
				<span>离店</span>
				<span>1月2日&nbsp;&nbsp;&nbsp;&nbsp;<em>周三</em></span>
			</div>
			<p class="time_text">1晚</p>
		</div>
		<div class="room_mak">
			<p class="room_titele"><i></i>房型列表</p>
			<ul class="room_list">
				<li class="clear" v-for="item in AddressHide.rooms">
					<div class="room_left fl">
						<img v-bind:src="item.popularizePicUrl" />
						<p class="room_img">
							<span v-if="item.payType==1">
									<img src="/static/f_xian.png" />
								</span>
							<span v-if="item.payType==2">
									<img src="/static/f_yu.png" />
								</span>
							<span v-if="item.payType==3">									
									<img src="/static/f_xian.png" />
									<img src="/static/f_yu.png" />
								</span>
							<span v-if="item.payType==4">
									<img src="/static/f_dan.png" />
								</span>
							<span v-if="item.payType==5">
									<img src="/static/f_xian.png" />
									<img src="/static/f_dan.png" />									
								</span>
							<span v-if="item.payType==6">
									<img src="/static/f_yu.png" />
									<img src="/static/f_dan.png" />									
								</span>
							<span v-if="item.payType==7">
									<img src="/static/f_dan.png" />
									<img src="/static/f_xian.png" />
									<img src="/static/f_yu.png" />
								</span>
						</p>
					</div>
					<div class="room_right fl">
						<p class="room_one">{{item.name}}</p>
						<p class="room_two">
							<span>{{item.roomArea+'平米'}}&nbsp;</span>|
							<span v-if="item.bedBig">{{'大床'+item.bedBig}}&nbsp;|</span>
							<span v-if="item.bedDouble">{{'双人床'+item.bedDouble}}&nbsp;|</span>
							<span v-if="item.bedSingle">{{'单人床'+item.bedSingle}}&nbsp;|</span>
							<span v-if="item.bedOther ">{{'其他'+item.bedOther}}&nbsp;|</span>
							<span>{{item.breakfast==0?'不含早':item.breakfast==1?'含单早':item.breakfast==2?'含双早':'含餐'+item.breakfast}}&nbsp;|</span>
							<span>{{'可入住'+item.checkInNum+'人'}}&nbsp;</span>
						</p>
						<div class="room_hot clear">
							<span class="fl">¥{{item.price}}<i>起</i></span>
							<span class="fl" v-if="item.roomStatus==3">¥{{item.basePrice}}<i>起</i></span>
							<a href="javascript:;" class="fr" v-if="item.roomStatus==0">立即预订</a>
							<a href="tel:item.telephone" class="fr" v-if="item.roomStatus==3">电话预约</a>
							<a href="javascript:;" class="room_hui fr" v-if="item.roomStatus==1">已满房</a>
							<a href="javascript:;" class="room_hui fr" v-if="item.roomStatus==2">暂不可预订</a>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<p class="room_titele1"><i></i>酒店信息<img src="/static/Group 2.png" class="fr" /></p>
		<div class="room_hotel">
			<div class="hotel_min">
				<div class="hotel_text">
					<p class="hotel_first">酒店介绍</p>
					<p class="hotel_last" v-html="AddressHide.description"></p>
				</div>
				<p class="hotel_first1">设施服务</p>
				<div class="sheshi">
					<ul class="clear">
						<li class="fl clear" v-for="itemList in AddressHide.guideList">
							<p class="fl">
								<img v-bind:src="itemList.guidePicUrl" />
							</p>
							<p class="list_text2 fl">{{itemList.guidePicName}}</p>
						</li>
					</ul>
				</div>
				<div class="room_policy">
					<p class="policy_text">酒店政策</p>
					<span>入住时间：{{AddressFun.createTime}}</span>
					<span>离店时间：{{AddressFun.operationTime}}</span>
					<span>发票索取：请到前台索取发票</span>
				</div>
			</div>
		</div>
		<p class="errorPop" v-show="Policy">已取消</p>
		<p class="errorPop" v-show="Fpolicy">收藏成功</p>
	</div>

</template>
<script>
	import '../lib/jquery.min.js'	
	import '../lib/oder.js'
	import '../css/reset.css'
	import '../css/List_houses.css'
	import '../css/public.css'
	export default {
		name: 'List_houses',
		data() {
			return {
				msg: '',
				AddressHide: [],
				AddressFun: [],
				Group_2: true,
				Group_3: false,
				Fpolicy:false,
				Policy:false
			}
		},
		methods: {
			HideAddress: function() {
				var _this = this
				_this.axios.get("http://hotel.harvetech001.cn/roomBooking/hotelRoomMessage/showHotelDetail?merchantId=183d297b-326c-46e7-9c9b-7663094d565e&checkTime=2018-01-01&outTime=2018-01-29", {
					headers: {

					},
				}).then(function(res) {
					_this.AddressHide = res.data.data
				});
			},
			Futin: function() {
				var _this = this
				_this.axios.get("http://hotel.harvetech001.cn/roomBooking/hotelRoomMessage/getHotelTime?merchantId=183d297b-326c-46e7-9c9b-7663094d565e", {
					headers: {

					},
				}).then(function(res) {
					_this.AddressFun = res.data.data
						//						console.log(_this.AddressFun.guide.guidePicName)
				});
			},
			/*添加收藏*/
			showToggle: function() {
				var _this = this
				_this.Group_2 = false
				_this.Group_3 = true
				_this.axios.post("http://hotel.harvetech001.cn/roomBooking/hotelRoomCollection/create?merchantId=183d297b-326c-46e7-9c9b-7663094d565e",{
					merchantId: '183d297b-326c-46e7-9c9b-7663094d565e'
				}, {
					headers: {
						"X-Token": '8ca22c74-0198-4c24-8978-1406e7cc84e4',						
					},
				}).then(function(res) {					
					if(res.data.result==true){
						_this.Fpolicy=true
						setTimeout(function(){_this.Fpolicy=false},3000)
					}						
				});

			},
			/*取消收藏*/
			changeImg: function() {
				var _this = this
				_this.Group_3 = false
				_this.Group_2 = true
				_this.axios.post("http://hotel.harvetech001.cn/roomBooking/hotelRoomCollection/cancel?collectionId=183d297b-326c-46e7-9c9b-7663094d565e",{
					merchantId: '183d297b-326c-46e7-9c9b-7663094d565e'
				}, {
					headers: {
						"X-Token": '8ca22c74-0198-4c24-8978-1406e7cc84e4',						
					},
				}).then(function(res) {					
					if(res.data.result==true){
						_this.Policy=true
						setTimeout(function(){_this.Policy=false},3000)
					}						
				});
			}
		},
		mounted() {
			this.HideAddress();
			this.Futin();
		}
	}
	$(function() {
		$('.room_list li').each(function() {
			var height = $(this).height();
			$(this).find('.room_left').css('height', height)
		})
	})
</script>