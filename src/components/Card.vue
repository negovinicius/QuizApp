<script setup>
import { defineProps, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const { quiz } = defineProps(["quiz"]);

const containerRef = ref(null);

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
};
</script>

<template>
  <div class="cards-container">
    <div class="card" @click="navigateToQuiz">
      <img :src="quiz.img" alt="" />
      <div ref="containerRef">
        <h2>{{ quiz.name }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  width: 312px;
  height: 290px;
  justify-content: center;
  align-items: center;
  margin: 12px;
  font-size: 20px;
  font-family: "Freeman", sans-serif;
  background-color: rgba(110, 180, 255, 0.271);
}

.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  cursor: pointer;
  text-align: center;
  border: 3px solid;
}
.card:hover {
  border-color: rgb(47, 40, 250);
}
.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}
</style>
