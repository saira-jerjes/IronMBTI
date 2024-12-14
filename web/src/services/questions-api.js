import axios from 'axios'

const http = axios.create({
    baseURL: "http://localhost:5173"
})

export function getQuestions() {
    return http.get('/db.json').then(response => response.data)
}