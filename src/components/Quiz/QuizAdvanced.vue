<template>
    <div class="advanced">
        <v-radio-group class="advanced__row" v-model="radioOne" :mandatory="false" row>
            <v-radio label="В помещении" value="1" />
            <v-radio label="Вне помещений" value="2" />
            <v-radio label="Оба варианта" value="3" />
        </v-radio-group>
        <v-radio-group class="advanced__row" v-model="radioTwo" :mandatory="false" row>
            <v-radio label="Активность" value="1" />
            <v-radio label="Рутина" value="2" />
            <v-radio label="Оба варианта" value="3" />
        </v-radio-group>
        <v-radio-group class="advanced__row" v-model="radioThree" :mandatory="false" row>
            <v-radio label="Физическая активность" value="1" />
            <v-radio label="Умственная активность" value="2" />
            <v-radio label="Оба варианта" value="3" />
        </v-radio-group>
        <v-radio-group class="advanced__row" v-model="radioFour" :mandatory="false" row>
            <v-radio label="Коллективная работа" value="1" />
            <v-radio label="Индивидуальная работа" value="2" />
            <v-radio label="Оба варианта" value="3" />
        </v-radio-group>

    </div>
</template>

<script>
    export default {
        name: "QuizAdvanced",
        data() {
            return {
                radioOne: [],
                radioTwo: [],
                radioThree: [],
                radioFour: [],
            }
        }
    }
</script>

<style scoped>
    .advanced__row {
        border-bottom: 1px solid black;
    }
</style>