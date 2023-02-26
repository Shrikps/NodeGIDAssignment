const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName,fileContent);
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName,"utf-8");
	console.log(data);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile (fileName,fileContent);
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName);
}

myFileWriter("file.txt","Hello");
myFileUpdater("file.txt","World");
myFileReader("file.txt");
myFileDeleter("file.txt");

 module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }