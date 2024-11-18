import { AppState } from "../AppState.js";
import { ToDoservice } from "../services/ToDoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class ToDoController {
    constructor() {


        // this.fetchToDos()
        // console.log(`📝✔️`);
        AppState.on(`account`, ToDoservice.fetchToDos)
        AppState.on(`toDos`, this.drawToDos)

        // console.log('🚙🎮');

        // AppState.on('ToDo', this._drawToDo) // listen for cars, when they get here draw them
        // AppState.on('account', this.showForm) // listen for the user, when they "log in" show the create form
        // listen for the user, when they "log in", re-draw the cars (the template will re-evaluate if it should include the delete button)
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
    async deleteToDo() {
        try {
            if (confirm("Are you sure you want to delete this ToDo?")) {
                await ToDoservice.deleteToDo(); // Assuming you have a `deleteToDo` method in your service
                Pop.toast(`ToDo Deleted`, "success", `top`);
            }
        } catch (error) {
            console.error(`Failed to delete ToDo`, error);
            Pop.toast(`Failed to delete ToDo: ${error.message}`, "error", `top`);
        }
    }

    async editToDo() {
        try {
            event.preventDefault();
            const formElm = event.target;
            const updatedData = getFormData(formElm); // Updated data from the form
            await ToDoservice.editToDo(updatedData); // Assuming you have an `editToDo` method in your service
            Pop.toast(`ToDo Updated`, "success", `top`);
        } catch (error) {
            console.error(`Failed to edit ToDo`, error);
            Pop.toast(`Failed to edit ToDo: ${error.message}`, "error", `top`);
        }
    }





    drawToDos() {
        if (!AppState.toDos) { return }
        let html = "todo, deletetodo, edittodo";
        html += "<div>todo stuff</div>"
        // the second string is the constructed HTML for each ToDo.
        setHTML('todos', `dletetoDo, edittodo`)
    }

}