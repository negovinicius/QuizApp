<script setup>
import { defineProps } from "vue";

const { questionStatus, barPercentage } = defineProps([
  "questionStatus",
  "barPercentage",
]);
</script>
<template>
  <header>
    <h4>Questão {{ questionStatus }}</h4>
    <div class="bar">
      <div class="completion" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header h4 {
  color: black;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.bar {
  width: 300px;
  height: 50px;
  border: 3px solid black;
}
.completion {
  height: 100%;
  width: 0%;
  background-color: black;
}
</style>
