<template>
    <div class="fund">
        <img class="fund__thumbnail" :src="fund.author.photo.large">
        <div class="fund__name">
            {{fund.name}}
        </div>
    </div>
</template>

<script>
    import {db} from "../plugins/firebase";

    export default {
        name: "Fund",
        data() {
            return {
                fund: {}
            }
        },
        mounted() {
            this.$bind('fund',db.collection('opportunities').doc(this.$route.params.id))
        }
    }
</script>

<style scoped>

</style>