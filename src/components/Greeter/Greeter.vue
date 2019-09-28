<template>
    <div class="greeter">
        <greeter-header/>
        <greeter-stepper/>
        <!--<greeter-content/>-->
    </div>
</template>

<script>
    import GreeterHeader from "./GreeterHeader";
    import GreeterContent from "./GreeterContent";
    import GreeterStepper from "./GreeterStepper";
    export default {
        name: "Greeter",
        components: {GreeterStepper, GreeterContent, GreeterHeader}
    }
</script>

<style scoped>

</style>