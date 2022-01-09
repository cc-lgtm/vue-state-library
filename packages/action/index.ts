import { createState } from '../create'

const state = {
  count: 0
}
const Count = createState(state)
console.log(Count.count)

export type Action = (state: {[key: string]: any}) => unknown
export const patch = function(action: Action) {
  return function() {
    action.call(Count, state)
    console.log(Count.count)
  }
}
