var request = require('request');

var apiURL = 'http://localhost:8000/';

module.exports = {
    listQuestions: listQuestions,
    listLinks: listLinks
}

function listQuestions(cb) {
    request(apiURL+'questions/', { json: true }, function(err, response, body) {
        if (err) {
            return console.log(err);
        }
        cb(body);
    });
}

function listLinks(cb) {
    request(apiURL+'links/', {json: true}, function(err, response, body) {
        if (err) {
             return console.log(err);
        }
        cb(body);
    });
}
