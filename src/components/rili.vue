
<template>
	<div>

			<div class="ta_date" id="div_date1">
				<span class="date_title" id="date1"></span>
			</div>
			<div class="date_box clearfix">
				<div class="date1 date2">
					<p class="ruzhu">入住</p>
					<p><span class="date">11月14日</span class="week"><span>周一</span></p>
				</div>
				<div class="date1">
					<p class="ruzhu">离店</p>
					<p><span class="date">11月15日</span class="week"><span>周二</span></p>
				</div>
				<div class="imtime_sum">
					<span><em>1</em>晚</span>
				</div>
				<button class="ok">确定</button>
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
		</div>
	</template>
		<script type="text/javascript">
			import '../lib/jquery.min.js'

			export default {
			name: 'rili',
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


			//			var STATS_START_TIME = '4329148800';
			// var today = new Date();
			// var dT = today.getDate();
			// var mT = today.getMonth() + 1;
			// var yT = today.getFullYear();
			// var ruzhu = yT + "-" + mT + "-" + dT
			// var lidian = yT + "-" + mT + "-" + (dT + 1)
			// var dateRange1 = new pickerDateRange('date1', {
			// 	aRecent90Days: 'aRecent90Days', //最近90天
			// 					isTodayValid : true,
			// 	startDate: ruzhu,
			// 	endDate: lidian,
			// 	needCompare: false,
			// 	defaultText: ' 离开 ',
			// 	autoSubmit: false,
			// 	inputTrigger: 'input_trigger1',
			// 	theme: 'ta',
			// 	calendars: 1,
			// });
		</script>
		<!-- <script type="text/javascript">
			$(function() {
				if($("table tbody tr td").hasClass("last")) {
					$(".ta_btn_primary").removeAttr("disabled")
				} else {
					$(".ta_btn_primary").attr("disabled", "disabled")
				}
				$("tbody tr td").click(function() {
					if($("table tbody tr td").hasClass("last")) {
						$(".ta_btn_primary").removeAttr("disabled")
					} else {
						$(".ta_btn_primary").attr("disabled", "disabled")
					}
				})
			})
		</script> -->