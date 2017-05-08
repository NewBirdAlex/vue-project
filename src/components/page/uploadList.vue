<template>
	<div id="wrap">
		<step stepOrder='1'>
			<p>第五步：上传资料（3/3）</p>
		</step>
		<div class="bgWhite">
			<ul>
				<li>身份证（夫妻二人）<i></i></li>
				<li>户口本（夫妻二人）<i></i></li>
				<li>婚况 <i></i></li>
				<li class="active">收入证明（盖单位公章）<i></i></li>
				<li>银行流水<i></i></li>
				<li>外地人，社保（社保证明/税单）<i></i></li>
				<li>业主房产证（全部页）<i></i></li>
				<li>房产交易资料（三方约/两方约）<i></i></li>
				<li>征信授权书<i></i></li>
				<li>初评报告<i></i></li>
				<li>网签资料<i></i></li>
				<li>其他补充资料<i></i></li>
			</ul>
		</div>
		<p class="tac tips">您有4份资料待上传！</p>
		<p class="tac check"> <i :class="[check?'active':'']" @touchend='check=!check'></i> 本人确保提供的所有资料均真实、有效</p>
		<div class="btnContent">
			<input type="button" name="" id="" value="增加共同申请人" />
			<input class="fr" type="button" name="" id="" value="增加担保人" />
		</div>
		<input class="nextStep" type="button" value="提交" @touchend='submitInf'>
		<div class="pop" v-show="pop">
			<div class="content">
				<img src="../../assets/images/delete.png" @touchend="pop=!pop" class="close" />
				<p>
					提交信息后，如需修改信息，<br /> 请致电客服热线400-099-1818，
					<br /> 是否确认提交贷款信息？
				</p>
				<input type="button" name="" id="" class="nextStep" value="确认提交" />
				<span class="blue" @touchend="pop=!pop">我再核对一下</span>
			</div>
		</div>
	</div>
</template>

<script>
	import step from '../step/index.vue'

	export default {
		data() {
			return {
				check: true,
				pop: true
			}
		},
		methods: {
			submitInf() {
				this.pop = !this.pop
			}
		},
		components: {
			step
		}
	}
</script>

<style scoped lang="less">
	@import "../../assets/css/custom";
	#wrap {
		padding-bottom: 1rem;
	}
	
	.bgWhite {
		padding: 0 0.2rem;
		ul {
			li {
				list-style: decimal inside;
				padding: 0.3rem;
				font-size: 0.26rem;
				color: @fontBlack;
				border-bottom: 1px solid #f4f4f4;
				i {
					float: right;
					width: 0.14rem;
					height: 0.26rem;
					background: url(../../assets/images/rightArrow.png);
					background-size: 100% 100%;
				}
			}
			.active {
				color: @fontYellow;
			}
		}
	}
	
	.tips {
		color: @fontBlue;
		line-height: 0.7rem;
	}
	
	.check {
		color: @fontDeepRed;
		i {
			display: inline-block;
			width: 0.28rem;
			height: 0.28rem;
			border: 1px solid @fontDeepRed;
			border-radius: 0.05rem;
			vertical-align: middle;
			position: relative;
			top: -2px;
		}
		.active {
			background: url(../../assets/images/pick.png);
			background-size: 100% 100%;
		}
	}
	
	.btnContent {
		margin: 0.2rem;
		input {
			background: @fontYellow;
			border: none;
			outline: none;
			height: 0.66rem;
			width: 3.4rem;
			color: white;
			border-radius: 0.1rem;
		}
	}
	
	.pop {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
		left: 0;
		top: 0;
		.content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border: 1px solid @fontBlack;
			width: 5.34rem;
			background: white;
			text-align: center;
			padding: 0.5rem 0;
			line-height: 0.56rem;
			border-radius: 0.2rem;
			.nextStep {
				width: 2.4rem;
			}
		}
		.close {
			position: absolute;
			right: -0.7rem;
			top: -0.7rem;
			width: 0.58rem;
			height: 0.58rem;
		}
	}
</style>