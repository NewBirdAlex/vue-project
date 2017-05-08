<style scoped="" lang="less">
    @import "../../assets/css/custom";

    label.x-input-label {
        background-color: #ffffff!important;
        position: relative;
        display: block;
        margin-left: .28rem;
        margin-right: .32rem;
        font-size: .26rem;
        color: @fontDeepGray;
        padding: .32rem 0;
        .x-input-right{
            float: right;
        }
        input.x-input {
            outline: none;
            border: none;
            text-align: right;
        }
        em.u {
            font-style: normal;
            color: @fontDeepRed;
            font-size: .26rem;
            margin-left: .2rem;
        }
        em.t {
            position: absolute;
            right: 0;
            bottom: 0;
            color: @fontBlue;
            font-size: .2rem;
        }

    }
</style>

<template>
    <x-ceil>
        <slot></slot>
        <span name="right" class="x-input-right">
            <input type="text" class="x-input" :placeholder="placeholder">
            <em class="u" v-show="units">{{units}}</em>
            <em class="t" v-show="tips">{{tips}}</em>
        </span>
    </x-ceil>
    <!--<label class="x-input-label">
        <slot></slot>
        <span class="x-input-right">
            <input type="text" class="x-input" :placeholder="placeholder">
            <em class="u" v-show="units">{{units}}</em>
            <em class="t" v-show="tips">{{tips}}</em>
        </span>

    </label>-->
</template>

<script>
    import xCeil from '../x-ceil'

    export default {
        data: function () {
            return {}
        },
        components: {
            xCeil
        },
        props: {
            placeholder: String,
            units: String,
            tips: String
        }
    }
</script>