// function reverseWordInString (str) {
//     let arr = str.split(' ');
//     let result = arr.map(item => {
//         return item.split('').reverse().join('')
//     })
//     return result.join(' ')
// }

// module.exports = reverseWordInString


// function reverseWordInString (str) {
//     return str.split(' ').map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

// module.exports = reverseWordInString


// function reverseWordInString (str) {
//     return str.split(/\s/g).map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

// module.exports = reverseWordInString


function reverseWordInString (str) {
    return str.match(/[\w']+/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}

module.exports = reverseWordInString