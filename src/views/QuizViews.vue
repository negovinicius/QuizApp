<script setup>
import Questions from "../components/Questions.vue";
import Quizheader from "../components/Quizheader.vue";
import Result from "../components/Result.vue";
import {useRoute} from "vue-router"
import {ref, watch, computed} from "vue"
import quizes from "../data/quizes.json"

const route = useRoute()

const quizId = parseInt(route.params.id)

const quiz = quizes.find(q => q.id === quizId)

const currentQuestionsIndex = ref(0)

const numberOfCorrectAnswers= ref(0)

const showResults = ref(false)

//const questionStatus = ref(`${currentQuestionsIndex.value}/${quiz.questions.length}`)

//watch(() => currentQuestionsIndex.value, () => {
//    questionStatus.value = `${currentQuestionsIndex.value}/${quiz.questions.length}`
//})

const questionStatus = computed (() => `${currentQuestionsIndex.value}/${quiz.questions.length}`)

const barPercentage = computed(() =>`${currentQuestionsIndex.value/quiz.questions.length * 100}%`)

const onOptionselected = (isCorrect) => {
    if (isCorrect){
        numberOfCorrectAnswers.value++;
    }

    if(quiz.questions.length - 1 === currentQuestionsIndex.value){
        showResults.value = true
    }

    currentQuestionsIndex.value++
}
</script>

<template>
  <div>
    
    <Quizheader
      :questionStatus="questionStatus"  
      :barPercentage="barPercentage" 
      >
    </Quizheader>
  </div>

  <div>
    <Questions 
    v-if="!showResults"
    :question="quiz.questions[currentQuestionsIndex]"
    @selectOption="onOptionselected"
    
    ></Questions>

    <Result v-else
        :quizQuestionLength="quiz.questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
        
    ></Result>

  </div>

</template>
