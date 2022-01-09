import { createApp } from 'vue'
import App from './App.vue'
import Store, { createState, patch, useState } from '../packages'

createApp(App).use(Store).mount('#app')

const AddCount = patch(function(state) {
  state.count++
})
useState(AddCount)
