import { reactive, readonly } from 'vue'

export type State = {[key: string] :any}
export const createState = (state: State) => {
  const STATE = readonly(reactive<State>(state))
  return STATE;
}
