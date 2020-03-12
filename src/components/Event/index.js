import './styles.css';
import React from 'react';
import * as selectors from '../../reducers'
import { connect } from 'react-redux';
import * as actions from '../../actions/events'


const Event = ({type,date,info,onClick}) => (
    <div className="event">
        <div className="date">
            <h3>{date}</h3>
            <button className="delete" onClick={onClick}>
                {'x'}
            </button>
        </div>
        <div className="mytype">
            <h3>type:  {type}</h3>
        </div>
        <div className="info">
            <h3>{info}</h3>
        </div>
    </div>
)

export default connect(
    (state, {id}) => ({
        baby: selectors.getSelectedBaby(state),
        id: selectors.getEvent(state,id)[Object.keys(selectors.getEvent(state,id))[0]],
        type: selectors.getEvent(state,id)[Object.keys(selectors.getEvent(state,id))[1]],
        date: selectors.getEvent(state,id)[Object.keys(selectors.getEvent(state,id))[2]],
        info: selectors.getEvent(state,id)[Object.keys(selectors.getEvent(state,id))[3]],
    }),
    (dispatch, {id})=>({
        onClick(){
            dispatch(actions.delete_event(id))
        }
    })
)(Event)