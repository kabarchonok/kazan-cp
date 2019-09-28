<template>
    <div class="quiz">
        <div v-if="!interests">
            <p>Привет! <img src="../../assets/waving-hand-sign.png" class="quiz__icon"></p>
            <p>Пройдите небольшой опрос, чтобы мы могли подобрать для вас более интересные фонды</p>
            <div class="quiz__action">Пройти опорос</div>
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
    </div>
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
    .quiz__icon {
        line-height: 1rem;
        display: inline-block;
        height: 1rem;
    }
.quiz__answer {

}
</style>