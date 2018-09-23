# chuck joke dengan NodeJS

#### Selamat datang di chuck-joke-node
[![NPM Package](https://cdn.iconscout.com/public/images/icon/free/png-128/npm-logo-brand-development-tools-324ad217b0ec3d40-128x128.png "link")](https://www.npmjs.com/package/chuck-joke-node "link")
chuck-joke-node adalah paket node js untuk akses joke tentang chuck norris.


# Fitur !

  - search : menampilkan joke berdasarkan keyword yang di input
  - random : memberikan joke random 
  - categori memberikan joke sesuai dengan kategori

### Installation

Install dependensi dengan menggunakan perintah.

```sh
$ npm i chuck-joke-node
```

### example

```sh
const joke = require('chuck-joke-node')

joke.random()
  .then((data) => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

// joke.search('php')
//   .then((data) => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.log(error)
//   })

// joke.cat('dev')
//   .then((data) => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.log(error)
//   })
```

### Demo

![Demo](https://raw.githubusercontent.com/balinux/chuck-joke-node/master/jokecap.gif)

### notes

 bagi yang mau ngulik kode saya bisa pull request

License
----

MIT
