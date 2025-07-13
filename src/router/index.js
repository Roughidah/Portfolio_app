import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

import TodoPage from '../views/ToDoPage.vue'



const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/projects', component: Projects},
    {path: '/contact', component: Contact},
    {path: '/:pathMatch(.*)*', component: NotFound },
    { path: '/todo', component: TodoPage },

]

const router = createRouter({
  history: createWebHistory(),
  routes  
})

export default router