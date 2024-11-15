import { ToDoservice } from "../services/ToDoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";




export class ToDoController {
    constructor() {
        console.log(`📝✔️`);

    }

    async postToDo() {
        try {
            event.preventDefault()
            const formElm = event.target
            console.log(`✔️📝`, formElm);
            const formdata = getFormData(formElm)
            console.log(`form.data`, formdata);
            await ToDoservice.postToDo(formdata)
            Pop.toast(`ToDo Created`, "success", `top`);


        } catch (error) {
            console.error(`oh no`, error)
            const errorMessage = `oh no ${error.errorMessage} \n ${error.response.data.error}`
        }

    }


}