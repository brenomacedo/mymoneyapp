import React from 'react'

import { Router, Route, Redirect, hashHistory } from 'react-router'
import Dashboard from '../dashboard/dashboard'
import BillingCycles from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}></Route>
        <Route path='/billingCycles' component={BillingCycles}></Route>
        <Redirect from='*' to='/'/>
    </Router>
)