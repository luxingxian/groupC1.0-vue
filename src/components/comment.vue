<template>
	<div>
		<div class="title">
			<p class="titleName"><b>我的评价</b></p>
			<a href="perTraveller.html"><img src="/static/titleBack.png"></a>
		</div>
		<div class="comment_list">
			<ul class="comment_title clear">
				<li class="fl">
					<a href="javascript:;" class="active">已评价<span class="on1"></span></a>
				</li>
				<li class="s_center fl">
					<a href="javascript:;">待评价{{commentList}}<span></span></a>
				</li>
			</ul>
		</div>
		<div class="con_list">
			<div class="con_tab" style="display: block;">
				<div class="maxbox">
					<div class="minbox">
						<ul>
							<li class="clear" v-for="item in commentArray">
								<div class="list_text">
									<div class="clear">
										<div class="min_left fl">
											<p class="list_img">
												<img v-if="item.comment.anonymity == 0 && item.comment.headImgUrl!=undefined" v-bind:src="item.comment.headImgUrl" />
												<img v-if="item.comment.anonymity == 0 && item.comment.headImgUrl==undefined" src="/static/morentouxiang.png" />
												<img v-if="item.comment.anonymity == 1" src="/static/f_moren_list.png" />
											</p>
										</div>
										<div class="com_width fl">
											<p class="f_com" v-if="item.comment.anonymity == 0">{{item.comment.userName}}</p>
											<p class="f_com" v-if="item.comment.anonymity ==1">匿名用户</p>
											<div class="clear">
												<div class="clxing">
													<span v-for="(v,index) in 5" v-bind:class="[index<=item.comment.level-1?'huang_xing':'hui_xing']"></span>
												</div>
												<div class="right_text fr">{{item.comment.createTime}}</div>
											</div>
										</div>
									</div>
									<p class="f_hot_text">{{item.comment.description}}</p>

									<div class="hot_icon clear">
										<p class="icon_img fl" v-if="item.comment.wordContent!=undefined">
											<img src="/static/f_qian.png" />
										</p>
										<p class="icon_text fr" v-if="item.comment.wordContent!=undefined">
											<span>{{item.comment.wordContent}}</span>|
											<span v-for="v in item.comment.wordContent.replace(/,/g,'|')">{{v}}</span>
										</p>
									</div>
									<div class="f_huifu" v-if="item.comment.reply!=undefined">
										<i></i>
										<p>
											<span class="com_huifu">商家回复：</span>
											<span>{{item.comment.reply}}</span>
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="con_tab">
				<div class="com_mian clear" v-for="item in commentArray">
					<div class="com_min">
						<img src="/static/f_room.png" class="fl" />
						<span class="com_min_frist fl">{{item.roomOrder.merchantName}}</span>
						<span class="com_min_last fr">{{item.roomOrder.createTime}}</span>
					</div>
					<div class="com_list clear">
						<p class="com_hot fl">
							<img src="/static/f_list_2.png" />
						</p>
						<div class="com_right fl">
							<p>{{item.roomOrder.roomName}}<em class="fr">×{{item.roomOrder.num}}</em></p>
							<span>¥{{item.roomOrder.receivedAmount}}</span>
						</div>
					</div>
					<a href="javascript:;" class="com_btn fr">我要评价</a>
				</div>				
			</div>
		</div>
	</div>
</template>

<script>
	import '../lib/jquery.min.js'
	import '../lib/oder.js'
	import '../css/reset.css'
	import '../css/public.css'
	import '../css/List_houses.css'
	export default {
		name: 'comment',
		data() {
			return {
				msg: '',
				commentArray: {},
				commentList:{}
			}
		},
		methods: {
			Comentddress: function() {
				var _this = this
				_this.axios.get("http://hotel.harvetech001.cn/roomBooking/roomOrder/getRoomOrderList?pageNum=1&pageSize=5&orderStatus=9", {
					headers: {
						"X-Token": '8ca22c74-0198-4c24-8978-1406e7cc84e4'
					},
				}).then(function(res) {
					
					_this.commentArray = res.data.data.data;
					_this.commentList = res.data.data.totalNums;
//					console.log(res.data.data.totalNums)
				});
			}
		},
		mounted() {
			tab();
			this.Comentddress();

		},
	}

	function tab() {
		$('.comment_title li').click(function() {
			$('.comment_title li').find('a').removeClass('active');
			$('.comment_title li').find('a').children('span').removeClass('on1');
			$(this).find('a').addClass('active');
			$(this).find('a').children('span').addClass('on1');
			var index = $(this).index();
			$('.con_list>div').eq(index).show().siblings().hide();
		})
	}
</script>