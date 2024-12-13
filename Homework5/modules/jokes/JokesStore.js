import { makeAutoObservable } from 'mobx'
import { JokesClient } from "./JokesClient";

export class JokesStore {
    isLoading = false;
    joke = null;

    client;

    constructor() {
        makeAutoObservable(this);

        this.client = new JokesClient();
    }

    setIsLoading = value => {
        this.isLoading = value;
    };

    setJoke = value => {
        this.joke = value;
    };

    loadJoke = () => {
        this.setIsLoading(true);

        this.client.getRandomProgrammingJoke()
            .then(response => {
                this.setJoke(response.data);
                this.setIsLoading(false);
            })
            .catch(error => {
                this.setIsLoading(false);
            });
    };
}
