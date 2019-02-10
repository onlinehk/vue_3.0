<template>
    <div>
        <navMenu />
        <transition mode="out-in" :enter-active-class="enterTransition" :leave-active-class="leaveTransition">
            <!-- <navigation> -->
            <router-view/>
            <!-- </navigation> -->
        </transition>
    </div>
</template>

<style lang="scss">
@import '../../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
@import '../../node_modules/pure-css-loader/dist/css-loader.css';

html, body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.animated {
    animation-duration: 0.5s;
}

</style>

<script>
import navMenu from '@/components/navMenu.vue'

export default {
    components: {
        navMenu
    },
    data () {
        return {
            enterTransition: 'animated fadeIn',
            leaveTransition: 'animated fadeOut',
        }
    },
//   created() {
//     this.$navigation.on('forward', (to, from) => {
//       this.enterTransition = 'animated fadeInRight';
//       this.leaveTransition = 'animated fadeOutLeft';
//     })
//     this.$navigation.on('back', (to, from) => {
//       this.enterTransition = 'animated fadeInLeft';
//       this.leaveTransition = 'animated fadeOutRight';
//     })
//     this.$navigation.on('replace', (to, from) => {
//       this.enterTransition = 'animated fadeIn';
//       this.leaveTransition = 'animated fadeOut';
//     })
//   }
}
</script>