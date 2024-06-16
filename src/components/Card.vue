<script setup>
    import {defineProps, onMounted, ref} from "vue";
    import {useRouter} from "vue-router";

    
    const router = useRouter();
    
    const {quiz} = defineProps(['quiz']);

    const containerRef = ref(null);

    const navigateToQuiz = () => {
      router.push(`/quiz/${quiz.id}`)
    };

    onMounted(() => {
      const container = containerRef.value;
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
    
</script>

<template>
  <div class="cards-container">
    <div class="card" @click="navigateToQuiz">
        <img :src="quiz.img"  alt="">
        <div class="card-text" ref="containerRef">
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
      font-size: 2em;
      font-family: "Freeman", sans-serif;
    }

    .card {     
      width: 310px;
      overflow: hidden;
      border-radius: 2%;
      margin-bottom: 35px;
      margin-right: 20px;
      cursor: pointer;
      color: rgb(0, 0, 0);
      text-align: center;
      border: 2px solid;
    }
    .card:hover {
      border-color: rgb(210, 13, 187);
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

    .colored-letter {
      display: inline;
    }
</style>