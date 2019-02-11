<template>
    <div class="container">
        <!-- loader -->
        <div :class="loader" />

        <div style="height:50px">
            <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <div v-if="(this.$route.params.p2 == 'p2')" key="1">
                    <h3>Page 2</h3>
                </div>
                <div v-else key="2">
                    <h3>Page 1</h3>
                </div>
            </transition>
        </div>
    
    <br />

        <h2>count:<span class="count"> {{ count }}</span></h2>
        <button class="btn btn-success" @click="actionIncrease(1)"> + </button>&nbsp;
        <button class="btn btn-success" @click="actionDecrease(1)"> - </button>
        <br /><br />
        <button class="btn btn-primary" @click="actionIncrease(3)">+3</button>

    <br /><br /><br /><br />

        <h2>v-for</h2>
        Total: {{items.length}}
        <div v-for="(item, key) in items" :key="item.id">
            item{{key}}: {{item}}
        </div>

    <br /><br /><br /><br />

    <h2>ajax</h2>
        <button class="btn btn-info" @click="actionGetData()">Get Data</button><br/><br/>
        <div v-if="get_data">
            <div v-if="get_data.userId">
                Title: {{get_data.title}}
            </div>
            <div v-else>
                Total: {{get_data.length}}
                <div v-for="(data, key) in get_data" :key="data.id">
                    <div v-if="(key<=5)">item{{key}}: {{data.title}}</div>
                </div>
            </div>
        </div>

    <br /><br /><br /><br />
    <button class="btn btn-info" @click="check()">Check</button><br/><br/>

    {{this.$route.params.id}}<br />{{this.$route.params.p2}}
    
    <div class="test">tests</div>
    <div class="test2">aaa</div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import about from '@/pages/count/_id/_p2/index.vue'
const { mapState, mapActions } = createNamespacedHelpers("count");
export default {
    data() {
        return {
            items: ['測試一', '測試二'],
            // id: this.$route.params.id,
            // p2: this.$route.params.p2,
        }
    },
    mounted() {
        console.log('mounted');
        if (!this.$store.state.count.get_data) {
            this.$store.dispatch('count/actionGetData', 'one');
        }
        this.check();
        // console.log($('.test').html());
        $('.test2').html($('.test').html());
    },
    computed: {
        ...mapState({
            count: 'countNum',
            get_data: 'get_data'
        }),
        loader() {
            return {
                "loader": true,
                "loader-default": true,
                "is-active": this.$store.state.count.is_loading,
            }
        }
    },
    methods: {
        ...mapActions([
            'actionIncrease',
            'actionDecrease',
            'actionGetData'
        ]),
        check() {
            console.log('check');
        }
    },
}
</script>