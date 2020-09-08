<template>
	<div>
		<div class="order-detail">
			<div class="title">
				<p class="titleName"><b>订单详情</b></p>
				<a href="perTraveller.html"><img src="/static/titleBack.png"></a>
			</div>
			<!--nav    ed-->
			<div class="l_container l_card">
				<div class="l_content">
					<p class="hotel_name show">待提交<span>(24小时内未提交成功订单自动删除)</span></p>
					<p class="hotel_name">待支付<span>(30分钟内未提交成功订单自动删除)</span></p>
					<p class="hotel_name">已支付</p>
					<p class="hotel_name">已提交</p>
					<p class="hotel_name">用户取消</p>
					<p class="hotel_name">预订成功</p>
					<p class="hotel_name">已完成</p>
					<p class="hotel_name">关闭交易<em>&nbsp;&nbsp;(酒店已取消)</em></p>
					<div class="hotel_mess">
						<p>入住 <span>10月05日</span>离店 <span>10月20日</span><i class="jian wan">共<em>16</em>晚</i></p>
						<p><em class="f_display">高级豪华房高级豪华房高级豪华房豪华房华房</em>房型 <span>(单人床)</span><span>含1份早餐</span></p>
					</div>
				</div>
			</div>

			<div class="l_container hotel_add">
				<div class="l_content1">
					<p class="s_hotal">中州郑州假日酒店中州郑州假日酒店店中州郑州假日酒店</p>
					<p class="hotel_name1">郑州市复兴门外大街外大街外大街外大街外大街19号19号19号</p>
					<p class="hotel_phone">
						<a href="address.html" class="l_first"><img src="/static/icon_loca.png" alt="" /><span>酒店地址</span></a>
						<a href="javascript:;"><img src="/static/icon_call.png" alt="" /><span>联系酒店</span></a>
					</p>
				</div>
			</div>

			<div class="l_container l_person">
				<div class="l_content clearfix">
					<p class="l_left">入住人</p>
					<p class="l_right">车南</p>
					<p class="l_left">手机号码</p>
					<p class="l_right">18518099332</p>
					<div class="l_tips clearfix">
						<p class="l_left l_text">入住偏好</p>
						<p class="l_right l_text">无</p>
					</div>
					<div class="l_tip">
						<p class="time">保留时间&nbsp;&nbsp;2016-08-27&nbsp;&nbsp;&nbsp;18:00之前</p>
						<p>如果需要索取发票，请到前台领取</p>
					</div>
				</div>
			</div>

			<div class="l_container room_m">
				<div class="l_content">
					<h3>房费信息<img src="/static/f_don.png" alt="" /></h3>
					<div class="toggle_list">
						<p><span class="one">2016-08-26</span><span class="two">x80</span><span class="three">￥10.00</span></p>
						<p><span class="one">2016-08-26</span><span class="two">x8</span><span class="three">￥190.00</span></p>
						<p><span class="one">2016-08-26</span><span class="two">x890</span><span class="three">￥19800.00</span></p>
						<p>提前3天预订享9.8折</p>
						<p>连住7天享立减10元</p>
						<p>预付享立减10元</p>
						<p>现付享8.8折</p>
						<p>优惠券立减30元,不与其他优惠共享</p>
						<p>优惠券立减50元,与其他优惠共享</p>
						<p><span>订单总价：</span><span>￥7777777.00</span></p>
						<p><span>共优惠：</span><span class="you">-￥17.00</span></p>
						<p><span>实付金额：</span><span>￥1588.00</span></p>
						<p><span>担保金额：</span><span>￥170.00</span></p>
						<div class="f_datle">担保说明：酒店会根据您的担保方式，需暂扣 ¥794.00用于担保。该订单确认后不可被取消修改，若未入住担保费用将不予退还。订单完成后，担保金按原路自动退回。</div>
					</div>
				</div>
			</div>

			<div class="l_container room_m room_o">
				<div class="l_content">
					<h3>订单信息<img src="/static/f_don.png" alt="" /></h3>
					<div class="toggle_list">
						<p><span>订单编号</span><span>000111222333444</span></p>
						<p><span>支付方式</span><span>预付</span></p>
						<p><span>提交时间</span><span><em>2016-06-27</em>&nbsp;&nbsp;&nbsp;<em>18:45</em></span></p>
					</div>
				</div>
			</div>
		</div>
		<div class="foot_bar">
			<p class="text-right">
				<a href="details_refund.html" class="ck" style="display: none;">查看退款</a>
				<a href="javascript:;" class="dp" style="display: none;">我要点评</a>
				<a href="javascript:;" class="sc">删除订单</a>
				<a href="javascript:;" class="qx" style="display: none;">取消订单</a>
				<a href="javascript:;" class="red tj">立即提交</a>
				<a href="order_pay.html" class="red zf" style="display: none;">立即支付</a>
				<a href="index.html" class="red yd" style="display: none;">再次预订</a>
			</p>
		</div>
		<!--删除订单提示弹窗-->
		<div class="tan_drop tan4 tan_dele">
			<div class="tan_box">
				<p class="text">您确定要删除订单吗?</p>

				<p class="btn3 room_btn">
					<a href="javascript:;" class="cancle">取消</a>
					<a href="javascript:;" class="ok">确定</a>
				</p>

			</div>
		</div>
		<p class="dele_ok order_tip">删除订单成功</p>
		<!--取消订单提示弹窗-->
		<div class="tan_drop tan4 tan_cancle">
			<div class="tan_box">
				<p class="text">您确定要取消订单吗?</p>

				<p class="btn3 room_btn">
					<a href="javascript:;" class="cancle">取消</a>
					<a href="javascript:;" class="ok">确定</a>
				</p>
			</div>
		</div>
		<p class="cancle_ok order_tip">取消订单成功</p>

		<!--无网络弹窗-->
		<div class="no_network ">
			<div class="tan_box">
				<p class="text">网络不给力，请稍后再试！</p>
				<p class="btn3 room_btn">
					<a href="javascript:;">重新加载</a>
				</p>
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
		name: 'order_detail',
		data() {
			return {
				msg: '',

			}
		},
		methods: {

		},
		mounted() {
			tab();
		}

	}

	function tab() {
		$(".room_m h3").click(function() {
			$(this).next(".toggle_list").slideToggle();
			if($(this).find("img").attr("src") == "/static/icon_down.png") {
				$(this).find("img").attr("src", "/static/icon_up.png");
			} else {
				$(this).find("img").attr("src", "/static/icon_down.png")
			}
		})

		$(".sc").click(function() {
			$(".tan_dele").fadeIn();
		})
		$(".cancle").click(function() {
			$(this).parents(".tan_drop").fadeOut();
		})
		$(".ok").click(function() {
			$(this).parents(".tan_drop").fadeOut();
			$(this).parents(".tan_drop").next(".order_tip").fadeIn().delay(1000).fadeOut()

		})
	}
</script>