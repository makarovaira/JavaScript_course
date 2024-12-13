import { makeAutoObservable } from 'mobx'
import { nanoid } from "nanoid/non-secure";

export class TasksStore {
    tasks = []
    taskDraftText = ''

    constructor() {
        makeAutoObservable(this)
    }

    setTasks = value => {
        this.tasks = value
    }

    setTaskToggleCheckBox = (id, isDoneState) => {
        const item = this.tasks.find(x => x.id === id)
        item.isDone = isDoneState
        this.setTasks([...this.tasks])
    }

    addTask = () => {
        const id = nanoid()
        const tasks = [...this.tasks, {id: id, text: this.taskDraftText, isDone: false}]
        this.setTasks(tasks)
    }

    deleteTask = (id) => {
        const filteredTasks = this.tasks.filter(x => x.id !== id)
        this.setTasks(filteredTasks)
    }

    getTaskById = id => {
        return this.tasks.find(x => x.id === id).text;
    }

    setTaskDraftText = value => {
        this.taskDraftText = value;
    }

    getTaskDraftText = () => {
        return this.taskDraftText
    }
}