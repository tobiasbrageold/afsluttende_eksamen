var students = require('../services/main');

module.exports = function (app) {

    app.get('/', (req, res) => {
        res.render('pages/index');
    }); // index

};