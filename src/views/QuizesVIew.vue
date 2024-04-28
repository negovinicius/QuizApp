<script setup>
    import q from "../data/quizes.json";
    import {ref, watch} from "vue";
    import Card from "../components/Card.vue";

    const quizes = ref(q)
    const search = ref("")

    watch(search, () => {
      quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLocaleLowerCase()))
    })
</script>

<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz">

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
  </div>
</template>


<style scoped>


    header {
      margin-bottom: 10px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    header h1 {
      font-weight: bold;
      margin-bottom: 40px;
      color: blueviolet;
    }

    header input {
      border: none;
      background-color: rgba(137, 43, 226, 0.26);;
      padding: 10px;
      border-radius: 5px;
      color: blueviolet;
    }
    
    .options-container {
      display: flex;
      flex-wrap: wrap;
      margin-top: 40px;
    }

    /*CARD CONFIG*/ 
</style>