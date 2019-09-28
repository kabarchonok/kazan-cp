<template>
    <header class="header">
        <router-link to="/" title="На главную" class="logo"></router-link>
    </header>
</template>

<script>
    export default {
        name: "TheHeader"
    }
</script>

<style scoped>
    .header {
        padding: .3rem 2rem 1rem;
        background: var(--header-bg-color);
        color: #ffffff;
        border-bottom-left-radius: 10%;
        border-bottom-right-radius: 10%;
        margin-bottom: 3rem;
    }

    .logo {
        background: url("../assets/logo-sm.png") no-repeat center;
        background-size: contain;
        width: 80px;
        height: 50px;
        display: block;
    }

</style>