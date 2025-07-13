<template>

    <li class="todo-item">
        <span class="todo-text">{{ todo.text }}</span>
        <button @click="$emit('remove',todo.id)" class="remove-btn">Remove</button>
    </li>
</template>

<script>
import { def } from '@vue/shared';

export default {
    name: 'TodoItem',
    props: ['todo']
}
</script>