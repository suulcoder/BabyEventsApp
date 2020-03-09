import { connect } from 'react-redux';
import React, { Fragment } from 'react'
import './styles.css'
import * as selectors from '../../reducers'
import NewBaby from '../NewBaby';
import Baby from '../Baby'
import Events from '../Events'
import AddEvent from '../AddEvent'

const AppState = ({app}) => (
    <Fragment>
        {
            app ? (
                <NewBaby></NewBaby>
            ):(
                <Fragment>
                    <Baby></Baby>
                    <div className="content">
                        <AddEvent></AddEvent>
                        <Events></Events>
                    </div>
                </Fragment>
            )
        }
    </Fragment>
)

export default connect(
    (state) => {
        console.log(state)
        return ({app: selectors.getAppState(state)})},
    undefined
)(AppState)