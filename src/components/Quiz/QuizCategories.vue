<template>
    <div class="categories">
        <v-checkbox v-for="category in categoriesArray" :key="category"
            :label="category"
                    :value="category"
                    v-model="categoriesMutable"
        />
    </div>
</template>

<script>
    export default {
        name: "QuizCategories",
        props: {
          categories: {
              type: Array
          }
        },
        data() {
            return {
                categoriesArray: [
                    'Здравоохранение',
                    'Культура и искусство',
                    'Помощь в больницах',
                    'Помощь детям',
                    'Помощь животным',
                    'Помощь лицам с ОВЗ',
                    'Помощь на событиях',
                    'Помощь пожилым',
                    'Помощь природе',
                    'Срочная помощь (ЧС)'
                ],
                categoriesMutable: this.categories
            }
        },
        watch: {
            categoriesMutable() {
                this.$emit('update:categories', this.categoriesMutable)
            }
        }
    }
</script>

<style scoped>
    .categories {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: .5rem;
        align-items: center;
    }

    @media (max-width: 600px) {
        .categories {
            grid-template-columns: 1fr;
        }
    }
</style>