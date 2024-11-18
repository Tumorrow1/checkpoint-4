import { AppState } from "../AppState.js";
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
        // FIXME use a delete request at the todoId
        const response = await api.post(`api/todos`, formdata)
        console.log(`📝✔️`, response.data);

        // FIXME remove the todo from the appstate with filter or splice
        // const createdToDo = new ToDO(response.data)
        // AppState.toDos.push(createdToDo)

    }

    async editToDo(formdata) {
        // FIXME should use a put over a post when editing
        const response = await api.post(`api/todos`, formdata)
        console.log(`📝✔️`, response.data);
        const editedToDo = new ToDO(response.data)
        // FIXME don't push you want to replace with something like splice
        AppState.toDos.push(editedToDo)
    }
    async fetchToDos() {
        const response = await api.get(`api/todos`)
        console.log(`📝✔️`, response.data);

        const toDos = response.data.map(toDo => new ToDO(toDo))
        AppState.toDos = toDos
    }


}





















export const ToDoservice = new ToDoService()