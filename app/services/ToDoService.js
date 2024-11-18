import { AppState } from "../AppState.js";
import { ToDoController } from "../controllers/ToDoController.js";
import { ToDO } from "../models/ToDo.js";
import { api } from "./AxiosService.js";




class ToDoService {
    async postToDo(formdata) {
        const response = await api.post(`api/todos`, formdata)
        console.log(`📝✔️`, response.data);
        const createdToDo = new ToDO(response.data)
        AppState.toDos.push(createdToDo)
    }

    async deleteToDo(formdata) {
        const response = await api.post(`api/todos`, formdata)
        console.log(`📝✔️`, response.data);
        const createdToDo = new ToDO(response.data)
        AppState.toDos.push(createdToDo)

    }

    async editToDo(formdata) {
        const response = await api.post(`api/todos`, formdata)
        console.log(`📝✔️`, response.data);
        const createdToDo = new ToDO(response.data)
        AppState.toDos.push(createdToDo)
    }
    async fetchToDos() {
        const response = await api.get(`api/todos`)
        console.log(`📝✔️`, response.data);

        const toDos = response.data.map(toDo => new ToDO(toDo))
        AppState.toDos = toDos
    }


}





















export const ToDoservice = new ToDoService()