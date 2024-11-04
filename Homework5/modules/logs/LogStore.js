import { makeAutoObservable } from 'mobx'
import LogsRepository from "./LogsRepository";

export class LogStore {
    logs = [];
    logsRepository = new LogsRepository();

    constructor() {
        makeAutoObservable(this);
    }

    load () {
        this.logsRepository.getItems().then(logs => this.setLogs(logs))
    }

    addNewLog = value => {
        this.logs.unshift(value);
        this.setLogs(this.logs);
        this.logsRepository.setItems(this.logs)
    };

    addTaskAdditionLog = (taskName) => {
        this.addNewLog("Added new task. Name:" + taskName)
    }

    addTaskDeletionLog = (taskName) => {
        this.addNewLog("Deleted the task. Name:" + taskName)

    }

    addTaskCompletionLog = (taskName) => {
        this.addNewLog("Changed task completion status. Name:" + taskName)
    }

    getAll = () => {
        return Object.assign(this.logs);
    }

    setLogs = (logs) => {
        this.logs = logs;
    }

    removeAll = () => {
        this.logsRepository.removeAll();
        this.setLogs([]);
    }
}
