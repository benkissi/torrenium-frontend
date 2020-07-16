import {URLS} from './constants'

export const signinUser = async (email, password) => {
    const url = `${URLS.SIGNIN}`
    const details = {
        email,
        password
    }
    const res = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details)
    })
    const data = await res.json()
    return data
}

export const signupUser = async (email, password) => {
    const url = `${URLS.SIGNUP}`
    const details = {
        email,
        password
    }
    const res = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details)
    })
    const data = await res.json()
    
    return data
}