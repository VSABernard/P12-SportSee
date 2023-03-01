import axios from 'axios'

/**
 * Get the user's data from the API
 * @param {string} id User's id
 * @returns User's data
 */

 export const getUserData = async (id) => {
    
    // user model
    let user = {
        nom : '',
        prenom : '',
    }

    if(id != null && id !== '') {
        const baseUrlUser = `http://localhost:3000/user/${id}`

        await axios.get(baseUrlUser)
        .then((response) => {
            //TODO: use user model
            user = response.data.data
            
        }).catch((error) => {                    
            console.error('Error on GET activity:', error)
        })
    }
    return user
}

/**
 * Get the user's activities data from the API
 * @param {string} id User's id
 * @returns User's activities data
 */

export const getUserActivity = async (id) => {
    let activity = null

    if(id != null && id !== '') {
        const baseUrlUser = `http://localhost:3000/user/${id}/activity`

        await axios.get(baseUrlUser)
        .then((response) => {
            activity = response.data.data
        }).catch((error) => {                    
            console.error('Error on GET activity:', error)
        })
    }
    return activity
}
    
/**
 * Get the user's average's data from the API
 * @param {string} id User's id
 * @returns User's average's data
 */

export const getUserAverage = async (id) => {
    let average = null

    if(id != null && id !== '') {
        const baseUrlUser = `http://localhost:3000/user/${id}/average-sessions`

        await axios.get(baseUrlUser)
        .then((response) => {
            average = response.data.data
        }).catch((error) => {                    
            console.error('Error on GET average:', error)
        })
    }
    return average
}

/**
 * Get the user's performances data from the API
 * @param {string} id User's id
 * @returns User's performances data
 */

export const getUserPerformance = async (id) => {
    let performance = null

    if(id != null && id !== '') {
        const baseUrlUser = `http://localhost:3000/user/${id}/performance`

        await axios.get(baseUrlUser)
        .then((response) => {
            performance = response.data.data
        }).catch((error) => {                    
            console.error('Error on GET performance:', error)
        })
    }
    return performance
}
