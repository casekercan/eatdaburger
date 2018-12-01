var orm = require("../config/orm.js");


// Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (condition, cb) {
        orm.updateOne("burgers", condition, function (res) {
            cb(res);
        });
    },
};

//     * Export at the end of the `burger.js` file.
module.exports = burger;
