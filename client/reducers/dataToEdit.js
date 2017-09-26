function dataReducers (state ={}, action){
  switch (action.type) {
    case 'EDIT_DATA':
      return {...action.data}
    case 'EDIT_DATA_ID':
        return {...action.data}
      default:
      return state
  }
}

export default dataReducers
