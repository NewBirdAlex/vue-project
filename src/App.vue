<template>
    <div id="app">
        <topic :diyTopic='diyTopic' link="/viede">
        	<span class="fr side" v-if='showRight'>ѡȡ</span>
        </topic>
        <router-view ></router-view>
    </div>
</template>
<style lang="less">
    @import "./assets/css/custom.less";
</style>

<script>
    import topic from './components/topic/index.vue'
    import {navMap} from './libs/navMap'

    export default {
        name: 'app',
        data () {
            return {
                
                diyTopic: "...",
                showRight:false
            }
        },
        methods: {},
        components: {
            topic
        },
        watch: {
            $route: function (nw) {
//              console.dir(nw)
                const vm = this,
                path = nw.path

                navMap.some(ele => {
                    if (ele.path === path) {
                        vm.diyTopic = ele.navName
                        return true
                    }
                })
            }
        }
    }
</script>
