<script setup>
    import {defineProps} from "vue";
    import {RouterLink} from "vue-router"

    const {quizQuestionLength, numberOfCorrectAnswers} = defineProps (["numberOfCorrectAnswers", "quizQuestionLength"])
</script>


<template>
    <div class="results">
        <p>Your Results...</p>

        <h1>
            {{ numberOfCorrectAnswers }} /
            {{ quizQuestionLength }}
        </h1>
        <RouterLink class="link" to="/">Go Back</RouterLink>
    </div>
</template>


<style scoped >
    .results {
        text-align: center;
        padding: 100px 0;
    }

    p {
        font-size: 20px;
        color: blueviolet;
    }

    h1 {
        font-size: 80px;
        color: blueviolet;
    }

    .link {
        text-decoration: none;
        color: blueviolet;
        font-size: 2em;
    }
</style>