<template>
    <div class="advanced">
        <v-radio-group class="advanced__row" v-model="radioOne" :mandatory="false" row>
            <v-radio label="Работа в помещении" value="1" />
            <v-radio label="Работа вне помещения" value="2" />
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
        <v-radio-group class="advanced__row" v-model="radioTwo" :mandatory="false" row>
            <v-radio label="Активная работа" value="1" />
            <v-radio label="Рутиная работа" value="2" />
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

<style>
    .advanced__row {
        border-bottom: 1px solid black;
    }

    .v-input--radio-group__input {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>