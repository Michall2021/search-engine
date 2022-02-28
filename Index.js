const app = require('express')();
const sqlite3 = require('sqlite3').verbose();
const port = 1336;

//open database connection
let db = new sqlite3.Database('Data.sqlite');
let sql = 'SELECT * FROM Data';


//define get function
app.get('/', function (req, res) {

   db.all(sql, [], (err, rows) => {
       if (err) {
           throw err;
       }    
    rows.forEach((row) => {
        console.log(row);
    });
   });    
   res.send('GET request to homepage') 
});


//define server listener
app.listen(port, () => {
    console.log('Now listening on port ${port}');
});

