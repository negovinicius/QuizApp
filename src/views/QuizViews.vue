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
};
const prevQuestion = () => {
  if (currentQuestionsIndex.value > 0) {
    currentQuestionsIndex.value--;
  }
};

const nextQuestion = () => {
  if (currentQuestionsIndex.value < quiz.questions.length - 1) {
    currentQuestionsIndex.value++;
  }
};
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

    <div class="navigation-buttons" v-if="!showResults">
      <button @click="prevQuestion" :disabled="currentQuestionsIndex === 0">Voltar</button>
    </div>
    
  <div class="message" v-if="showResults">
    <div v-if="numberOfCorrectAnswers >= Math.ceil(quiz.questions.length) ">
      <p>PARÁBENS VOCÊ ACERTOU TODAS, UM GÊNIO!</p>
    </div>
    <div v-else-if="numberOfCorrectAnswers >= Math.ceil(quiz.questions.length / 2) ">
      <p>Acertou a metade ein, muito bom!</p>
    </div>
    <div v-else-if="numberOfCorrectAnswers >= Math.ceil(quiz.questions.length /3) ">
      <p>Você acertou só uma, sei que pode fazer melhor!</p>
    </div>
    <div v-else-if="showResults && numberOfCorrectAnswers < quiz.questions.length">
      <p>Dessa vez você não acertou nenhuma questão, mas não desista tente novamente! </p>
    </div>
  </div>
  <div class="link">
    <RouterLink class="link2" to="/"><strong>Pagina Inicial</strong></RouterLink>
  </div>
</div>
</template>

<style scoped>
  .message {
    color: black;
    font-size: 20px;
    text-align: center;
    margin-bottom: 80px;
  }
  .link {
    font-size: 2em;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .link2 {
    color: black;
    text-decoration: none;
    }
    button {
    font-size: large;
    background-color: transparent;
    margin-left: 20px;
    border-radius: 15%;
    }
</style>