<template>
  <div>
    <h1>App-zf</h1>
  </div>
  <div>
    <p>Ce projet a été développé dans le cadre de mon alternance chez Zurflüh-Feller. Il s'agit d'un applicatif interne dont l’objectif est d’importer des fichiers Excel dans des tables existantes de la base de données de l'entreprise.
      <br>Les fonctionnalités implémenté sont une page d'authentification, une possibilité de créer, modifier ou supprimer un utilisateur mais aussi d'avoir un historique des actions réalisées.</p>
  </div>
  <div>
    <h2>Technologies utilisées</h2>
    <div class="card-container">
      <div class="card">
        <div class="section">
          <h3>Frontend</h3>
          <ul>
            <li>VueJS</li>
            <li>CSS</li>
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
    <img src="/public/app-zf.png" alt="">
  </div>
  <div><p>Ce projet est encore en réalisation. </p></div>
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
