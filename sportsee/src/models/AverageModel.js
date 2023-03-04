/**
 * The class of React which displays the user's average sessions' formated data
 * @class Create the user's average sessions' formated data
 */

export class AverageModel {
    constructor(data) {
        this._userId = data.userId
        this._sessions = data.sessions
    }

    get userId(){
        return this._userId
    }

    get sessions() {
        return this._sessions
    }    
}