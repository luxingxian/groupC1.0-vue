<template>
  <div>
		<div class="w_content">
			<div class="title">
				<p class="titleName"><b>退款详情</b></p>
				<a href="javascript:;" ><img src="/static//titleBack.png"></a>
			</div>
			<div class="details_refund">
				<div class="details_refund_content" v-for="refund in refunds">
					<p>
						<span>退款状态</span>
						<span class="details_red">{{refund.refundStatus==1?'退款中':refund.refundStatus==2?'退款成功':'退款失败'}}</span>
					</p>
					<p>
						<span>退款类型</span>
						<span>{{refund.type==1?'整单退款':refund.type==2?'部分退款':'其他'}}</span>
					</p>
					<p>
						<span>退款金额</span>
						<span>￥{{refund.amount/100}}</span>
					</p>
					<p>
						<span>退款方式</span>
						<span>原路返回</span>
					</p>
					<p>
						<span>退款原因</span>
						<span>{{refund.reason }}</span>
					</p>
					<p>
						<span>退款时间</span>
						<span>{{refund.refundTime }}</span>							
					</p>
					<p>
						<span>退款单号</span>
						<span>{{refund.refundNo}}</span>
					</p>
					<p>
						<span>订单号</span>
						<span>{{refund.orderNo}}</span>
					</p>						
				</div>
			</div>
		</div>
		<p class="f_center_text">订单状态由交易关闭引起的退款或者不退款,优惠券均不退回</p>
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
<script type="text/javascript">
import "../lib/oder.js";
import "../css/reset.css";
import "../css/public.css";
import "../css/personalCenter.css";
export default {
  name: "refundDetail",
  data() {
    return {
		Token:"9889471f-f6af-4a45-85be-5500d93eb719",
		orderNo:'11171206151900482865',
		refunds:[],
    };
  },
  methods: {
	  getRefundDetail:function(){
		var _this=this;
		this.axios.get('http://hotel.harvetech001.cn/roomBooking/orderRefund/getDetail/'+_this.orderNo,{
			headers:{
				"Accept": "application/json",
				"X-Token": _this.Token
				}
		})
		.then(function(res){
			if(res.data.result){
				_this.refunds=res.data.data.refunds;
			}
		})
		.catch(function(err){
			console.log(err);
		});
	  }
  },
  mounted() {
	  this.getRefundDetail();
  }
};
</script>
