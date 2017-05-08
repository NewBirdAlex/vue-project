<style scoped="" lang="less">
    @import "../../assets/css/custom";

    .x-input-wrapper {
        background-color: #ffffff;
        overflow: hidden;
    }
    label.x-input-label {
        overflow: auto;
        position: relative;
        display: block;
        margin-left: .28rem;
        margin-right: .32rem;
        font-size: .26rem;
        color: @fontDeepGray;
        padding: .32rem 0;

        &:after {
            content: '';
            width: 130%;
            height: 1px;
            background-color: #eee;
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
</style>

<template>
    <div class="x-input-wrapper">
        <label class="x-input-label">
            <slot>&nbsp;&nbsp;&nbsp;</slot>
            <slot name="right"></slot>
        </label>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {}
        },
        props: {
            placeholder: String,
            units: String,
            tips: String
        }
    }
</script>