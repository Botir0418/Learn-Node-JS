const path = require('path')
const fs = require('fs')
class newFile {
    constructor (fileName, fileText) {
      this.fileName = fileName;
      this.fileText = fileText;
    }
  
    addFile() {
      fs.writeFile(this.fileName, this.fileText, (err) => {
        if (err) return err;
        console.log('New file is created');
      })
    }
  
    fileRead() {
      fs.readFile(
        path.join(__dirname, this.fileName), (err, data) => {
          if (err) return err;
  
          console.log(Buffer.from(data).toString());
        }
      )
    }
  
    removeFile() {
      fs.unlink(path.join(__dirname, this.fileName), (err) => {
        if(err) return err;
        console.log('File deleted successfully');
      })
    }
  
  }
  
  const NewFile = new newFile('thisTest.txt', 'This is a test');
  
  NewFile.addFile();
  
  NewFile.fileRead();
  
  NewFile.removeFile();


