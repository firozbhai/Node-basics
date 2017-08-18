console.log('Starting app.');
const fs = require('fs');


const os = require('os');
var user = os.userInfo();
console.log(user);
fs.appendFile('greeting.html', 'hello'+ `${user.username}`+'!');

// fs.appendFile('greeting.html', 'nodejs is a js runtime taht uses v8', function (err){
//
//   if (err){
//     console.log('whooops!');
//   }
// });
