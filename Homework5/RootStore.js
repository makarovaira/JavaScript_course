import { TasksStore } from "./modules/tasks/TasksStore";
import { JokesStore } from "./modules/jokes/JokesStore";
import React from "react";
import {LogStore} from "./modules/logs/LogStore";

class RootStore {
    tasksStore;
    jokesStore;
    logStore;

    constructor() {
        this.tasksStore = new TasksStore();
        this.jokesStore = new JokesStore();
        this.logStore = new LogStore();
    }
}

export const rootStore = new RootStore()

export const storesContext = React.createContext(rootStore)
