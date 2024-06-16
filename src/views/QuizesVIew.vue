<script setup>
    import q from "../data/quizes.json";
    import {ref, watch, onMounted} from "vue";
    import Card from "../components/Card.vue";

    const quizes = ref(q)
    const search = ref("")
    
    const props = defineProps ({
      quiz: {
        type: Object,
        required: true
      },
      });
      
      const containeRef = ref(null);

      onMounted(() => {
      const container = containeRef.value;
      const text = container.innerText;
      const colors = ['#EC0F90','#0AAF8C', '#9AD70E', '#F49822', '#FE3A1D']
      container.innerHTML ="";

      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.className = 'colored-letter'
        span.style.color = colors[index % colors.length];
        container.appendChild(span);
      });
    });

    watch(search, () => {
      quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLocaleLowerCase()))
    });

   
</script>

<template>
        
          <body>
            <header>
              <h1 ref="containeRef">Em qual área você tem mais conhecimento ?</h1>
              <input v-model.trim="search" type="text" placeholder="Procurar..">
            </header>
            <div class="options-container">
              <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" @click="() => navigateToQuiz(quiz.id)">
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
  @import url('https://fonts.googleapis.com/css2?family=Freeman&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
    
    body {
    background-image: url('https://static.vecteezy.com/ti/vetor-gratis/p1/11005174-fundo-de-educacao-criativa-com-material-escolar-vetor.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    }

    header {
      margin-top: 200px;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    header h1 {
      margin-bottom: 60px;
      text-align: top;
      font-weight: bold;
      font-family: "Josefin Sans", sans-serif;
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