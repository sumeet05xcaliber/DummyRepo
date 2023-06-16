const os = require('os')
//info about current user
const user =os.userInfo()
console.log(user);
// system uptime
console.log(`system uptime is ${os.uptime()}`);

const currentos={
    name:os.type(),
    release:os.release(),
    totatlmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentos);