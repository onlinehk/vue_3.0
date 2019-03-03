<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div v-if="get_data">
            <div v-if="get_data.userId">
                Title: {{get_data.title}}
            </div>
            <div v-else>
                Total: {{get_data.length}}
                <div v-for="(data, key) in get_data" :key="data.id">
                    <div v-if="(key<=10)">item{{key}}: {{data.title}}</div>
                </div>
            </div>
        </div>
        <br />
        <h2>Input lazy call ajax</h2>
        <input type="text" v-model="texts" v-debounce="search">
        <br />
        {{input_text}}
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data () {
        return {
            texts: '',
            input_text: ''
        }
    },
    computed: {
        ...mapState({
            get_data: state => state.count.get_data
        }),
    },
    methods: {
        search () {
            // 實際要進行的操作 axios.get('')之類的
            console.log('text is:' + this.texts)
            this.input_text = this.texts;
        }
    }
}
</script>