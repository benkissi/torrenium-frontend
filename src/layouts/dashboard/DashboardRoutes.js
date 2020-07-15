import React from 'react'
import { Route } from 'react-router-dom'

import DashboardLayout from './DashboardLayout'

const DashboardRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <DashboardLayout>
                <Component {...props} />
            </DashboardLayout>
        )} />
    )
}

export default DashboardRoutes