import './styles.css';
import React from 'react';
import * as selectors from '../../reducers'
import * as appActions from '../../actions/appState'
import * as actions from '../../actions/babies'
import { connect } from 'react-redux';

const Baby = ({babies,onChange, onClick}) => (
    <div className="container">
        <div className="baby">
            <select onChange={e=>onChange(e.target.value)} className="select" id="B" name="babies">
                {babies.map(baby => (
                <option key={baby[Object.keys(baby)[0]]} value={baby[Object.keys(baby)[0]]}>{baby[Object.keys(baby)[1]]+" "+baby[Object.keys(baby)[2]]}</option> 
                ))}
            </select>
            <button className="button2" onClick={onClick}>
                {'+'}
            </button>
        </div>
        <div className="bar2"></div>
    </div>
)

export default connect(
    state => ({
        babies: selectors.getAllBabies(state)
    }),
    dispatch =>({
        onClick(){
            dispatch(appActions.change_app_state())
        },
        onChange(id){
            dispatch(actions.select_baby(id))
        }
    })
)(Baby)