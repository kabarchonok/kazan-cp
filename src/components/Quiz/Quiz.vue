<template>
    <v-card class="quiz">
        <v-card-text>
            <div v-if="!interests">
                <p class="quiz__title">Привет! <img src="../../assets/waving-hand-sign.png" class="quiz__icon"></p>
                <p class="quiz__content">Пройдите небольшой опрос, чтобы мы могли подобрать для вас организации на основе ваших возможностей и интересов</p>
                <div class="quiz__action">
                    <v-btn class="primary">Пройти опорос</v-btn>
                </div>
            </div>
            <div v-else class="quiz__wrapper">
                <div class="quiz__question">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, vitae.
                </div>
                <div class="quiz__answers">
                    <div class="quiz__answer">Поделиться одеждой</div>
                    <div class="quiz__answer">Пожертвовать деньги</div>
                    <div class="quiz__answer">Уборка территории</div>
                    <div class="quiz__answer">Что-нибудь еще</div>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Quiz",
        data() {
            return {
                interests: false
            }
        }
    }
</script>

<style scoped>
    .quiz {
        padding: 1rem 2rem;
    }

    .quiz__title {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }

    .quiz__content {
        font-size: 1.6rem;
        line-height: 1.6rem;
        margin-bottom: 2rem;
    }

    .quiz__icon {
        line-height: 1rem;
        display: inline-block;
        height: 1rem;
    }

    .quiz__answer {

    }
</style>