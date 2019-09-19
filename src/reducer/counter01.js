const initialState = {
    count:0,
} 
const reducer = (state = initialState,action) => {
  if(action.type == 'INCREMENT') {
      state = { ...state, count:state.count + 1 }
      return state
  }
  if(action.type == 'DECREMENT') {
      state = { ...state, count:state.count - 1 }
      return state
  }
  if(action.type == 'RESET') {
      state = { ...state, count: 0 }
      return state
  }
  return state
}

export default reducer