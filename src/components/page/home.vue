<template>
	<div class="">
		
		<step stepOrder='2'>
			<p>第一步：买房子</p>
		</step>
		<router-link to='fillInform'>
			<div class="productList">
				<img src="../../assets/images/house2.png" />
				<p>
					房屋按揭贷款
				</p>
			</div>
		</router-link>
		<!--<route-link to=''>-->
			<div class="productList">
				<img src="../../assets/images/house.png" />
				<p>
					宅优贷
				</p>
			</div>
		<!--</route-link>-->
		<!--<route-link to=''>-->
			<div class="productList">
				<img src="../../assets/images/bag.png" />
				<p>
					消费贷款
				</p>
			</div>
		<!--</route-link><-->
	</div>
</template>
<script>
	
	import step from '../step/index.vue'
	export default {
		data() {
			return {
				topic:"线上贷款"
			}
		},
		components: {
//			topic,
			step
		}
	}
</script>
<style scoped lang="less">
	.productList {
		width: 7rem;
		height: 2.5rem;
		text-align: center;
		background: url(../../assets/images/cityBg.png) white no-repeat;
		background-position: bottom;
		margin: 0.25rem auto;
		background-size: 100% auto;
		border-radius: 10px;
		box-shadow: 1px 1px 10px gray;
		img {
			width: 2.03rem;
			margin-top: 0.2rem;
		}
		p {
			font-size: 0.28rem;
			color: #673344;
		}
	}
</style>