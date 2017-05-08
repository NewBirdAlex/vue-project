<style scoped="" lang="less">
    @import "../../assets/css/custom";

    .check-wrapper {
        float: right;
        width: 60%;
    }

</style>

<template>
    <div class="check-wrapper" name="right">
        <div class="check-box">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    //    import xCeil from '../x-ceil'

    export default {
//        components: {xCeil},
        props: {
            'defaultItemClass': {
                type: String,
                default: 'checker-default-item-class'
            },
            'selectedItemClass': {
                type: String,
                default: 'checker-selected-item-class'
            },
            'disabledItemClass': {
                type: String,
                default: 'checker-disabled-item-class'
            },
            'type': {
                type: String,
                default: 'radio'
            },
            'value': {
                type: [String, Object, Array]
            },
            'max': {
                type: Number,
                default: 1
            }
        }
    }
</script>

