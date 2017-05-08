<style scoped lang="less">

    @import "../../assets/css/custom";
    .tips {
        text-align: center;
        height: .55rem;
        font-size: .22rem;
        color: @fontBrown;
        padding: 1.63rem 0;
    }
    .wrap{
    	background: white;
    }
</style>

<template>
    <div class="wrap">
        <x-input placeholder="必填">贷款人姓名</x-input>
        <x-input placeholder="必填">贷款人手机号</x-input>
        <x-input placeholder="必填">成交物业地址</x-input>
        <x-input placeholder="必填"
                 units="万元">成交价</x-input>

        <x-input placeholder="必填"
                 units="万元">计划贷款金额</x-input>

        <x-input placeholder="2010年12月25日"
                 tips="提示：借款人必须年满18周岁">出生年月</x-input>

        <x-ceil>
            婚烟情况
            <checker name="right">
                <checker-item v-for="opt in marriedData.json"
                              :key="opt"
                              :value="opt">{{opt}}</checker-item>
            </checker>

        </x-ceil>


        <x-select :data="houseHold.json" v-model="houseHold.value">
            户口性质
        </x-select>

        <x-radio :data="gender.json" v-model="gender.value">
            性别
        </x-radio>

        <input class="nextStep" type="button" value="下一步">

        <p class="tips">
            温馨提示：请确保您提供的资料真实、有效
            <br />
            如果资料存在真实性问题，可能会导致货款不成功。
        </p>
    </div>


</template>

<script>
    import xCeil from '../x-ceil'
    import xInput from '../x-input'
    import {checker, checkerItem} from '../checker'
    import xSelect from '../x-select'
    import xRadio from '../x-radio'

    export default {
        components: {
            xInput,
            xSelect,
            checker,
            checkerItem,
            xRadio,
            xCeil
        },
        data () {
            return {
                marriedData: {
                    json: [
                        '已婚子女',
                        '已婚无子女',
                        '离异',
                        '丧偶',
                        '未婚'
                    ],
                    checked: ''
                },
                houseHold: {
                    json: ['农村', '城市'],
                    value: '农村'
                },
                gender: {
                    json: ['男', '女', '保密'],
                    value: '男'
                }
            }
        }
    }
</script>