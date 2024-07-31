<script setup>
import { ref, watch, onMounted } from "vue";
import q from "../data/quizes.json";
import Card from "../components/Card.vue";

const quizes = ref(q);
const search = ref("");

const props = defineProps({
  quiz: {
    type: Object,
    required: true,
  },
});

const containeRef = ref(null);

watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLocaleLowerCase())
  );
});
</script>
<template>
  <body>
    <header>
      <h1 ref="containeRef">Em qual área você tem mais conhecimento ?</h1>
      <input v-model.trim="search" type="text" placeholder="Procurar.." />
    </header>
    <div class="options-container">
      <Card
        v-for="quiz in quizes"
        :key="quiz.id"
        :quiz="quiz"
        @click="() => navigateToQuiz(quiz.id)"
      >
      </Card>
      <!-- v-for="quiz in quizes" :key="quiz.id"
              <div class="card">
                <img :src="quiz.img" alt="">
                <div class="card-text">
                  <h2>{{quiz.name}}</h2>
                  <p>{{quiz.questions.length}}</p>
                </div>
              </div> -->
    </div>
  </body>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Freeman&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");

body {
  background-color: rgba(11, 189, 239, 0.748);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
}

header {
  margin: auto;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

header h1 {
  padding: 8px;
  margin-bottom: 60px;
  text-align: top;
  font-weight: bold;
  font-family: "Josefin Sans", sans-serif;
  border: 2px solid rgb(2, 5, 85);
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.549);
}

header input {
  margin-bottom: 70px;
  background-color: white;
  padding: 10px;
  border: 2px solid white;
  border-radius: 5px;
}
input:hover {
  border-color: rgb(210, 13, 187);
}
.options-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
}

/*CARD CONFIG*/
</style>
