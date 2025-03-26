import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import adminReducer from './adminReducer'

// Об'єднання ред'юсерів
const rootReducer = combineReducers({
  BasketAndLike: cartReducer,
  admin: adminReducer
})

export default rootReducer
