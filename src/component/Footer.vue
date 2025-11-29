<template>
  <footer class="footer">
    <p>© 2025 — Leslie MERAT</p>
    <p>Développé avec : VueJS / Vite / CSS</p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f5c89f;
  color: #4B2E2E;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 12px 12px 0 0;
  margin-top: 40px;
  box-shadow: 0 -2px 6px rgba(0,0,0,0.1);
}

.footer p {
  margin: 0;
  font-size: 1rem;
  transition: opacity 0.3s ease;
}

.footer p:hover {
  opacity: 0.7;
}


@media (min-width: 700px) {
  .footer {
    flex-direction: row;
    gap: 40px;
    padding: 20px 30px;
  }
}
</style>
