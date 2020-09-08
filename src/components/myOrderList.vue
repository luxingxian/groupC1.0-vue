<template>
 	<div>
		<div class="title">
			<p class="titleName"><b>我的订单</b></p>
			<a href="javascript:;" ><img src="/static//titleBack.png"></a>
		</div>
		<div class="list_box">
			<div class="tabTitle">
				<ul>
					<li v-for="(tab,index) in tabs" :class="{active:index==curIndex}" @click="getOrderList(tab.type,index)">{{tab.tabName}}<span></span></li>
				</ul>
			</div>
			<div class="orderList">
				<div class="kapian" v-for="list in orderList" :class="{complete:list.roomOrder.productStatus==7}">
					<div class="s_rcot">
						<p class=" clear">
							<span class="hotelName black fl">{{list.roomOrder.merchantName}}</span>
							<span class="black s_red fr">{{list.roomOrder.productStatusDesc}}</span>
						</p>
						<p class="s_tet clear">
							<span class="last_left fl">{{list.roomOrder.roomName}}</span>
							<span class="left fl">共{{list.roomOrder.num}}间</span>
							<span class="price fr">&yen;{{list.roomOrder.amount}}</span>
						</p>
						<p class="s_bot clear">
							<span class="fl"> {{list.roomOrder.checkInTime}} 至 {{list.roomOrder.checkOutTime}}</span>
							<span class="s_next fl">{{list.roomOrder.payMent==1?'现付':list.roomOrder.payMent==2?'预付':list.roomOrder.payMent==3?'担保':'其他'}}</span>
						</p>
						<p class="s_frist clear">
							<span class="fl">最晚到店时间 :&nbsp; </span>
							<span class="fl"> {{list.roomOrder.checkInTime}} {{list.roomOrder.retentionTime}} 之前</span>
						</p>
					</div>
					<p class="btns clearfix"><a href="javascript:;">我要评价</a><a href="javascript:;" >再次预订</a></p>
				</div>
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
		<div class="noCollect" v-if="!orderList">
			<img src="/static/noOrder.png" alt="">
			<p>暂无订单</p>
			<p class="toBook"><a href="/">去首页预订</a></p>
		</div>
	</div>
</template>
<script type="text/javascript">
// ？？？？？页面遗留问题
//1、已完成状态“我要评价”、“再次预订”按钮的跳转
import "../lib/oder.js";
import "../css/reset.css";
import "../css/public.css";
import "../css/personalCenter.css";
export default {
  name: "myOrderList",
  data() {
    return {
		Token:"9889471f-f6af-4a45-85be-5500d93eb719",
		tabs:[{tabName:'全部',type:''},{tabName:'待支付',type:'14'},{tabName:'待入住',type:'13'},{tabName:'待评价',type:'10'}],
		curIndex:0,
		orderList:[],
		orderDec:'',
		isComplete:false,
    };
  },
  methods: {
    getOrderList:function(orderStatus,index){
		var _this=this;
		_this.curIndex=index;
		_this.orderList=[]
		this.axios.get('http://hotel.harvetech001.cn/roomBooking/roomOrder/getRoomOrderList?pageNum=1&pageSize=1000&orderStatus='+orderStatus,{
			headers:{
				"Accept": "application/json",
				"X-Token": _this.Token
				}
		})
		.then(function(res){
			if(res.data.result){
				_this.orderList=res.data.data.data;
			}
			console.log(_this.orderList)
		})
		.catch(function(err){
			console.log(err);
		});

	},
	
  },
  mounted() {
   this.getOrderList('',0);
  }
};
</script>
		
