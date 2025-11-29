<script setup>
</script>

<template>
  <div id="about">
    <div class="about-container">
      <h1 class="title">À propos</h1>

      <div class="about-content">
        <div class="text-section">
          <h2 class="subtitle">Enchantée !</h2>

          <p>
            Je m'appelle Leslie MERAT, j'ai 19 ans, et je suis actuellement alternante à l'IUT de Belfort-Montbéliard. <br>
            Je suis développeuse full-stack en devenir et passionnée par la programmation. <br>
            J’aime particulièrement le développement web et la gestion de base de données. <br>
            Mes loisirs sont principalement des activités créatives et manuelles. Je reste tout de même informée des nouvelles technologies en faisant de la veille informationnelle.
          </p>
        </div>

        <div class="image-section">
          <img src="/Photo.jpg" alt="Photo de profil">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.about-container {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  font-family: "Inter", sans-serif;
  color: #2C3E50;
}

.title {
  font-size: 2.4rem;
  color: #1F618D;
  margin-bottom: 10px;
  text-align: center;
}

.subtitle {
  font-size: 1.8rem;
  color: #212F3D;
  margin-bottom: 15px;
  text-align: left;
}

.about-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.text-section {
  flex: 1;
  min-width: 280px;
}

p {
  line-height: 1.6;
  font-size: 1.1rem;
  color: #34495E;
  margin-top: 10px;
}

.image-section {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 250px;
}

img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #1F618D;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

@media(max-width: 600px) {
  .about-content {
    flex-direction: column-reverse;
    text-align: center;
  }

  .subtitle {
    text-align: center;
  }

  p {
    text-align: center;
  }
}
</style>
