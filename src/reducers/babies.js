import { combineReducers } from 'redux';
import * as types from '../types/babies'

const byId = (state={},action) => {
    switch (action.type) {
        case types.baby_added:
            return {...state,[action.payload.id]:action.payloads}
        default:
            return state
    }
}

const order = (state=[],action) => {
    switch (action.type) {
        case types.baby_added:
            return [...state,action.payload.id]
        default:
            return state
    }
}

const selected = (state=null,action) =>{
    switch (action.type) {
        case types.baby_selected:
            return action.payload
        default:
            return state
    }
}

const babies = combineReducers({
    byId,
    order,
    selected
})

export default babies

export const getBaby = (state,id) => state[id]
export const getAllBabies = (state) => state.order.map(
    id=>getBaby(state,id)
    ).filter(baby=>baby!=null)
export const getSelectedBaby = identity;