import { handleActions } from 'redux-actions'

const initialState = {
  width: 1024
}

export default handleActions({
  SET_SCREENWIDTH: {
    next (state, action) {
      return {
        width: action.payload
      }
    },
    throw (state, {payload}) {
      return initialState
    }
  }
}, initialState)
