import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// const state = useSelector(state => state)

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    estad,
    ...rest
}) => {
    // here
    const estado = localStorage.getItem('estado')
    
        if (estado == 0) {
            window.location.reload()
        }


    if (estad > 2 || estado==0) {
        return (
            <div className="preloader">
                <img src="https://i.imgur.com/cWGLRFJ.png" alt="" />
            </div>
        )
    }

    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/auditas" />)

            )}

        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
