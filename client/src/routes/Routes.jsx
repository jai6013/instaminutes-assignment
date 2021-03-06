import React from 'react'
import {Route} from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Room from '../Components/Room'
import UserForm from '../Components/UserForm'

const routes = [
    {
        path: "/",
        component: <UserForm />,
        isExact: true,
    },
    {
        path: "/room",
        component: <Room/>,
        isExact: true,
    },
]

const Routes = () => {
    return (
        <div>
            <Switch>
            {
                routes.map(item=><Route key={item.path} exact={item.isExact} path={item.path}> {item.component}</Route>)
            }
            </Switch>
        </div>
    )
}

export default Routes
