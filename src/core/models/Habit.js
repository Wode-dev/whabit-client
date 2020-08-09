import axios from 'axios';

export default class Habit {
    static getFromAPI(id) {
        return axios.request({
            'url': `/habit/${id}`,
            'method': 'get'
        });
    }

    static getAllFromAPI() {
        return axios.get('/habit');
    }

    static create(axios, habit) {
        var stringify = require('qs-stringify');
        let habitData = stringify(habit);
        let
            r = axios.post('/habit', habitData);
        return r;
    }

    static delete(habit) {
        console.log({
            habit
        })
        return axios.delete(`/habit/${habit}`).catch((error) => {
            console.log({
                error
            })
        });
    }
}