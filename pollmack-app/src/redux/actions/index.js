// import { axiosWithAuth } from '../../utils';
import axios from 'axios';

export const AUTHORIZING = 'AUTHORIZING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
//fetch candidates
export const FETCH_CANDIDATE_START = 'FETCH_CANDIDATE_START';
export const FETCH_CANDIDATE_SUCCESS = 'FETCH_CANDIDATE_SUCCESS';
export const FETCH_CANDIDATE_FAILURE = 'FETCH_CANDIDATE_FAILURE';
//add candidates
export const ADD_CANDIDATE_START = 'ADD_CANDIDATE_START';
export const ADD_CANDIDATE_SUCCESS = 'ADD_CANDIDATE_SUCCESS';
export const ADD_CANDIDATE_FAILURE = 'ADD_CANDIDATE_FAILURE';
//delete candidates
export const DELETE_CANDIDATE_START = 'DELETE_CANDIDATE_START';
export const DELETE_CANDIDATE_SUCCESS = 'DELETE_CANDIDATE_SUCCESS';
export const DELETE_CANDIDATE_FAILURE = 'DELETE_CANDIDATE_FAILURE';
//update candidates
export const UPDATE_CANDIDATE_START = 'UPDATE_CANDIDATE_START';
export const UPDATE_CANDIDATE_SUCCESS = 'UPDATE_CANDIDATE_SUCCESS';
export const UPDATE_CANDIDATE_FAILURE = 'UPDATE_CANDIDATE_FAILURE';


export const getCandidates = () => dispatch => {
    dispatch({ type: FETCH_CANDIDATE_START });
    //axios with auth?
    axios
        .get('http://pollmack.herokuapp.com/api/candidates')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_CANDIDATE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_CANDIDATE_FAILURE, payload: err.response })
        })
};

export const addCandidate = candidate => {
    return dispatch => {
        dispatch({ type: ADD_CANDIDATE_START });
        axios
            .post(`http://pollmack.herokuapp.com/api/candidates`, candidate)
            .then(res => {
                dispatch({ type: ADD_CANDIDATE_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: ADD_CANDIDATE_FAILURE, payload: err })
            })
    };
};

export const deleteCandidate = candidate => {
    return dispatch => {
        dispatch({ type: DELETE_CANDIDATE_START });
        axios
            .delete(`http://pollmack.herokuapp.com/api/candidates/${candidate.id}`)
            .then(res => dispatch({ type: DELETE_CANDIDATE_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: DELETE_CANDIDATE_FAILURE, payload: err }));
    };
};

export const updateCandidate = candidate => {
    return dispatch => {
        dispatch({ type: UPDATE_CANDIDATE_START });
        axios
            .put(`http://pollmack.herokuapp.com/api/candidates/${candidate.id}`, candidate)
            .then(res => dispatch({ type: UPDATE_CANDIDATE_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: UPDATE_CANDIDATE_FAILURE, payload: err }));
    };
};
