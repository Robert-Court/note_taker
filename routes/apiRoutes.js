const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        const data = fs.readFileSync('./db/db.json');
        const notes = JSON.parse(data);
        //console.log(notes);
        res.json(notes);
    });
    // app.get('/api/notes', (req, res) => {
    //     //should read the 'db.json' file and return all saved notes as JSON
    //     res.sendFile(path.join(__dirname, '../db/db.json'));
    // });

    app.post('/api/notes', (req, res) => {
        //should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. 
        //You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
        //console.log(req.body);
        let newNote = req.body;
        newNote.id = uuidv4();
        const data = fs.readFileSync('./db/db.json');
        const notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes),(savedNotes) => {
            res.json(savedNotes);
        });
    });

    app.delete('/api/notes/:id', (req, res) => {
        const data = fs.readFileSync('./db/db.json');
        const notes = JSON.parse(data);
        let target = req.params.id;
        let updatedNotes = notes.filter(function(note) {
        return note.id != target;
        })

        fs.writeFile('./db/db.json', JSON.stringify(updatedNotes),(savedNotes) => {
            res.json(savedNotes);
        });
    });
};