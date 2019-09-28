<template>
    <v-card class="quiz">
        <v-card-text v-if="step === 0">
            <div class="quiz__title">Привет! <img src="../../assets/waving-hand-sign.png" class="quiz__icon"></div>
            <div class="quiz__content">Пройдите небольшой опрос, чтобы мы могли подобрать для вас организации на
                основе ваших возможностей и интересов
            </div>
            <div class="quiz__action">
                <v-btn class="primary" @click="nextStep">Пройти опорос</v-btn>
            </div>
        </v-card-text>
        <v-card-text v-else-if="step === 1">
            <div class="quiz__question">
                В какое время вам было бы удобнее всего участвовать в волонтерстве?
            </div>
            <div class="quiz__content">
                <quiz-weekdays :weekdays.sync="weekdays"/>
            </div>
            <div class="quiz__action">
                <v-btn :disabled="weekdays.length === 0" class="primary" @click="nextStep">Далее</v-btn>
            </div>
        </v-card-text>
        <v-card-text v-else-if="step === 2">
            <div class="quiz__question">
                Выберите свой город
            </div>
            <div class="quiz__content">
                <v-select
                        :items="cities"
                        v-model="city"
                />
            </div>
            <div class="quiz__action">
                <v-btn :disabled="!city" class="primary" @click="nextStep">Далее</v-btn>
            </div>
        </v-card-text>
        <v-card-text v-else-if="step === 3">
            <div class="quiz__question">
                Выберите интересующие варианты
            </div>
            <div class="quiz__content">
                <quiz-advanced/>
            </div>
            <div class="quiz__action">
                <v-btn :disabled="!city" class="primary" @click="nextStep">Далее</v-btn>
            </div>
        </v-card-text>

    </v-card>
</template>

<script>
    import QuizWeekdays from "./QuizWeekdays";
    import QuizAdvanced from "./QuizAdvanced";

    export default {
        name: "Quiz",
        components: {QuizAdvanced, QuizWeekdays},
        data() {
            return {
                step: 3,

                weekdays: [],
                cities: [
                    'Москва',
                    'Санкт-Петербург',
                    'Казань',
                    'Екатеринбург',
                    'Новосибирск',
                ],
                city: null
            }
        },
        methods: {
            nextStep() {
                this.step++
            }
        }
    }
</script>

<style scoped>
    .quiz {
        width: 760px;
        margin: auto;
        padding: 1rem 2rem;
    }

    .quiz__title {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }

    .quiz__content {
        font-size: 1.3rem;
        line-height: 1.6rem;
        margin-bottom: 2rem;
    }

    .quiz__icon {
        line-height: 1rem;
        display: inline-block;
        height: 1rem;
    }

    .quiz__question {
        font-size: 1.7rem;
        line-height: 1.7rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 2.5rem;
    }
</style>