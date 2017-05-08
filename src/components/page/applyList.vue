<template>
	
	<div>
		<div class="topTitle tac bgWhite">
			<span class="fl active">待处理 (3)</span>
			<span class="fr">已完成（1）</span>
			<span>处理中 (2）</span>
		</div>
		<search :keyWord="searchContent" @changeValue = "changeValue"></search>
		<ul>
			<li>
				<p>
					<span>订单编号：20170125001</span>
					<span class="gray fr">2017-01-25 </span>
				</p>
				<p class="ft24">
					<span class="circle"></span>
					<span class="deepRed"> 申请中，待补充资料</span>
					<span class="fr">贷款人：黄怿</span>
				</p>
				<img src="../../assets/images/rightArrow.png"/>
			</li>
			<li>
				<p>
					<span>订单编号：20170125001</span>
					<span class="gray fr">2017-01-25 </span>
				</p>
				<p class="ft24">
					<span class="deepRed">申请中，待补充资料</span>
					<span class="fr">贷款人：黄怿</span>
				</p>
				<img src="../../assets/images/rightArrow.png"/>
			</li>
		</ul>
	</div>
</template>

<script>
	import search from '../search/index.vue'
	export default{
		data(){
			return {
				searchContent:""
			}
		},
		components:{
			search
		},
		methods:{
			changeValue(value){
				console.log(value)
				this.searchContent = value;
			}
		}
	}
</script>

<style scoped lang="less">
@import "../../assets/css/custom.less";

	.topTitle{
		height: 0.8rem;
		line-height: 0.8rem;
		margin-bottom:0.2rem;
		span{
			width: 33%;
			&:nth-child(3){
				display: block;
				width: 34%;
				margin: 0 auto;
			}
		}
		.active{
			color: @fontYellow;
			font-size: 0.28rem;
		}
	}
	ul{
		margin-top: 1px;
		li{
			background: white;
			padding:0.2rem 0.2rem;
			padding-right: 0.8rem;
			line-height: 0.44rem;
			margin-bottom: 1px;
			position: relative;
			img{
				position: absolute;
				right: 0.2rem;
				top: 50%;
				width: 0.14rem;
				transform: translateY(-50%);
			}
			.circle{
				display: inline-block;
				width: 0.14rem;
				height: 0.14rem;
				border-radius: 50%;
				
				background: @fontPink;
			}
		}
	}
</style>