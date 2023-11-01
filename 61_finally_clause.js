///    error handling with try catch
try{
   
    console.log(koushal)
}catch(err){
    
    console.log('this is error block')
}
// console.log(koushal)
console.log('ko')

// error object

try{
    console.log(koushal)
}catch(err){
    
    console.log(err)
    console.log(err.message)
    console.log(err.name)
    console.log(err.stack)
}
// console.log(koushal)



//finally clause

try{
    console.log(koushal)
}catch(err){
   console.log('erroor from finally clause block')
   console.log(p)
}
 finally{       /// finally clause  running is err comes or not this will always running
    //finally is run even if error is in catch block also other wise if error in catch block then next script is not not running
    console.log("i am a good boy")   

    // use for 
    // close the file , add logs files whatever 
    // clean up the file
} 
console.log('koushal')