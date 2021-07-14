// Import the Node.js readline module.
import readline from "readline"
// Import the Node.js fs module.
import fs from "fs"
import os from "os"




// Create an instance of readline interface.
const read_line_interface = readline.createInterface({
    // Assign process.stdin as input.
    input: process.stdin,
    // Assign process.stdout as output. 
    output: process.stdout
});
// Prompt one line question and read user input to variable status.

read_line_interface.question("Enter path:  ", (path:string) =>  {
    // Prompt another line question and read user input to variable age.
    fs.readFile(__dirname + path,'utf8', (err, data)=>{
    if (err) throw err;
    console.log("Data: ", data);
    read_line_interface.question("Enter context: ", (content:string)=>{
/*         fs.writeFile(__dirname + path,content, (error)=>{
            if (error) throw error
            console.log("write success")
        }) */
            
        fs.appendFile(__dirname + path, content+os.EOL, (error)=>{
            if (error) throw error
            console.log("write success")
        })

        read_line_interface.close();
    });
})
});

