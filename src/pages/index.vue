<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/images/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <MyTest title="Testing 1234">
            <br />
            <span style="color:red">
                my test
            </span>
        </MyTest>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld/index.vue'
import MyTest from '@/components/MyTest.vue'
export default {
    name: 'home',
    components: {
        HelloWorld,
        MyTest
    }
}
</script>