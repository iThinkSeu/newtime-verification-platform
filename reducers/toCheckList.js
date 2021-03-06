import { REQUEST_TO_CHECK_LIST, RECIVE_TO_CHECK_LIST } from '../actions'

export function toCheckList(state = {
  isWaiting: false,
  list: []
}, action) {
  switch (action.type) {
    case REQUEST_TO_CHECK_LIST:
      return Object.assign({}, state, {
        isWaiting: true
      })
    case RECIVE_TO_CHECK_LIST:
      return Object.assign({}, state, {
        isWaiting: false,
        list: action.data
      })
    default:
      return state
  }
}
