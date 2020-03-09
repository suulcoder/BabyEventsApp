import { v4 as uuidv4 } from 'uuid';
import * as types from '../types/events'

export const add_event = (baby,eventType,datetime,info) => ({
    type: types.event_added,
    payload:{
        id: uuidv4(),
        eventType,
        datetime,
        info,
        baby,
        }
})

export const delete_event = (id) => ({
    type: types.event_deleted,
    payload: id
})