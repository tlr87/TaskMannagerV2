import {combineReducers} from 'redux'

import dataReducers from './dataReducers'
import dataToEdit from './dataToEdit'

export default combineReducers({
  data:dataReducers,
  dataToEdit

})
