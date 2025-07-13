<script setup>
import { ref, computed } from 'vue'; 

// Reactive data using Vue 3 Composition API
const name = ref('');
const message = ref('');
const sent = ref(false);


// Computed property to check if form is valid
const isFormValid = computed(() => {
  return name.value.trim() !== '' && message.value.trim() !== '';
});


// Methods
function sendMessage() {
  alert(`Hi ${name.value}, your message "${message.value}" is received`);

  console.log('Message from:', name.value, '- Message:', message.value);
  sent.value = true;
  name.value = '';
  message.value = '';

  setTimeout(() => {
    sent.value = false;
  }, 3000);
}

</script>

<template>
  <div>
    <h1>Get in Touch 📧</h1>
    <p>I'd love to hear from you! Here's how you can reach me:</p>

    <div class="highlight-box">
      <p><strong>Email:</strong> student@example.com</p>
      <p><strong>GitHub:</strong> github.com/mystudent</p>
    </div>

    <h2>Send me a message:</h2>
    <form @submit.prevent="sendMessage">
      <p>
        <label>Your Name:</label><br />
        <input type="text" v-model="name" style="width: 100%; padding: 8px; margin-top: 5px" placeholder="Type your name here.." />
      </p>
      <p>
        <label>Your Message:</label><br />
        <textarea v-model="message" style="width: 100%; height: 100px; padding: 8px; margin-top: 5px" placeholder="Type your message here..">
        </textarea>
      </p>
      <button type="submit" :disabled="!isFormValid" :style="{
        background: '#4caf50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        opacity: isFormValid ? 1 : 0.6,
        cursor: isFormValid ? 'pointer' : 'not-allowed'
      }">
        Send Message
      </button>
    </form>

    <div v-if="sent" class="highlight-box" style="margin-top: 20px">
      <p>
        ✅ Thanks for your message! (This is just a demo, so it wasn't actually
        sent.)
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
