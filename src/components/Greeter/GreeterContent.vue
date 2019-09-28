<template>
    <div class="greeter__content">
        <div class="section">
            <div class="section__title">Наша идея:</div>
            <div class="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet atque dolores dolorum excepturi
                facilis, fuga incidunt molestias nam nihil nulla odit provident quae, quis reiciendis rem suscipit
                tempora voluptatum.
            </div>
        </div>

        <div class="section">
            <div class="section__title text-center">Для кого это</div>
            <div class="section__groups">
                <div class="group activist">
                    <img src="../../assets/man-raising-hand.png" class="group__icon">
                    <div class="group__title">Активисты</div>
                    <div class="group__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias
                        animi commodi ea, earum esse explicabo, in inventore iste labore natus pariatur perferendis quam
                        qui rem reprehenderit sapiente sed vitae!
                    </div>
                    <div class="group__action">
                       <v-btn color="green" class="theme--dark">Я в деле!</v-btn>
                    </div>
                </div>
                <div class="group sponsors">
                    <img src="../../assets/male-office-worker.png" class="group__icon">
                    <div class="group__title">Спонсоры</div>
                    <div class="group__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias
                        animi commodi ea, earum esse explicabo, in inventore iste labore natus pariatur perferendis quam
                        qui rem reprehenderit sapiente sed vitae!
                    </div>
                    <div class="group__action">
                        <v-btn color="green" class="theme--dark">Звучит заманчиво</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GreeterContent",
    }
</script>

<style scoped>
    .greeter__content {
        max-width: 940px;
        margin: auto;
    }

    .section {
        margin-bottom: 2rem;
    }

    .section__title {
        font-size: 2rem;
        font-weight: bold;
    }

    .section__paragraph {
        font-size: 1.5rem;
    }

    .section__groups {
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    .group {
        width: 40%;
        margin: 0 1.5rem;
        text-align: center;
    }

    .group__icon {
        margin: auto;
        display: block;
        height: 5rem;
    }

    .group__title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: .7rem;
    }

    .group__description {
        margin-bottom: 1rem;
        text-align: left;
    }

</style>