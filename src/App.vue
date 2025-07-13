<script setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';


const isDark = ref(false);


// Watch and apply theme class to body
watch(isDark, (newVal) => {
   document.body.className = newVal ? 'dark-theme' : 'light-theme';
});


</script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/">🏠Home</RouterLink>
      <RouterLink to="/about">👋About</RouterLink>
      <RouterLink to="/projects">💻Projects</RouterLink>
      <RouterLink to="/contact">📧Contact</RouterLink>

      <!-- Theme Toggle Button -->
      <button class="theme-button" @click="isDark = !isDark">
        {{ isDark ? '🌙 Dark' : '☀️ Light' }}
      </button>

    </nav>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped></style>