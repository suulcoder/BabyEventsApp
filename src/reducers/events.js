import { combineReducers } from 'redux';
import * as types from '../types/events'

const byId = (state={},action) => {
    switch (action.type) {
        case types.event_added:
            return {...state,[action.payload.id]:action.payload}
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
        case types.event_deleted:
            return state.filter(id=>id!==action.payload)
        default:
            return state
    }
}

const events = combineReducers({
    byId,
    order,
})

export default events

export const getEvent = (state,id) => state.byId[id]
export const getAllEvents = (state) => state.order.map(
    id=>getEvent(state,id)
    ).filter(event=>event!=null)
export const getEventsbyBaby = (state,baby) => state.order.reverse().map(id => {
    const currEvent = getEvent(state,id)
    if(currEvent[Object.keys(currEvent)[4]]===baby){
        return currEvent
    }
    return null
    }).filter(event=>event!=null)