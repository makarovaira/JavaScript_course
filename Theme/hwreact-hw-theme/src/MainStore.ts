import {Task} from './Task.ts';
import {makeAutoObservable} from 'mobx';
import React from 'react';

export class MainStore {
  tasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getTasks = () => {
    this.tasks = [
      {id: 1, name: 'Task 1'},
      {id: 2, name: 'Task 2'},
    ];
  };

  addTask(name: string) {
    this.tasks.push({id: Math.floor(Math.random() * 1000 + 5), name});
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  completeTask(id: number) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      this.completedTasks.push(task);
      this.deleteTask(id);
    }
  }
}

export const mainStore = new MainStore();

export const storesContext = React.createContext(mainStore);
