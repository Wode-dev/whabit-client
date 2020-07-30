import axios from 'axios';

export default class Accomplishment {
    static getAllFromAPI(id, year, month) {
        return axios.request({
            'url': `/habit/${id}/accomplishments?year=${year}&month=${month}`,
            'method': 'get'
        })
    }
}