const fs = require('fs');
//const dbJSON = require('./test.json')
const data = fs.readFileSync('./db/db.json');
const notes = JSON.parse(data);
console.log(notes);

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json.notes);
    // app.get('/api/notes', (req, res) => {
    //     //should read the 'db.json' file and return all saved notes as JSON
    //     res.sendFile(path.join(__dirname, '../db/db.json'));
    // });

    // app.post('/api/notes', (req, res) => {
    //     //should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. 
    //     //You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
    //     res.sendFile(path.join(__dirname, '../public/index.html'));
    // });
}