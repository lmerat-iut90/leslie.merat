<script setup>
import Form from "@/component/Form.vue";

function downloadPdf() {
  const link = document.createElement("a");
  link.href = "/CV.pdf";
  link.download = "CV.pdf";
  link.click();
}
</script>

<template>
  <div id="contact">
    <div class="contact-wrapper">
      <h1 class="title">Contact</h1>

      <h2 class="subtitle">N'hésitez pas à m'envoyer un message !</h2>

      <div class="links">
        <a href="https://github.com/lmerat-iut90" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/leslie-merat-181174328/" target="_blank">LinkedIn</a>
      </div>

      <div>
        <Form />
      </div>

      <button class="cv-btn" @click="downloadPdf">
        Télécharger mon CV
      </button>
    </div>
  </div>
</template>

<style scoped>
/* --- Wrapper --- */
.contact-wrapper {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  text-align: center;
  font-family: "Inter", sans-serif;
}

/* --- Titre --- */
.title {
  font-size: 2.3rem;
  color: #1F618D;
  margin-bottom: 20px;
}

/* --- Sous-titre --- */
.subtitle {
  color: #212F3D;
  font-size: 1.4rem;
  margin-bottom: 30px;
}

/* --- Liens réseaux --- */
.links {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.links a {
  color: #1F618D;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid #1F618D;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1.05rem;
  transition: 0.25s ease;
  box-shadow: 0 3px 10px rgba(0,0,0,0.07);
}

.links a:hover {
  background-color: #1F618D;
  color: #F4F6F7;
  transform: translateY(-4px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.12);
}

/* --- Bouton CV --- */
.cv-btn {
  background-color: #1F618D;
  color: #F4F6F7;
  padding: 12px 22px;
  border-radius: 25px;
  font-size: 1.05rem;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.25s ease, transform 0.25s ease;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.cv-btn:hover {
  background-color: #154360;
  transform: translateY(-3px);
}

/* --- Responsive Mobile --- */
@media (max-width: 600px) {
  .title {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1.2rem;
  }
  .links a {
    width: 80%;
    text-align: center;
  }
}
</style>
