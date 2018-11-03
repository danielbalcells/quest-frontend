var request = require('request');

var apiURL = 'http://localhost:8000/';

module.exports = {
    listQuestions: listQuestions
}

function listQuestions(cb) {
    request(apiURL+'questions/', { json: true }, function(err, response, body) {
        if (err) {
            return console.log(err);
        }
        body.position = {x: 0, y:0};
        cb(body);
    });
}
