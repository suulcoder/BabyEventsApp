import { combineReducers } from 'redux';
import * as types from '../types/events'

const byId = (state={},action) => {
    switch (action.type) {
        case types.event_added:
            return {...state,[action.payload.id]:action.payloads}
        case types.event_deleted:
            const currState = state
            delete currState[action.payload]
            return currState
        default:
            return state
    }
}

const order = (state=[],action) => {
    switch (action.type) {
        case types.event_added:
            return [...state,action.payload.id]
        case types.event_deleted
        default:
            return state
    }
}

const events = combineReducers({
    byId,
    order,
    selected
})

export default events

export const getEvent = (state,id) => state[id]
export const getAllEvents = (state) => state.order.map(
    id=>getBaby(state,id)
    ).filter(baby=>baby!=null)
export const getSelectedBaby = identity;