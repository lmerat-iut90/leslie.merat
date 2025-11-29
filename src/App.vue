<script setup>
import NavBar from "@/component/NavBar.vue"
import About from "@/component/About.vue";
import Projects from "@/component/Projects.vue";
import Contact from "@/component/Contact.vue";
import Footer from "@/component/Footer.vue"

</script>

<template>
  <div id="body">
    <NavBar/>

    <section class="full-section">
      <About />
    </section>

    <section class="enter">
      <Projects />
    </section>

    <section class="full-section">
      <Contact />
    </section>

    <Footer />
  </div>
</template>


<style scoped>
 #body{
   background-color: #F4F6F7;
   font-family: Avenir, Helvetica, Arial, sans-serif;
   width: 100%;
   top: 0;
   left: 0;
 }
 .full-section {
   min-height: calc(100vh - 80px);
   padding-top: 100px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   top: 0;
   left: 0;
 }
 .enter{
   min-height: calc(100vh - 80px);
   padding-top: 100px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   top: 0;
   left: 0;
   background-color: white;
 }
 html {
   scroll-behavior: smooth;
 }

</style>
