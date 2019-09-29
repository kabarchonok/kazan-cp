<template>
    <v-card class="funds">
        <v-card-title class="funds__title">Список организаций</v-card-title>
        <v-card-text>
            <funds-list/>
        </v-card-text>
    </v-card>
</template>

<script>
    import FundsList from "../components/Funds/FundsList";

    export default {
        name: "Funds",
        components: {FundsList},

    }
</script>

<style scoped>
    .funds {
        max-width: 940px;
        margin: auto;
    }

    .funds__title {
        font-size: 2rem;
        font-weight: bold;
        border-bottom: 1px solid #d0d0d0;
        margin-bottom: 1rem;
    }
</style>