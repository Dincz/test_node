const path = require('path')


console.log(path.sep);

const setPath = path.join('./folder','subfolder','text.txt')


console.log(setPath)

const absolute= path.resolve(__dirname,'/folder','subfolder','text.txt')


console.log(absolute)