import { App } from 'vue'
import { createState } from './create'
import { useState } from './useState'
import { patch } from './action'

const install = (app: App) => {
  console.log(app)
}

export default install;

export {
  install,
  createState,
  useState,
  patch
}
