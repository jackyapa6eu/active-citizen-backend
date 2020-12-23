const fsPromises = require('fs').promises; 
const path = require('path'); 
 
module.exports.readFile = (fileName) => { 
  const filepath = path.join(__dirname, fileName); 
  return fsPromises.readFile(filepath, { encoding: 'utf8' }) 
};  