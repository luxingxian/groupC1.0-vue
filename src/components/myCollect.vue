
	<template>
		<div class="contentBox collect">
			<div class="title">
				<p class="titleName"><b>我的收藏</b></p>
				<a href="javascript:;" @click="goToPersonal()"><img src="/static//titleBack.png"></a>
			</div>
			<div class="collectConetnt marTop">	
				<div class="collectList" v-for="collect in collectList">
					<div class="roomPic clearfix">
						<img v-bind:src="collect.merchantPicurl"/>
						<img src="/static/iconCollect.png" class="collectIcon" @click="cancleCollect(collect.id)"/>
					</div>
					<div class="roomMess">
						<p class="roomName"><span>{{collect.merchantName}}</span><a href="javascript:;" class="bookBtn" @click="goListHouse(collect.merchantId)">立即预定</a></p>
					</div>
				</div>
				<p class="errorPop" v-if="showTip">已取消~</p>
			</div>
			<div class="loseContent" v-if="showLose">
				<p class="loseTitle" @click="toggleloseList"><span>失效</span></p>
				<div class="loseList" v-if="showloseList">
					<p v-for="lose in loseList">{{lose.merchantName}}</p>
				</div>
			</div>
			<div class="noCollect" v-if="(collectList.length==0||!collectList)&&!showLose">
				<img src="/static/Collection.png" alt="">
				<p>暂无收藏记录</p>
			</div>
		</div>
		
	</template>
		<script type="text/javascript">
			import '../lib/jquery.min.js'
			import '../lib/oder.js'
			import '../css/reset.css'
			import '../css/public.css'
			import '../css/personalCenter.css'
			export default {
			name: 'myCollect',
			data () {
				return {
				Token:"9889471f-f6af-4a45-85be-5500d93eb719",
				collectList:[],
				loseList:[],
				errorTip:'',
				showTip:false,
				showLose:false,
				showloseList:false,
				}
			},
			methods: {
				//查询收藏及失效列表
				getMyCollect:function(){
					var _this=this;
					this.axios.get('http://hotel.harvetech001.cn/roomBooking/hotelRoomCollection/show',{
						headers:{
							"Accept": "application/json;charset=UTF-8",
							"X-Token": _this.Token
							}
					})
					.then(function(res){
						if(res.data.result){
							_this.collectList=res.data.data.effectiveCollectionList;
							_this.loseList=res.data.data.invalidCollectionList
							if(_this.loseList.length<=0){
								_this.showLose=false;
							}else{
								_this.showLose=true;
							}
						}
						console.log(res);
					})
					.catch(function(err){
						console.log(err);
					});
				},
				//取消收藏
				cancleCollect:function(collectionId){
					var _this=this;
					this.axios.post('http://hotel.harvetech001.cn/roomBooking/hotelRoomCollection/cancel?collectionId='+collectionId,null,{
						headers:{
							"Accept": "application/json;charset=UTF-8",
							"X-Token": _this.Token
							}
					})
					.then(function(res){
						if(res.data.result){
							_this.showTip=true;
							setTimeout(function(){
							_this.showTip=false;
							_this.getMyCollect()
							},2000)
						}
						console.log(res);
					})
					.catch(function(err){
						console.log(err);
					});
				},
				//失效点击效果
				toggleloseList:function(){
					this.showloseList=!this.showloseList;
				},
				//立即预定点击跳转至酒店详情页
				goListHouse:function(merchantId){
					this.$router.push({
						 path: "/List_houses",
						 query:{merchantId:merchantId}
					})
				},
				goToPersonal:function(){
					this.$router.push({
						 path: "/personalCenter"
					})
				}
			},
			mounted(){
				this.getMyCollect();
				},
			}
		</script>
