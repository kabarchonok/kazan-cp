<template>
    <header class="header">
        <router-link to="/" class="logo font-weight-bold">Ави <img class="logo__icon" src="../assets/ant.png"></router-link>
    </header>
</template>

<script>
    export default {
        name: "TheHeader"
    }
</script>

<style scoped>
    .header {
        padding: 1rem 2rem;
        background: var(--header-bg-color);
        color: #ffffff;
        border-bottom-left-radius: 10%;
        border-bottom-right-radius: 10%;
    }

    .logo {
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        color: #ffffff;
        text-decoration: none;
    }

    .logo__icon {
        height: 1.3rem;
        display: inline-block;
        margin-left: .5rem;
    }
</style>