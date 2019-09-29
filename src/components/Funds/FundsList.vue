<template>
<div v-if="funds.length > 0" class="fund-list">
    <funds-list-item
            v-for="fund in funds"
            :key="fund.id"
            :fund="fund"
    ></funds-list-item>

</div>
    <div class="fund-list" v-else>Идет поиск...</div>
</template>

<script>
    import {db} from "../../plugins/firebase";
    import FundsListItem from "./FundsListItem";
    export default {
        name: "FundsList",
        components: {FundsListItem},
        data() {
            return {
                funds: []
            }
        },
        firestore: {
            funds: db.collection('opportunities')
        }
    }
</script>

<style scoped>
.fund-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>