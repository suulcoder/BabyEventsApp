import * as types from '../types/babies'

export const add_baby = (id,name,lastname) => ({
    type: types.baby_added,
    payload:{
        id,
        name,
        lastname
    }
})

export const select_baby = (id) => ({
    type: types.baby_selected,
    payload: id
})