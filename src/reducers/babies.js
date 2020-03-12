import { combineReducers } from 'redux';
import * as types from '../types/babies'

const byId = (state={},action) => {
    switch (action.type) {
        case types.baby_added:
            return {...state,[action.payload.id]:action.payload}
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

const selected = (state=0,action) =>{
    switch (action.type) {
        case types.baby_selected:
            return action.payload
        case types.baby_added:
            return action.payload.id
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

export const getBaby = (state,id) => state.byId[id]
export const getAllBabies = (state) => state.order.reverse().map(
    id=>getBaby(state,id)
    ).filter(baby=>baby!=null)
export const getSelectedBaby = state => state.selected;
export const getBabiesIDs = (state) => state.order