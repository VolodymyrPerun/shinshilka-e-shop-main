import { TOGGLE_TO_PRODUCT } from '../actions/types'

const initialState = {
  product: null,
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TO_PRODUCT:

      return {
        product: action.item,
      }

    default:
      return state
  }
}
export default productReducer
