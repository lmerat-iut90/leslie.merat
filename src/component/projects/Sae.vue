<template>
  <div>
    <h1>24h du Mans</h1>
  </div>
  <p>Le site 24h du Mans est un projet étudiant de groupe. L'objectif de ce projet était de créer une application web d'un événement au choix (ici les 24h du mans). Les exigences fonctionnelles comprennaient une page d'authentification avec différents niveaux d'accès, utilisateur, prestataire et administrateur, différents services et prestataires ainsi qu'une carte interactive (réalisé avec Leaflet).</p>
  <div>
    <h2>Technologies utilisées</h2>
    <div class="card-container">
      <div class="card">
        <div class="section">
          <h3>Frontend</h3>
          <ul>
            <li>VueJS</li>
            <li>Tailwind</li>
            <li>Leaflet</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="section">
          <h3>Backend</h3>
          <ul>
            <li>NodeJS</li>
            <li>Prisma</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div>
    <img src="/public/24h-du-man.png" alt="">
  </div>
  <div class="links">
    <a href="https://24h.chamallow.fr/fr" target="_blank">Voir le site</a><br>
    <a href="https://github.com/lynn2910/24hmans" target="_blank">Voir le GitHub</a>
  </div>


</template>

<script setup>
</script>

<style scoped>
p {
  padding-left: 20px;
  color: #1F618D;
  max-width: 900px;
  margin: auto;
}


h1 {
  padding-left: 10px;
  color: #212F3D;
  text-align: center;
}

h2 {
  text-align: center;
  color: #212F3D;
  margin-top: 20px;
}

img {
  width: 100%;
  max-width: 700px;
  height: auto;
  display: block;
  margin: 40px auto;
  border-radius: 10px;
}



.card-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}


.card {
  width: 300px;
  padding: 20px;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}


.section {
  margin-bottom: 15px;
}

.section h3 {
  font-size: 16px;
  margin-bottom: 8px;
  text-align: center;
  color: #212F3D;
}

.section ul {
  list-style: none;
  padding: 0;
  color: #1F618D;
}

.section li {
  padding: 6px 10px;
  margin-bottom: 6px;
  border-radius: 8px;
}
.links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.links a {
  color: #1F618D;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid #1F618D;
  padding: 8px 14px;
  border-radius: 8px;
  transition: 0.2s;
}

.links a:hover {
  background: #1F618D;
  color: white;
}



@media (max-width: 600px) {

  p {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
  }

  .card-container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
    max-width: 350px;
  }

  img {
    max-width: 90%;
  }
}

@media (max-width: 900px) {
  .card-container {
    gap: 15px;
  }

  .card {
    width: 45%;
    min-width: 260px;
  }
}


</style>
