const fs = require("fs");

fs.mkdirSync("./NewFolder",(err)=>{
    if(err){
        console.log(err.msg)
    }else{
        console.log("Folder created")}
    }
)


fs.writeFileSync("./NewFolder/NewFile","Hello mf World !!!",(err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log('File created and written')
    }
}
)

if( fs.existsSync('./NewFolder/NewFile')){
    fs.readFile('./NewFolder/NewFile',(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data.toString())
        }
    })
}

if( fs.existsSync('./NewFolder/NewFile')){
    fs.unlink('./NewFolder/NewFile',(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Succcessully Deleted")
        }
    })
}

if( fs.existsSync('./NewFolder')){
    fs.rmdir('./NewFolder',(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Succcessully Deleted")
        }
    })
}
