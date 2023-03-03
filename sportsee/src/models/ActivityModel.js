/**
 * The class of React which displays the user's activities formated data
 * @class Create the user's activities formated data
 */
export class ActivityModel {
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

    getJSON(){           
        let activity = {
            userId : this._userId,
            sessions : this._sessions
        }     
        return activity
    }
}