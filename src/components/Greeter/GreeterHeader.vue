<template>
    <div class="greeter__header">
        <div class="greeter__header-wrapper-bg"></div>
        <div class="greeter__header-wrapper">
            <div class="greeter__title font-weight-bold">
                Ави <img class="greeter__title-icon ml-10" src="../../assets/ant.png">
            </div>
            <div class="greeter__sub-title">
                Делаем мир лучше
            </div>
            <div class="greeter__action">
                <v-btn to="/auth" depressed dark>Сделать доброе дело</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GreeterHeader"
    }
</script>

<style scoped>
    .greeter__header {
        position: relative;
        height: 444px;
        margin-bottom: 4rem;
    }

    .greeter__header-wrapper-bg {
        position: absolute;
        background: var(--header-bg-color);
        border-bottom-left-radius: 50% 20%;
        border-bottom-right-radius: 50% 20%;
        animation: .6s header-fade;
        height: 444px;
        top: 0;
        left: 0;
        width: 100%;
    }

    @keyframes header-fade {
        0% {
            height: 0;
        }
        100% {
            height: 444px;
        }
    }

    .greeter__header-wrapper {
        color: #ffffff;
        position: absolute;
        padding: 5rem;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        max-width: 960px;
        animation: .8s header-wrapper-fade;
        overflow: hidden;
        height: 444px;
    }

    @keyframes header-wrapper-fade {
        0% {
            opacity: 0;
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media (max-width: 640px) {
        .greeter__header-wrapper {
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
        }
    }

    .greeter__title {
        display: flex;
        font-size: 6em;
        align-items: center;
    }

    .greeter__title-icon {
        display: block;
        height: 6rem;
    }

    .greeter__sub-title {
        font-size: 2em;
        margin-bottom: 2rem;
    }
</style>