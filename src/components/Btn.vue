<template>
    <button class="btn">
        <slot/>
    </button>
</template>

<script>
    export default {
        name: "Btn",

    }
</script>

<style scoped>
.btn {
    border: 1px solid green;
    border-radius: 6px;
    padding: .5rem 1.5rem;
}
</style>