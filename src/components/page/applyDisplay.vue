<style lang="less" rel="stylesheet/less" scoped="">
    @import "../../assets/css/custom";

    .orderTit {
        font-size: .32rem;
        color: @fontDeepGray;
        margin-top: .56rem;
    }

    .remark {
        font-size: .26rem;
        margin-bottom: .2rem;
        color: @fontDeepGray;
    }

    .remark:last-of-type {
        padding-bottom: .4rem;
    }

    .top-wrapper{
        margin-bottom: .2rem;
    }
    .orderStatus {
        font-size: .28rem;
        color: @fontDeepRed;
        margin-top: .6rem;
        margin-bottom: .54rem;
    }

    .more {
        padding: .4rem 0;
        color: @fontPink;
    }
    .remarkactive{
        color: @fontDeepRed;}

</style>
<!--3.0客户订单（银行审核中）-->
<template>
    <div class="apply-wrapper">
        <div class="top-wrapper of bgWhite">
            <p class="marginGap orderTit">订单编号：20170115003</p>
            <!--初审中-->
            <p class="marginGap orderStatus">银行初审中</p>
            <!--银行初审通过，待补充资料，待补充资料-->
            <p class="marginGap orderStatus">银行初审通过，待补充资料</p>
            <p class="marginGap remark">备注</p>
            <p class="marginGap remark">1、需要补充什么资料，需要补充什么资料，需要补充什么资料，需要补充什么资料，需要补充什么资料</p>
            <p class="marginGap remark">2、需要补充什么资料，需要补充什么资料，需要补充什么资料，需要补充什么资料，需要补充什么资料</p>
            <!--待补充资料-->
            <p class="marginGap orderStatus">待补充资料</p>
            <p class="marginGap remark">备注</p>
            <p class="marginGap remark">1、需要补充什么资料，需要补充什么资料，需要补充什么资料，需要补充什么资料，需要补充什么资料</p>
            <p class="marginGap remark">2、需要补充什么资料，需要补充什么资料，需要补充什么资料，需要补充什么资料，需要补充什么资料</p>
            <!--审核通过-->
            <p class="marginGap remark remarkactive">审核结果：</p>
            <p class="marginGap remark">1、需要补充什么资料，需要补充什么资料，需要补充什么资料，需要补充什么资料，需要补充什么资料</p>
            <p class="marginGap remark">2、需要补充什么资料，需要补充什么资料，需要补充什么资料，需要补充什么资料，需要补充什么资料</p>
        </div>

        <x-ceil>
            主贷款人姓名
            <span name="right" class="fr">徐智鹏</span>
        </x-ceil>

        <x-ceil>
            主贷款人姓名
            <span name="right" class="fr">广东省 广州市 天河区</span>
        </x-ceil>

        <x-ceil>
            &nbsp;
            <span name="right" class="fr">花城大道168号高德置地A座805</span>
        </x-ceil>
        <x-ceil>
            成交价
            <span name="right" class="fr">552000000000元</span>
        </x-ceil>

        <x-ceil>
            计划贷款金额
            <span name="right" class="fr">350 万元</span>
        </x-ceil>
        <x-ceil>
            计划贷款年限
            <span name="right" class="fr">30年</span>
        </x-ceil>

        <x-ceil>
            提交时间
            <span name="right" class="fr">2017-02-28 15:15:15</span>
        </x-ceil>

        <p class="more tac bgWhite">查看更多信息</p>
    </div>
</template>

<script>
    import xCeil from '../x-ceil'

    export default {
        components: {xCeil},
        data () {
            return {}
        }
    }
</script>