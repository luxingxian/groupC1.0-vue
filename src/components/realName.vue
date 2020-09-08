
	<template>
		<div class="all">
			<div class="title">
				<p class="titleName"><b>实名认证</b></p>
				<a href="perTraveller.html"><img src="images/titleBack.png"></a>
			</div>
			<div class="addInfor">
				<div class="addInforAll">
					<div class="inforList">
						<p>姓名</p>
						<input type="text" disabled="disabled" value="李晓明"/>
					</div>
					<div class="inforList">
						<p>证件类型</p>
						<input type="text" disabled="disabled" value="身份证"/>
					</div>
					<div class="inforList lastList">
						<p>证件号（将加密处理）</p>
						<input type="text" disabled="disabled" value="110200199010260730"/>
					</div>
				</div>
				<a href="javascript:;" class="btnhref"><div class="inforSure">保存</div></a>
			</div>
		</div>
	</template>
	<script>
		import '../lib/jquery.min.js'
		import '../lib/oder.js'
		import '../css/reset.css'
		import '../css/public.css'
		import '../css/w_style.css'
		export default {
		name: 'realName',
		data () {
			return {
			msg: ''
			}
		},
		methods: {

		},
		mounted(){
			
			},
		}
	</script>