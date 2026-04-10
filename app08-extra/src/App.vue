<template>
  <div class="container">
    <h1>Velocidade Média</h1>

    <div class="formulario">
      <label>Digite o valor da distância:</label>
      <input type="number" v-model="distancia" />

      <label>Digite o valor do tempo</label>
      <input type="number" v-model="tempo" />

      <button @click="calcularVelocidadeMedia">Calcular Soma</button>

      <div class="resultado">
        <h2>Resultado: {{ velocidade_media }}</h2>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const distancia = ref < number > (0);
const tempo = ref < number > (0);
const velocidade_media = ref<number>(0);

function calcularVelocidadeMedia(): void {
  velocidade_media.value = distancia.value / tempo.value;
}
</script>

<style>
.container {
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
}

.formulario {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  gap: 10px;
}

input {
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 10px;
  background-color: #42b883;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 10px;
}

button:hover {
  background-color: #2f8f6f;
}

.resultado {
  margin-top: 20px;
  font-weight: bold;
}
</style>