import  { LOADING, } from '../actions/types'
const INITIAL_STATE = {
    todos:[]
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                todos:[...state.todos, {title: action.payload.title}]
            }
        default:
            return INITIAL_STATE
    }
}