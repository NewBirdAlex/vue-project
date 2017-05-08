<style scoped="" lang="less">
    @import "../../assets/css/custom";

    .x-select-wrapper {
        float: right;
        &:after {
            content: '';
            display: inline-block;
            width: .14rem;
            height: .09rem;
            background: url("../../assets/images/arrow.png");
            background-size: cover;
            margin-left: .2rem;
            vertical-align: middle;
        }
    }

    .x-select {
        -webkit-appearance: none;
        outline: none;
        border: none;
        min-width: 60%;
        background-color: transparent;
        color: @fontBlack;
        text-align: right;

    }
</style>

<template>
    <x-ceil>
        <slot></slot>
        <div class="x-select-wrapper" name="right">
            <select class="x-select"
                    v-model="currentSelect">
                <option v-for="optItem in data" :value="optItem">{{optItem}}</option>
            </select>
        </div>

    </x-ceil>
</template>

<script>
    import xCeil from '../x-ceil'

    export default {
        components: {xCeil},
        props: {
            data: Array,
            value: {
                type: [String, Array, Object],
                required: true
            }
        },
        data () {
            return {
                currentSelect: this.value
            }
        },
        watch: {
            value (newVal) {
                this.currentSelect = newVal
            },
            currentSelect (newVal) {
                this.$emit('input', newVal)
            }
        },
        methods: {
            updateSelect (value) {
                this.$emit('input', value)
            }
        }
    }
</script>