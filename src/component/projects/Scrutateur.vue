<template>
  <div>
    <h1>Scrutateur</h1>
  </div>
  <p>J’ai réalisé ce projet lors de mon stage de deuxième année dans l’entreprise Zurflüh-Feller.
    Il consiste à s’assurer du bon fonctionnement d’un processus qui automatise des actions dans l’ERP, appelé le scrutateur.
    <br>Un job Talend vérifie toutes les dix minutes que le scrutateur est toujours en fonctionnement. S’il s’arrête (par exemple parce qu’il y a trop de tâches à automatiser), mes collègues et moi recevons alors un e-mail afin de le relancer.</p>
  <div>
    <h2>Technologies utilisées</h2>
    <div class="card-container">
      <div class="card">
        <div class="section">
          <ul>
            <li>Talend</li>
            <li>SQL Server</li>
            <li>Java</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div>
    <img src="/public/talend.png" alt="">
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
  max-width: 500px;
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
