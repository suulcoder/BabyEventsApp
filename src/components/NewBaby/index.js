import './styles.css';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import * as actions from '../../actions/babies'
import * as appActions from '../../actions/appState'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { v4 as uuidv4 } from 'uuid';

const NewBaby = ({id,onSubmit}) => {
    const [name,changeName] = useState('')
    const [lastname,changeLastname] = useState('')
    return(
        <div className="appState">
            <div className="addBaby">
                <h3>ADD A BABY</h3>
                <input
                    className="myInput"
                    type="text"
                    placeholder="Write your baby's name"
                    value={name}
                    onChange={e => changeName(e.target.value)}
                />
                <input
                    className="myInput"
                    type="text"
                    placeholder="Write your baby's lastname"
                    value={lastname}
                    onChange={e=>changeLastname(e.target.value)}
                />
                <Link to={(name!==''&&lastname!=='')?'/baby/'+id:''} onClick={() => onSubmit(id,name,lastname)}>
                    <button className="button" type="submit" onClick={
                        () => onSubmit(id,name,lastname)
                    }>
                        {'+'}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        id: uuidv4()
    }),
    dispatch => ({
        onSubmit(id,name,lastname){
            if(name!==''&&lastname!==''){
                dispatch(appActions.change_app_state())
                dispatch(actions.add_baby(id,name,lastname,[]))
            }
            else{
                alert("FILL ALL THE FIELDS")
            }
            
        }
    })
)(NewBaby)