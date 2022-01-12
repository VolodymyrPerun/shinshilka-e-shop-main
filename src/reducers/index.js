import { combineReducers } from 'redux'
//
import productReducer from './productReducer'
import wishlistReducer from './wishlistReducer'

export default combineReducers({
  product: productReducer,
  wishlist: wishlistReducer,
})
