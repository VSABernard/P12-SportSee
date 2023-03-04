import axios from 'axios'
import { ActivityModel } from '../models/ActivityModel'
import { UserModel } from '../models/UserModel'
import { AverageModel } from '../models/AverageModel'
import { PerformanceModel } from '../models/PerformanceModel'

/**
 * Mock data from dataMocker.js
 */
const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} = require('../data/dataMocker')

/**
 * A setting to switch between mock data or API data
 * If true then get data from DataMocker.js otherwise get data from API
 */
export const isMock = true

/**
 * Get the user's data from the API
 * @param {string} id User's id
 * @returns User's data
 */

 export const getUserData = async (id) => {
    let user = null
    let errorMessage = null

    if(id != null && id !== '') {

        if(isMock === true){
            let userFound = USER_MAIN_DATA.find((user) => user.id === parseInt(id, 10))
            user = new UserModel(userFound)
        } else {
            const baseUrlUser = `http://localhost:3000/user/${id}`

            await axios.get(baseUrlUser)
            .then((response) => {
                user = new UserModel(response.data.data)            
            }).catch((error) => {    
                errorMessage = error.message
            })
        }
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
        if(isMock === true){
            let activityFound = USER_ACTIVITY.find((activity) => activity.userId === parseInt(id, 10))
            activity = new ActivityModel(activityFound)
        } else {
            const baseUrlUser = `http://localhost:3000/user/${id}/activity`

            await axios.get(baseUrlUser)
            .then((response) => {
                activity = new ActivityModel(response.data.data)
            }).catch((error) => {                    
                errorMessage = error.message
            })
        }
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
        if(isMock === true){
            let averageFound = USER_AVERAGE_SESSIONS.find((average) => average.userId === parseInt(id, 10))
            average = new AverageModel(averageFound)
        } else {
            const baseUrlUser = `http://localhost:3000/user/${id}/average-sessions`

            await axios.get(baseUrlUser)
            .then((response) => {
                average = new AverageModel(response.data.data)
            }).catch((error) => {                    
                errorMessage = error.message
            })
        }
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
        if(isMock === true){
            let performanceFound = USER_PERFORMANCE.find((performance) => performance.userId === parseInt(id, 10))
            performance = new PerformanceModel(performanceFound)
        } else {
            const baseUrlUser = `http://localhost:3000/user/${id}/performance`

            await axios.get(baseUrlUser)
            .then((response) => {
                performance = new PerformanceModel(response.data.data)
            }).catch((error) => {                    
                errorMessage = error.message
            })
        }
    }
    return { performance, errorMessage }
}
