import {
    FETCH_CANDIDATE_START,
    FETCH_CANDIDATE_SUCCESS,
    FETCH_CANDIDATE_FAILURE,
    ADD_CANDIDATE_START,
    ADD_CANDIDATE_SUCCESS,
    ADD_CANDIDATE_FAILURE,
    DELETE_CANDIDATE_START,
    DELETE_CANDIDATE_SUCCESS,
    DELETE_CANDIDATE_FAILURE,
    UPDATE_CANDIDATE_START,
    UPDATE_CANDIDATE_SUCCESS,
    UPDATE_CANDIDATE_FAILURE
} from '../actions';

const initialState = {
    candidates: [],
    error: '',
    isFetching: false,
};

function reducer(state = initialState, action) {
    switch(action.type) {
        // Fetching list of candidates
        case FETCH_CANDIDATE_START:
            return {
                ...state,
                error: '',
                isFetching: true,
            };
        case FETCH_CANDIDATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                candidates: [...action.payload],
            };
        case FETCH_CANDIDATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        // Adding a new candidate
        case ADD_CANDIDATE_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            };
        case ADD_CANDIDATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                candidates: [...action.payload],
                error: '',
            };
        case ADD_CANDIDATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        // Deleting a candidate
        case DELETE_CANDIDATE_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            };
        case DELETE_CANDIDATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                candidates: [...action.payload],
                error: '',
            };
        case DELETE_CANDIDATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        // Updating candidate information
        case UPDATE_CANDIDATE_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            };
        case UPDATE_CANDIDATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                candidates: [...action.payload],
                error: '',
            };
        case UPDATE_CANDIDATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
