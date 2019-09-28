<template>
    <div class="weekdays">
        <div class="weekdays__head">
            <div></div>
            <div> Утро</div>
            <div> День</div>
            <div> Вечер</div>
        </div>
        <div class="weekdays__body">
            <div class="weekdays__row" v-for="day in weekdaysArray" :key="day.value">
                <div>
                    {{day.name}}
                </div>
                <div>
                    <v-checkbox v-model="weekdaysMutable" :value="day.value + '-morning'"/>
                </div>
                <div>
                    <v-checkbox v-model="weekdaysMutable" :value="day.value + '-day'"/>
                </div>
                <div>
                    <v-checkbox v-model="weekdaysMutable" :value="day.value + '-evening'"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "QuizWeekdays",
        props: {
            weekdays: {
                type: Array
            }
        },
        data() {
            return {
                weekdaysArray: [
                    {name: 'Понедельник', value: 'monday'},
                    {name: 'Вторник', value: 'tuesday'},
                    {name: 'Среда', value: 'wednesday'},
                    {name: 'Четверг', value: 'thursday'},
                    {name: 'Пятница', value: 'friday'},
                    {name: 'Суббота', value: 'saturday'},
                    {name: 'Воскресенье', value: 'sunday'},
                ],
                weekdaysMutable: this.weekdays
            }
        },
        watch: {
            weekdaysMutable() {
                this.$emit('update:weekdays', this.weekdaysMutable)
            }
        }
    }
</script>

<style scoped>
    .weekdays {
        width: 660px;
        margin: auto;
    }

    .weekdays__head {
        /*margin-bottom: 1rem;*/
    }

    .weekdays__row {
        height: 3rem;
    }

    .weekdays__head,
    .weekdays__row > div:first-child{
        /*font-weight: bold;*/
    }

    .weekdays__head,
    .weekdays__row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: baseline;
    }

    .weekdays__head > div:not(:first-child),
    .weekdays__row > div:not(:first-child) {

        display: flex;
        justify-content: center;
    }
</style>