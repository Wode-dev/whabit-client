import axios from 'axios';

export default class Habit {
    static getFromAPI(id) {
        return axios.request({
            'url': `/habit/${id}`,
            'method': 'get'
        });
    }
}