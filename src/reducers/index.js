import { combineReducers } from 'redux';

import appState,* as appStateSelectors from './appState'
import babies,* as babySelectors from './babies'
import events, * as eventSelectors from './events'

const reducer = combineReducers({
    appState,
    babies,
    events
})

export default reducer

export const getBaby = (state,id) => babySelectors.getBaby(state.babies,id)
export const getAllBabies = state => babySelectors.getAllBabies(state.babies)
export const getSelectedBaby = (state) => babySelectors.getSelectedBaby(state.babies)

export const getEvent = (state,id) => eventSelectors.getEvent(state.events,id)
export const getAllEvents = state => eventSelectors.getAllEvents(state.events)
export const getEventsbyBaby = (state,baby) => eventSelectors.getEventsbyBaby(state.events,baby)

export const getAppState = (state) => appStateSelectors.getAppState(state.appState)