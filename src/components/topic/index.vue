<template>
	<div>
		<header class="tac">
			 <router-link :to="link"><img src="../../assets/images/back.png" class="fl"/></router-link>
			
			{{diyTopic}}
			<slot></slot>
		</header>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['diyTopic','link']
	}
</script>

<style scoped lang="less">
	@import "../../assets/css/custom.less";
	header{
		height: 0.9rem;
		/*background: #fa4141;*/
		background: @topRed;
		line-height: 0.9rem;
		color: white;
		font-size: 0.34rem;
		position:relative;
	}
	header img{
		position: absolute;
		top: 50%;
		height: 0.33rem;
		transform: translateY(-50%);
		left: 0;
		margin-left: 0.2rem;
	}
	.side{
		position: absolute;
		right: 0.2rem;
		top: 50%;
		transform: translateY(-50%);
	}
</style>