<template>
  <section id="contact" class="contact-section">


    <form
      :action="formEndpoint"
      method="POST"
      class="contact-form"
    >

      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" id="name" name="name" placeholder="Votre nom" required />
      </div>


      <div class="form-group">
        <label for="email">Adresse email</label>
        <input type="email" id="email" name="email" placeholder="exemple@mail.com" required />
      </div>


      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Votre message..." required></textarea>
      </div>


      <button type="submit" class="submit-btn">Envoyer</button>
    </form>
  </section>
</template>

<script setup>
const formEndpoint = "https://formspree.io/f/xpwgvlqp";
</script>

<style scoped>

.contact-section {
  padding: 100px 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.title {
  font-size: 2rem;
  color: #212F3D;
  margin-bottom: 10px;
}

.subtitle {
  color: #566573;
  margin-bottom: 40px;
}


.contact-form {
  background: #fefaf7;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 20px;
}


.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  color: #4B2E2E;
  font-weight: bold;
  margin-bottom: 6px;
}

input,
textarea {
  border: 2px solid #f5c89f;
  padding: 10px 12px;
  border-radius: 10px;
  background: #fff;
  font-size: 1rem;
  color: #4B2E2E;
  transition: 0.2s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #1F618D;
  box-shadow: 0 0 4px rgba(31, 97, 141, 0.3);
}


.submit-btn {
  background: #1F618D;
  color: white;
  padding: 12px 20px;
  font-size: 1.1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s ease;
}

.submit-btn:hover {
  background: #154360;
}


@media (max-width: 600px) {
  .contact-form {
    padding: 20px;
  }

  .title {
    font-size: 1.8rem;
  }
}
</style>
