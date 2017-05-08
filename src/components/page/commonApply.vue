<template>
	<div class="caWrap bgWhite">
		<p class="top">共同申请人与贷款人关系</p>
		<div class="addContent">
			<img class="leftIcon" src="../../assets/images/couple.png"/>
			夫妻
			<img class="fr rightIcon" src="../../assets/images/checked.png"/>
		</div>
		<div class="addContent">
			<img class="leftIcon" src="../../assets/images/couple.png"/>
			子女
		</div>
		<div class="addContent">
			<img class="leftIcon" src="../../assets/images/couple.png"/>
			父母
		</div>
		<div class="addContent">
			<img class="leftIcon" src="../../assets/images/couple.png"/>
			非直系亲属
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
.caWrap{
	padding: 0.2rem;
	margin-top: 0.2rem;
	padding-bottom: 2rem;
	.top{
		line-height: 1.2rem;
		font-size: 0.3rem;
	}
	.addContent{
		padding: 0.35rem;
		height: 0.7rem;
		line-height: 0.7rem;
		box-shadow: 0 0 10px #fff2f2;
		margin-top: 0.2rem;
		position: relative;
		.leftIcon{
			height: 0.7rem;
			vertical-align: middle;
			margin-right: 0.4rem;
		}
		.rightIcon{
			width: 0.46rem;
			position: absolute;
			right: 0.4rem;
			top: 50%;
			transform: translateY(-50%);
		}
		font-size:0.3rem;
	}
}
</style>