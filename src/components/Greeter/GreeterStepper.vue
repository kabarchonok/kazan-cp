<template>
    <div class="stepper">
        <div class="stepper__header">
            <div class="stepper__title">Для участников <img class="stepper__title-icon" src="../../assets/man-raising-hand.png"></div>
        </div>
        <div class="step">
                <div class="step__title">Заполнить анкету  <img class="step__title-icon" src="../../assets/memo.png"></div>
                <div class="step__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam
                    dignissimos dolore doloremque earum fugiat hic itaque iure neque, nulla odio quidem temporibus
                    tenetur! Nihil quibusdam quos similique vel vitae.
                </div>
        </div>
        <div class="step">
            <div class="step__title">Выбрать предпочитаемую организацию  <img class="step__title-icon" src="../../assets/classical-building.png"></div>
            <div class="step__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam
                dignissimos dolore doloremque earum fugiat hic itaque iure neque, nulla odio quidem temporibus
                tenetur! Nihil quibusdam quos similique vel vitae.
            </div>
        </div>
        <div class="step">
            <div class="step__title">Будьте активны - ведите отчеты  <img class="step__title-icon" src="../../assets/memo.png"></div>
            <div class="step__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam
                dignissimos dolore doloremque earum fugiat hic itaque iure neque, nulla odio quidem temporibus
                tenetur! Nihil quibusdam quos similique vel vitae.
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GreeterStepper"
    }
</script>

<style scoped>
    .stepper {
        max-width: 940px;
        margin: auto;
        padding: 0 2.5rem;
    }

    .stepper__title {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 2rem;
        display: flex;
        align-items: baseline;
    }

    @media (max-width: 640px) {
        .stepper__title {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }
    }

    .stepper__title-icon {
        height: 5rem;
        margin-left: 1rem;
    }

    .step {
        display: flex;
        flex-direction: column;
        position: relative;
        border-left: .3rem solid black;
        padding-left: 3rem;
        padding-bottom: 5rem;
    }

    .step::before {
        background-color: #000;
        content: '';
        position: absolute;
        left: -14px;
        top: 12px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }

    .step__title {
        font-size: 2rem;
        line-height: 2rem;
        font-weight: bold;
        margin-bottom: 1.3rem;
    }

    .step__title-icon {
        display: inline-block;
        height: 2.5rem;
        margin-left: .5rem;
    }
</style>