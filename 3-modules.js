// const amount = 12

// if(amount > 10){
//     console.log("Small One");
// }
// else{
//     console.log("BIgger Number");
// }
// console.log("This is my first NOde output");
// console.log(__dirname)
// setInterval(() => {
//  console.log("oh yeah!")
// },1000)

// const name = require('./4-names')
// const sayHI = require('./5-UTILS')
// const data = require('./6-alternative-flavour')
// require('./7-mind-granade')
// console.log(data)
// console.log(name)

// sayHI("Dinesh")

// sayHI(name.john)
// sayHI(name.ravi)
const { LOADIPHLPAPI } = require('dns')
const os = require('os')

const user = os.userInfo()
console.log(user);




console.log(`This is system uptime ${os.uptime()} seconds`);




const currentOS = {
    name : os.type(),
    Freerem : os.freemem(),
    totalmem : os.totalmem(),
    release : os.release()
}
console.log(currentOS)
