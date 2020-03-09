import * as types from '../types/appState'

const appState = (state=true,action) => {
    switch (action.type) {
        case types.appstate_changed:
            return !state
        default:
            return state
    }
}

export default appState

export const getAppState = state => state;