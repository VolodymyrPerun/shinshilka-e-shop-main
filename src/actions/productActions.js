import { TOGGLE_TO_PRODUCT } from './types'

export const toggleProduct = item => dispatch => {
    dispatch({
        type: TOGGLE_TO_PRODUCT,
        item,
    })
}
