/**
 * The class of React which displays the user's performances' formated data
 * @class Create the user's performances' formated data
 */
export class PerformanceModel {
    constructor(data) {
        this._userId = data.userId
        this._kind = data.kind
        this._data = data.data
    }

    get userId(){
        return this._userId
    }

    get kind() {
        return this._kind
    }

    get data() {
        return this._data
    }

    getJSON(){           
        let performance = {
            userId : this._userId,
            kind : this._kind,
            data : this._data
        }     
        return performance
    }
}