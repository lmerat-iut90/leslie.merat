<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">LM</div>

      <!-- Menu hamburger -->
      <div class="burger" @click="toggleMenu">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </div>

      <ul class="nav-links" :class="{ open: isOpen }">
        <li><a href="#about" class="nav-link">À propos</a></li>
        <li><a href="#projects" class="nav-link">Projets</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
/* ---------- NAVBAR ---------- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #f5c89f;
  padding: 0.7rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 1000;
}

/* ---------- STRUCTURE ---------- */
.nav-container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ---------- LOGO ---------- */
.logo {
  font-size: 1.4rem;
  font-weight: bold;
  color: #4B2E2E;
}

/* ---------- LINKS ---------- */
.nav-links {
  display: flex;
  align-items: center;
  gap: 35px;
  list-style: none;
}

.nav-link {
  color: #4B2E2E;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s ease;
  position: relative;
}

/* Soulignement animé */
.nav-link::after {
  content: "";
  position: absolute;
  width: 0%;
  left: 0;
  bottom: -3px;
  height: 2px;
  background: #212F3D;
  transition: 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* ---------- BURGER MENU ---------- */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.burger span {
  width: 28px;
  height: 3px;
  background: #4B2E2E;
  transition: 0.3s ease;
  border-radius: 2px;
}

/* Animation burger */
.burger span.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* ---------- RESPONSIVE MOBILE ---------- */
@media (max-width: 800px) {
  .burger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    background: #f5c89f;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    padding: 20px 0;
    transform: translateY(-300px);
    opacity: 0;
    transition: 0.3s ease;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
