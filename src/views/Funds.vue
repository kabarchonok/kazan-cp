<template>
    <div class="funds">
        <!--<div class="funds__title">Список фондов</div>-->
        <quiz/>
    </div>
</template>

<script>
    import Quiz from "../components/Quiz/Quiz";

    export default {
        name: "Funds",
        components: {Quiz}
    }
</script>

<style scoped>
    .funds {
        max-width: 940px;
        margin:  auto;
    }
    .funds__title {
        font-size: 2rem;
        font-weight: bold;
        border-bottom: 1px solid #d0d0d0;
        margin-bottom: 3rem;
    }
</style>