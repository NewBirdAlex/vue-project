<template>
	<div class="wrap tac">
		<!--<p>
			{{content}}
		</p>-->
		<slot></slot>
		<div class="step" v-if='stepOrder>=2'>
			<div class="line"></div>
			<div class="redLine" v-bind:style="{width:(stepOrder-1)*(2.11)+'rem'}"></div>
			<div class="stepNum " :class="[stepOrder>=2?'active':'']">1</div>
			<div class="stepNum" :class="[stepOrder>=3?'active':'']">2</div>
			<div class="stepNum" :class="[stepOrder>=4?'active':'']">3</div>
			<div class="stepNum" :class="[stepOrder>=4?'active':'']">4</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['stepOrder']
	}
</script>

<style scoped lang="less">
@import "../../assets/css/custom.less";
.wrap{
	width: 6.34rem;
		margin: 0 auto;
		margin-bottom: 20px;
	p{
		font-size: 0.26rem;
		color: @fontGray;
		line-height: 1rem;
		
	}
	.step{
		position: relative;
		height: 0.6rem;
		.line,.redLine{
			height: 0.12rem;
			width: 100%;
			position: absolute;
			top: 0.28rem;
			background: @stepPink;
			
		}
		.redLine{
			background: @stepPinkActive;
		}
		.stepNum{
			position: absolute;
			width: 0.6rem;
			height: 0.6rem;
			background: @stepPink;
			line-height: 0.6rem;
			border-radius: 50%;
			color: @fontDeepRed;
			box-shadow: 0px 0px 10px @stepPink;
			&:nth-child(3){
				left: 0;
			}
			&:nth-child(4){
				left: 33%;
				transform: translateX(-50%);
			}
			&:nth-child(5){
				left: 66%;
				transform: translateX(-50%);	
			}
			&:nth-child(6){
				right: 0;
			}
		}
		.active{
			background: @stepPinkActive;
			color: white;
			box-shadow: 0px 0px 10px @fontDeepRed;
		}
	}
}

</style>