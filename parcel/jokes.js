import axios from 'axios';

// module.exports = {
//   getJoke: function () {
//     return fetch('http://api.icndb.com/jokes/random')
//     .then(res => res.json())
//     .then(data => data.value.joke)
//   }
// }

// export const jokes = {
//   getJoke: function () {
//     return fetch('http://api.icndb.com/jokes/random')
//       .then(data => data.value.joke)
//   }
// }

module.exports = {
  getJoke: () => {
    return new Promise((resolve, reject) => {
      axios.get('http://api.icndb.com/jokes/random')
        .then(res => {
          resolve(res.data.value.joke);
        })
    });
  }
}
