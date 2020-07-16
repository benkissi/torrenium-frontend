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

export const findMatchingJobs = async (username, token) => {
    const url = `${URLS.MATCHING}`
    const details = {
        username
    }
    console.log('request',username, token)
    const res = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify(details)
    })

    const data = res.json()

    return data
}

export const loadMoreJobs = async(offset, size, aggregate, strengths, token) => {
    const url = `${URLS.LOADJOBS}`
    const details = {
        offset,
        size,
        aggregate,
        strengths
    }

    const res = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify(details)
    })

    const data = res.json()

    return data
}