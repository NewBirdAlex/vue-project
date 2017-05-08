<style scoped="" lang="less">
    @import "../../assets/css/custom";

    .x-radio-wrapper {
        float: right;
        color: @fontBlack;
    }

    .x-radio-icon {
        display: inline-block;
        width: .32rem;
        height: .32rem;
        vertical-align: middle;
        margin-left: .9rem;
        margin-right: .13rem;
        input[type=radio] {
            margin-left: .9rem;
        }
    }
</style>

<template>
    <x-ceil>
        <slot>&nbsp;</slot>
        <div class="x-radio-wrapper">
            <label v-for="radioItem in data">
                <!--<template >-->
                    <img v-show="value != radioItem" class="x-radio-icon" src="../../assets/images/defaultCheck.png" alt="未选中">
                    <img v-show="value == radioItem" class="x-radio-icon" src="../../assets/images/checked.png" alt="选中">
                    <input type="radio"
                           v-model="currentValue"
                           :value="radioItem"
                           style="display: none;">{{radioItem}}
                <!--</template>-->
            </label>
        </div>
    </x-ceil>
</template>

<script>
    import xCeil from '../x-ceil'
    export default {
        components: {xCeil},
        props: {
            value: {
                type: String,
                required: true
            },
            data: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                currentValue: this.value
            }
        },
        watch: {
            value (newVal) {
                this.currentValue = newVal
            },
            currentValue (newVal) {
                this.$emit('input', newVal)
            }
        }
    }
</script>