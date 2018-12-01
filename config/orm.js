


// * Import (require) `connection.js` into `orm.js`
var connection = require("../config/connection.js");


// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//   * `selectAll()`
//   * `insertOne()`
//   * `updateOne()`
// Object for all our SQL statement functions.
var orm = {
    selectAll: function (tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var query = `INSERT INTO ${table} (${cols}) VALUES ("${vals}")`;
        console.log(query);

        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function (table, condition, cb) {
        var query = "UPDATE " + table + " SET devoured = true WHERE " + condition;

        console.log(query);

        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
};

// Export the orm object for the model (burger.js).
module.exports = orm;
