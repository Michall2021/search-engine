//require mongoose
const mongoose = require('mongoose');

//Define schmea

const Schema = mongoose.Schema;

const DataSchema = new Schema({
    word: String,
    source: String,
    occurences: String
},
{ collection: 'SearchIndex'

}
);

module.exports = mongoose.model('SearchData', DataSchema)