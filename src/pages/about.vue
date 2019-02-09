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
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState({
            get_data: state => state.count.get_data
        }),
    },
}
</script>