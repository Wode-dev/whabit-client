import axios from 'axios';

export default class Accomplishment {
    static getAllFromAPI(id, year, month) {
        return axios.request({
            'url': `/habit/${id}/accomplishments?year=${year}&month=${month}`,
            'method': 'get'
        })
    }

    static setAccomplishmentStatus(habitId, year, month, day, status) {
        let ax = axios;
        // let method = status ? 'post' : 'delete';
        var stringify = require('qs-stringify');
        let accomplishmentData = stringify({
            year,
            month,
            day,
            status
        });

        console.log({
            accomplishmentData
        });
        if (status) {
            return ax.post(`/habit/${habitId}/accomplishments`, accomplishmentData)
        } else {
            // `/habit/${habitId}/accomplishments?year=${year}&month=${month}&day=${day}`
            return ax.delete(`/habit/${habitId}/accomplishments/date?${accomplishmentData}`, {
                validateStatus: () => true
            }).catch((error) => {
                console.log({
                    error
                });
            });
        }
    }
}