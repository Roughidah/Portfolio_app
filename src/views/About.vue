<script setup>
import { ref } from 'vue';

const activeInterest = ref('');

const interests = [
  { name: 'Sewing', gif: 'https://media.tenor.com/ZDiB4QpY_OIAAAAM/sewing-sewing-machine.gif' },
  { name: 'Swimming', gif: 'https://media.tenor.com/NoEDamB5vREAAAAM/david-hasselhoff.gif' },
  { name: 'Reading manhwa', gif: 'https://media.tenor.com/sRpUJwQkMaIAAAAM/monkey-scrolling.gif' },
  { name: 'Casual Gaming', gif: 'https://media.tenor.com/l-iCvGI-ynYAAAAM/playing-video-games-little-brother.gif' }
];
</script>


<template>
  <div>
    <h1>About Raf 💁‍♀️</h1>
    <p>
      I'm a student learning web development, and I'm excited about building
      modern websites!
    </p>

    <h2>What I'm Learning:</h2>
    <ul>
      <li>HTML & CSS for structure and styling</li>
      <li>JavaScript for making websites interactive</li>
      <li>Vue.js for building dynamic applications</li>
      <li>Vue Router for navigation (like this website!)</li>
    </ul>

    <h2>My interests (Click them!):</h2>
    <ul>
      <li v-for="interest in interests" :key="interest.name" @click="activeInterest = interest.gif"
        style="cursor: pointer; margin-bottom: 10px;" class="interest-item" >
        {{ interest.name }}
      </li>
    </ul>

    <div v-if="activeInterest" class="highlight-box">
      <img :src="activeInterest" alt="Interest GIF" style="max-width: 100%; border-radius: 5px;" />
    </div>


    <div class="highlight-box">
      <p>
        <strong>Fun fact:</strong> This entire website is now a proper Vue 3 +
        Vite application with separate components!
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
