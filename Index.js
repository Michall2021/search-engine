const app = require('express')();
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const port = 1336;

//open database connection
let db = new sqlite3.Database('Data.sqlite');


//define get function
app.use(cors());

//define get function

app.get('/', async (req, res) => {
    let sql = `SELECT * FROM Data WHERE ProductCategory=?`;
    let params = req.query.searchtext;    

  db.all(sql, [params], (err, rows) => {
        let result = [];
        if (err) {
            throw err;
        }    
     rows.forEach((row) => {
         result.push(row);
     });
     
     res.status(200).json(result); 
    }); 
 });

//define server listener
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});


