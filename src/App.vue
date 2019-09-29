<template>
    <v-app id="app" v-if="this.$route.path === '/'">
        <div class="app__wrapper">
            <router-view/>
        </div>
    </v-app>
    <v-app v-else>
        <the-header/>
        <the-content/>
        <the-footer/>
    </v-app>
</template>

<script>
    import TheHeader from "./components/TheHeader";
    import TheContent from "./components/TheContent";
    import TheFooter from "./components/TheFooter";

    export default {
        components: {TheFooter, TheContent, TheHeader},
    }
</script>

<style>
    :root {
        --header-bg-color: linear-gradient(45deg, #30cd97, #3d86c6);
    }

</style>
