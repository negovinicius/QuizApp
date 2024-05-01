<script setup>
    import {defineProps} from "vue";
    import {RouterLink} from "vue-router"

    const {quizQuestionLength, numberOfCorrectAnswers} = defineProps (["numberOfCorrectAnswers", "quizQuestionLength"])
</script>


<template>
    <div class="results">
        <p>Your Results:</p>

        <h1>
            {{ numberOfCorrectAnswers }} /
            {{ quizQuestionLength }}
        </h1>
      
    </div>
</template>


<style scoped >
    .results {
        text-align: center;
        margin: 100px 0px;
    }

    p {
        font-size: 20px;
        color: blueviolet;
        
    }

    h1 {
        font-size: 60px;
        color: blueviolet;
    }
</style>