<template>
    <v-card
            class="fund"
            max-width="400"
    >
        <v-img
                height="200px"
                :src="fund.author.photo.medium"
        >
        </v-img>
        <v-card-title>
            <div style="width: 100%;">{{fund.name}}</div>
            <span class="grey--text subtitle-1">{{fund.region.full_pretty_name}}</span>
        </v-card-title>
        <v-card-text>
            <span>Дата начала: {{fund.start_date}}</span>
        </v-card-text>
        <v-card-actions>
            <v-btn :to="'/fund/' + fund.id" text>Подробнее</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "FundsListItem",
        props: {
            fund: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .fund {
        margin: 1.5rem 0 ;
        padding: 1rem;
    }

    .fund__thumbnail {
        border-radius: 6px;
        margin-bottom: .5rem;
    }

    .fund__name {
        font-size: 1.5rem;
        line-height: 1.5rem;
        margin-bottom: 1rem;
    }
</style>