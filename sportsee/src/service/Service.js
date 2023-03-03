import axios from 'axios'
import { ActivityModel } from '../models/ActivityModel'
import { UserModel } from '../models/UserModel'
import { AverageModel } from '../models/AverageModel'
import { PerformanceModel } from '../models/PerformanceModel'

/**
 * Get the user's data from the API
 * @param {string} id User's id
 * @returns User's data
 */

 export const getUserData = async (id) => {
    let user = null
    let errorMessage = null

    if(id != null && id !== '') {
        const baseUrlUser = `http://localhost:3000/user/${id}`

        await axios.get(baseUrlUser)
        .then((response) => {
            user = new UserModel(response.data.data)            
        }).catch((error) => {    
            errorMessage = error.message
        })
    }
    return { user, errorMessage }
}

/**
 * Get the user's activities data from the API
 * @param {string} id User's id
 * @returns User's activities data
 */

export const getUserActivity = async (id) => {
    let activity = null
    let errorMessage = null

    if(id != null && id !== '') {
        const baseUrlUser = `http://localhost:3000/user/${id}/activity`

        await axios.get(baseUrlUser)
        .then((response) => {
            activity = new ActivityModel(response.data.data)
        }).catch((error) => {                    
            errorMessage = error.message
        })
    }
    return { activity, errorMessage }
}
   
/**
 * Get the user's average's data from the API
 * @param {string} id User's id
 * @returns User's average's data
 */

export const getUserAverage = async (id) => {
    let average = null
    let errorMessage = null

    if(id != null && id !== '') {
        const baseUrlUser = `http://localhost:3000/user/${id}/average-sessions`

        await axios.get(baseUrlUser)
        .then((response) => {
            average = new AverageModel(response.data.data)
        }).catch((error) => {                    
            errorMessage = error.message
        })
    }
    return { average, errorMessage }
}

/**
 * Get the user's performances data from the API
 * @param {string} id User's id
 * @returns User's performances data
 */

export const getUserPerformance = async (id) => {
    let performance = null
    let errorMessage = null

    if(id != null && id !== '') {
        const baseUrlUser = `http://localhost:3000/user/${id}/performance`

        await axios.get(baseUrlUser)
        .then((response) => {
            performance = new PerformanceModel(response.data.data)
        }).catch((error) => {                    
            errorMessage = error.message
        })
    }
    return { performance, errorMessage }
}
