<template>

    <li class="todo-item">
        <span class="todo-text">{{ ToDo.text }}</span>
        <button @click="$emit('remove',ToDo.id)" class="remove-btn">Remove</button>
    </li>
</template>

<script>
import { def } from '@vue/shared';

export default {
    name: 'TodoItem',
    props: ['todo']
}
</script>