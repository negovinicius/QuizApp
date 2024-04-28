<script setup>
    import {defineProps} from "vue";
    import {useRouter} from "vue-router";

    const router = useRouter()

    const {quiz} = defineProps(['quiz'])

    const navigateToQuiz = () => {
      router.push(`/quiz/${quiz.id}`)
    }
</script>

<template>
  <div class="cards-container">
    <div class="card" @click="navigateToQuiz">
        <img :src="quiz.img"  alt="">
        <div class="card-text">
            <h2>{{quiz.name}}</h2>
        </div>
    </div>
</div>
</template>


<style scoped>

    .cards-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: 0px 0px 2px 10px;
      color: blueviolet;
    }

    .card {
      width: 310px;
      overflow: hidden;
      border-radius: 2%;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.166);
      margin-bottom: 35px;
      margin-right: 20px;
      cursor: pointer;
    }
    .card img {
      width: 100%;
      height: 190px;
      margin: 0;
    }

    .card .cardtext {
      padding: 0px;
    }

    .card .cardtext h2 {
      font-weight: bold;
    }

</style>