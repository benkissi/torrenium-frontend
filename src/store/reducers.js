import {FORM_TYPES, APP_TYPES} from './types'

export const formReducer = (state, action) => {
    console.log('action', action)
    switch(action.type){
        case FORM_TYPES.UPDATE_INPUTS: 
            return {
                ...state,
                [action.payload.key]: action.payload.value
            }
        case FORM_TYPES.SET_INPUT_ERROR:
            return {
                ...state,
                [action.payload.key]: action.payload.status,
                [action.payload.key + 'Message'] : action.payload[action.payload.key + 'Message'],
                isError: action.payload.isError
            }
        case FORM_TYPES.SET_LOGIN:
            return {
                ...state,
                loggedIn: action.payload
            }
        case FORM_TYPES.SET_AUTH_TYPE:
            return {
                ...state,
                type: action.payload
            }
        case FORM_TYPES.SET_FORM_ERROR_STATUS:
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state
    }
}

export const appReducer = (state, action) => {
    switch (action.type){
        case APP_TYPES.SET_LOGIN:
            return {
                ...state,
                user: action.payload.data,
                loggedIn: action.payload.status
            }
        case APP_TYPES.SET_MATCHING_JOBS:
            return {
                ...state,
                matchingJobs: {
                    bio: action.payload.bio,
                    jobs: action.payload.jobs
                }
            }
        case APP_TYPES.SET_LOADING_STATE: 
            return {
                ...state,
                loading: action.payload
            }
    }
}