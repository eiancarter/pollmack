import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

export const  axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL:'https://pollmack.herokuapp.com',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`
        }
    })
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props =>
        localStorage.getItem('token') ?
            (<Component {...props} />) : (<Redirect to='/' />)
    }/>
);