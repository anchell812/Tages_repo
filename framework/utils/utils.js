const fs = require('fs');
const Form = require('../../project/pagesAndForms/form')


function loadDataFromFile(filename) {
    const data_raw = fs.readFileSync(filename);
    const data_fields = JSON.parse(data_raw);
    return data_fields.map(fields => {
         return new Form(fields);
     })
}

module.exports = { loadDataFromFile }

