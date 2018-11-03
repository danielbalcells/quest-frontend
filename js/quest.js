var api = require('./api-client');
var vis = require("vis");

var nodes = new vis.DataSet([]);
var edges = new vis.DataSet([]);

// Get questions from API
api.listQuestions(function(questions) {
    questions.forEach(function(question) {
        nodes.add({
            id: question.id,
            label: question.text
        });
    });
});

// Get links from API
api.listLinks(function(links) {
    links.forEach(function(link) {
        edges.add({
            from: link.source,
            to: link.target
        });
    });
});

// Get links from API 
// var edges = new vis.DataSet([
    // {from: 1, to: 3},
    // {from: 1, to: 2},
    // {from: 2, to: 4},
    // {from: 2, to: 5}
// ]);

// create a network
var container = document.getElementById('network');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {};

// initialize network
var network = new vis.Network(container, data, options);
