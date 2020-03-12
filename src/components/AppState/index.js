import { connect } from 'react-redux';
import React, { Fragment } from 'react'
import './styles.css'
import * as selectors from '../../reducers'
import NewBaby from '../NewBaby';
import Baby from '../Baby'
import Events from '../Events'
import AddEvent from '../AddEvent'
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class AppState extends React.Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        babiesIDs: PropTypes.array.isRequired,
    };

    render(){
        const{ location } = this.props;
        return(
            <Fragment>
                <Fragment>
                    <div className="header">
                        <div className="tittle">
                            <h1>
                                {'BABY EVENTS'}
                            </h1>
                        </div>
                        <div className="author">
                            <h2>
                                {'Made By: SuulCoder'}
                            </h2>
                        </div>
                    </div>
                    <div className="empty"></div>
                    <div className="bar"></div>
                </Fragment>
                {
                    (location.pathname==='/addBaby' || location.pathname==='/')  ? (
                        <NewBaby></NewBaby>
                    ):(
                        (location.pathname.split('/')[1]==='baby' && this.props.babiesIDs.includes(location.pathname.split('/')[2])) ? (
                        <Fragment>
                            <Baby></Baby>
                            <div className="content">
                                <AddEvent></AddEvent>
                                <Events></Events>
                            </div>
                        </Fragment>
                        ) : (
                            <h1>404 PAGE NOT FOUND</h1>
                        )
                    )
                }
            </Fragment>
        )
    }
}

export default withRouter(connect(
    state => {
        console.log(state)
        return ({
        babiesIDs: selectors.getBabaiesIDs(state)
    })},
    undefined
)(AppState))