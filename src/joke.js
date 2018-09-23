const axios = require('axios');

class joke {
  constructor() {
    this.BaseUrl = 'https://api.chucknorris.io'
    // this.BaseUrl = 'https://api.chucknorris.io/jokes/random'
  }
  random() {
    return new Promise((resolve, reject) => {

      axios.get(this.BaseUrl + '/jokes/random')
        .then((data) => {
          resolve(data.data)
        })
        .catch((Error) => {
          reject({ "error_code": 404, "message": "data not found" })
        })
    })
  }

  cat(params) {
    return new Promise((resolve, reject) => {
      axios.get(this.BaseUrl + '/jokes/random?category=' + params)
        .then((data) => {
          resolve(data.data)
        })
        .catch((err) => {
          reject({ "error_code": 404, "message": "data not found" })
        })
    })
  }

    search(params) {
    return new Promise((resolve, reject) => {
      axios.get(this.BaseUrl + '/jokes/search?query='+ params)
        .then((data) => {
          resolve(data.data)
        })
        .catch((err) => {
          reject({ "error_code": 404, "message": "data not found" })
        })
    })
  }
}

const classJoke = new joke();

module.exports = classJoke;