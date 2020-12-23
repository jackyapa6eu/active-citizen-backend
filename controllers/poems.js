const { readFile } = require('../data/read-file.js'); 

function findPoem(arr, str) {
  let inputArr = str.trim().split(' ');
  let result = {};
  let maxCoincidences = 0;
  for (let i = 0; i < arr.length; i++) {
    let coincidences = 0;
    for (let j = 0; j < inputArr.length; j++) {
      if (arr[i].text.toLowerCase().includes(inputArr[j]) && (inputArr[j].length > 2)) {
        coincidences++;
      }
    }
    if (coincidences > maxCoincidences) {
      maxCoincidences = coincidences;
      result = arr[i];
    }
  }
  return result
}

module.exports.getPoems = (req, res) => {
  //console.log(req.body.string);
  readFile('poems.json') 
    .then((poems) => { 
      if (!poems) {
        res.status(404).send({ message: 'Poems not found.' });
      } else {
        console.log(JSON.parse(poems)[0]);
        res.send({"poem": findPoem(JSON.parse(poems), req.body.string) });
      }
    }) 
    .catch((err) => { 
      res.status(500).send({ "message": "Что-то пошло не так." }); 
    }); 
};
