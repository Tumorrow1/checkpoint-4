import { AppState } from "../AppState.js"






export class ToDO {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.completed = data.completed
    }


    get template() {
        return `<div>${this.description}</div>`
    }

}
