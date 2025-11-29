<script setup>
import { ref } from 'vue'
import App from '@/component/projects/App-zf.vue'
import Scrutateur from "@/component/projects/Scrutateur.vue";
import Sae from "@/component/projects/Sae.vue";

const page = ref('project')

function goToProject(){ page.value = 'project' }
function goToSAE(){ page.value = 'sae' }
function goToApp(){ page.value = 'app' }
function goToScrutateur(){ page.value = 'scrutateur' }
</script>

<template>
  <div id="projects">
    <div class="projects-wrapper">


      <template v-if="page === 'project'">
        <div class="projects-container">
          <h1 class="title">Mes projets</h1>

          <div class="cards">
            <div class="card">
              <h2>24h du Mans</h2>
              <p>Projet universitaire réalisé en équipe.</p>
              <button class="card-btn" @click="goToSAE">Voir plus</button>
            </div>

            <div class="card">
              <h2>App-ZF</h2>
              <p>Application développée en entreprise.</p>
              <button class="card-btn" @click="goToApp">Voir plus</button>
            </div>

            <div class="card">
              <h2>Scrutateur</h2>
              <p>Surveillance de l'activité d'un processus.</p>
              <button class="card-btn" @click="goToScrutateur">Voir plus</button>
            </div>
          </div>
        </div>
      </template>


      <template v-else-if="page === 'sae'">
        <button class="back-btn" @click="goToProject">Retour</button>
        <Sae />
      </template>

      <template v-else-if="page === 'app'">
        <button class="back-btn" @click="goToProject">Retour</button>
        <App />
      </template>

      <template v-else-if="page === 'scrutateur'">
        <button class="back-btn" @click="goToProject">Retour</button>
        <Scrutateur />
      </template>

    </div>
  </div>
</template>

<style scoped>
.projects-wrapper {
  max-width: 1100px;
  margin: auto;
  padding: 20px;
  font-family: "Inter", sans-serif;
  color: #2C3E50;
  background-color: white;
}

.title {
  text-align: center;
  color: #1F618D;
  font-size: 2.4rem;
  margin-bottom: 30px;
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.card {
  background-color: #212F3D;
  border-radius: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  width: 260px;
  padding: 25px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  animation: slideUp 0.7s ease forwards;
  opacity: 0;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
}

.card h2 {
  color: #F4F6F7;
  margin-bottom: 10px;
  font-size: 1.5em;
}

.card p {
  color: #D6DBDF;
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.5;
}

.card-btn,
.back-btn {
  background-color: #1F618D;
  color: #F4F6F7;
  padding: 10px 18px;
  border-radius: 22px;
  font-size: 0.95em;
  border: none;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

.card-btn:hover,
.back-btn:hover {
  background-color: #154360;
}

.back-btn {
  margin: 30px auto;
  display: block;
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}


@media (max-width: 600px) {
  .card {
    width: 90%;
  }
}
</style>
