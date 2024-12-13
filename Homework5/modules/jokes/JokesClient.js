import axios from 'axios';
import AxiosClient from "../../utils/AxiosClient";

export class JokesClient {
    client;

    constructor() {
        this.client = new AxiosClient({
            baseURL: "https://official-joke-api.appspot.com",
            timeout: 15000
        })
    }

    getRandomProgrammingJoke = () => {
        return this.client.get({url: "/jokes/programming/random"})
            .then(response => {
                const singleJokeResponse = { ...response };
                // API always returns single joke for that URL
                singleJokeResponse.data = response.data[0];
                return singleJokeResponse;
            });
    };
}
