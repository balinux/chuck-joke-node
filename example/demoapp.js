const joke = require('chuck-joke-node')

joke.random()
  .then((data) => {
    console.log(data.data)
  })
  .catch(error => {
    console.log(error)
  })

// joke.search('eat')
//   .then((data) => {
//     console.log(data.data)
//   })
//   .catch(error => {
//     console.log(error)
//   })

// joke.cat('dev')
//   .then((data) => {
//     console.log(data.data)
//   })
//   .catch(error => {
//     console.log(error)
//   })
