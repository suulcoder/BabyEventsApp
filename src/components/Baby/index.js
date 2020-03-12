import './styles.css';
import React from 'react';
import * as selectors from '../../reducers'
import * as appActions from '../../actions/appState'
import * as actions from '../../actions/babies'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './styles.css'
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class Baby extends React.Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    render(){
        const{ history } = this.props;
        return(
            <div className="container">
                <div className="baby">
                    <select onChange={e=>{
                        this.props.history.push('/baby/'+e.target.value)
                        return this.props.onChange(e.target.value)}} className="select" id="B" name="babies">
                        {this.props.babies.map(baby => (
                            <option key={baby[Object.keys(baby)[0]]} value={baby[Object.keys(baby)[0]]}>{baby[Object.keys(baby)[1]]+" "+baby[Object.keys(baby)[2]]}</option>
                        ))}
                    </select>
                    <Link to={'/addBaby'} onClick={this.props.onClick}>
                        <button className="button2" onClick={this.props.onClick}>
                            {'+'}
                        </button>        
                    </Link>
                </div>
                <div className="bar2"></div>
            </div>
        )
    }
}

export default withRouter(connect(
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
)(Baby))