import React,{Fragment} from 'react';
import * as selectors from '../../reducers';
import {connect} from 'react-redux';
import './styles.css';
import Event from '../Event'

const Events = ({events}) => (
    <Fragment>
        <div className="eventsTittle">
            {(events.length===0)?(
                <h3>NO EVENTS AVAILABLE</h3>
            ):(
                <h3>EVENTS:</h3>
            )}
            
        </div>
        <div className="events">
        <div className="eventContainer">
            {events.map(
                event => (
                    <Event key={event} id={event}>
                    </Event>
                )
        )}
        </div>
    </div>
    </Fragment>
)

export default connect(
    (state) => ({
        events:selectors.getEventsbyBaby(state,selectors.getSelectedBaby(state)).map(event=>{
            console.log(Object.keys(event)[0])
            return event[Object.keys(event)[0]]
        })
    }), 
    undefined
)(Events)