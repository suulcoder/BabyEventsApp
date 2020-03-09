import { connect } from 'react-redux';
import React, { useState } from 'react';
import * as selectors from '../../reducers'
import * as actions from '../../actions/events'
import './styles.css';

const AddEvent = ({id,name,onSubmit,types}) => {
    const [info,changeInfo] = useState('')
    const [type,changeType] = useState('')
    return(
        <div className="addEvent">
            <h3>ADD AN EVENT FOR:   {name}</h3>
            <div className="form">
                <div className="typeContainer">
                    <h3>Type:</h3>
                    <select onChange={e=>changeType(e.target.value)} value={type} className="type" id="B" name="events">
                            {types.map(type => (
                            <option key={type[0]} value={type[1]}>{type[1]}</option> 
                            ))}
                        </select>
                </div>            
                <textarea
                    className="info"
                    type="text"
                    placeholder="Write a description of the event"
                    value={info}
                    onChange={e => changeInfo(e.target.value)}
                />
                <button className="button3" type="submit" onClick={
                    () => onSubmit(id,type,info)
                }>
                    {'+'}
                </button>
            </div>   
        </div>
        
    )
}

export default connect(
    state=>({
        id: selectors.getBaby(state,selectors.getSelectedBaby(state))[Object.keys(selectors.getBaby(state,selectors.getSelectedBaby(state)))[0]],
        name: selectors.getBaby(state,selectors.getSelectedBaby(state))[Object.keys(selectors.getBaby(state,selectors.getSelectedBaby(state)))[1]],
        types: [[0,'poop'],[1,'pee'],[2,'food'],[3,'sleep']]
    }),
    dispatch=>({
        onSubmit(id,type,info){
            if(type===""){
                type='poop'
            }
            const date = new Date()
            dispatch(actions.add_event(id,type,date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear(),info))
        }
    })
)(AddEvent)
