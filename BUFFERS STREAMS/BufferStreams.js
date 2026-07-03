const fs = require('fs');
const { buffer } = require('stream/consumers');



const readstream =  fs.createReadStream('./BigFile.txt')

// readstream.on('data', (buffer)=>{
//     console.log(buffer.toString());
//     console.log('\n\n NEW BUFFER\n\n')
// })

const writestream = fs.createWriteStream('./CopyBigFile.txt')

readstream.on('data', (buffer)=>{
    writestream.write(buffer);
})