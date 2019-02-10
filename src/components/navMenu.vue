<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/count/aa/bb">Count</router-link> |
        <router-link to="/count/aa/p2">Count 2</router-link>
    </div>
</template>

<style scoped lang="scss">
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
        color: #42b983;
        font-size: 20px;
        }
    }
}
</style>