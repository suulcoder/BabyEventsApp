import { v4 as uuidv4 } from 'uuid';
import * as types from '../types/babies'

export const add_baby = (name,lastname) => ({
    type: types.baby_added,
    payload:{
        id: uuidv4(),
        name,
        lastname
    }
})

export const select_baby = (id) => ({
    type: types.baby_selected,
    payload: id
})