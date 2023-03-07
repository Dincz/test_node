const { readFile , writeFile } = require('fs')
console.log('strat');

readFile('./folder/first.txt','utf8',(err, result)=>{
    if(err){
    console.log(err)
    return 
    }
   const first = result;
   readFile('./folder/second.txt','utf8',(err , result)=>
   {
    if(err){
        console.log(err)
        return 
    }
    const second = result;
    writeFile('./folder/result-async.txt',
    `Here is the result :  ${first},${second}`,{flag:'a'},
    (err,result)=>{
        if(err){
            console.log(err)
            return 
            }
           console.log(result);
           console.log("halfway throughout the task")
    }
    )

   })
    
})
console.log('ACcomplished')
//Diff bertween the aysnc and sync is sync follows the pattern and if the tasks takes the application would be stop and cant be others 
//IN async the task will be running as well as the other tasks 