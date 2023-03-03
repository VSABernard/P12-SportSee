/**
 * The class of React which displays the user's main formated data
 * @class Create the user's main formated data
 */
export class UserModel {
    constructor(data) {
        this._id = data.id
        this._firstName = data.userInfos.firstName
        this._lastName = data.userInfos.lastName
        this._score = data.score != null ? data.score : data.todayScore
        this._calorieCount = data.keyData.calorieCount
        this._proteinCount = data.keyData.proteinCount
        this._carbohydrateCount = data.keyData.carbohydrateCount
        this._lipidCount = data.keyData.lipidCount
        this._userInfos = data.userInfos
        this._keyData = data.keyData
    }

    get id(){
        return this._id
    }

    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }

    get name() {
        return this._firstName + ' ' + this._lastName
    }

    get score() {
        return this._score
    }

    get userInfo() {
        return this._userInfos
    }

    get keyData() {
       return this._keyData
    }

    getJSON(){           
        let user = {
            id: this._id,
            userInfos: this._userInfos,
            score: this._score,
            keyData: this._keyData
        }        
        return user
    }
}