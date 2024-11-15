import { AppState } from "../AppState.js";
import { ToDoController } from "../controllers/ToDoController.js";
import { ToDO } from "../models/ToDo.js";
import { api } from "./AxiosService.js";




class ToDoService {
    async postToDo(formdata) {
        const response = await api.post(`api/todos`, formdata)
        console.log(`📝✔️`, response.data);
        const createdToDo = new ToDO(response.data)
        AppState.ToDo.push(createdToDo)
    }

}






















export const ToDoservice = new ToDoService()