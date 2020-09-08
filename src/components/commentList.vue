<template>
	<div>
		<div class="title">
			<p class="titleName"><b>评价列表</b></p>
			<a href="perTraveller.html"><img src="/static/titleBack.png"></a>
		</div>
		<div class="Nmame_com">
			<div class="con_list">
				<div class="con_tab" style="display: block;">
					<div class="maxbox">
						<div class="minbox">
							<ul>
								<li class="clear" v-for="item in ComentDate">
									<div class="list_text">
										<div class="clear">
											<div class="min_left fl">
												<p class="list_img">
												<img v-if="item.anonymity == 0 && item.headImgUrl!=undefined" v-bind:src="item.headImgUrl" />
												<img v-if="item.anonymity == 0 && item.headImgUrl==undefined" src="/static/morentouxiang.png" />
												<img v-if="item.anonymity == 1" src="/static/f_moren_list.png" />
												</p>
											</div>
											<div class="com_width fl">
												<p class="f_com" v-if="item.anonymity == 0">{{item.userName}}</p>
												<p class="f_com" v-if="item.anonymity ==1">匿名用户</p>
												<div class="clear">
													<div class="clxing">
														<span v-for="(v,index) in 5" v-bind:class="[index<=item.level-1?'huang_xing':'hui_xing']"></span>
													</div>
													<div class="right_text fr">{{item.createTime}}</div>
												</div>
											</div>
										</div>
										<p class="f_hot_text">{{item.description}}</p>

										<div class="hot_icon clear">
											<p class="icon_img fl" v-if="item.wordContent!=undefined">
												<img src="/static/f_qian.png" />
											</p>
											<p class="icon_text fr" v-if="item.wordContent !=undefined">											
												<span v-for="content in item.wordContent.replace(/,/g,'|')">{{content}}</span>																	
											</p>
										</div>
										<div class="f_huifu" v-if="item.reply!=undefined">
											<i></i>
											<p>
												<span class="com_huifu">商家回复：</span>
												<span>{{item.reply}}</span>
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
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
				ComentDate: [],
			}
		},
		methods: {
			Comentddress: function() {
				var _this = this
				_this.axios.get("http://hotel.harvetech001.cn/roomBooking/comment/getCommentList?pageNum=1&pageSize=1000&merchantId=183d297b-326c-46e7-9c9b-7663094d565e", {
					merchantId: '183d297b-326c-46e7-9c9b-7663094d565e'
				},{
					headers: {
						"X-Token": '8ca22c74-0198-4c24-8978-1406e7cc84e4'
					},
				}).then(function(res) {					
						_this.ComentDate = res.data.data.comments;
//						console.log(_this.ComentDate[1].anonymity)
						
				});
			}
		},
		mounted() {
			this.Comentddress();
		},
	}
</script>