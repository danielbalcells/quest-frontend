var vis = require("vis");
var visOptions = require('./vis-options')
var api = require('./api-client');

var nodes = new vis.DataSet([]);
var edges = new vis.DataSet([]);

const sizeIncreasePerLink = 7;

// Get questions from API
api.listQuestions(function(questions) {
    questions.forEach(function(question) {
        nodes.add({
            id: question.id,
            title: visOptions.formatNodeTitle(question.text),
            size: 10,
        });
    });
    // Get links from API
    api.listLinks(function(links) {
        links.forEach(function(link) {
            edges.add({
                from: link.source,
                to: link.target
            });
            source = nodes.get(link.source);
            source.size += sizeIncreasePerLink;
            target = nodes.get(link.target);
            target.size += sizeIncreasePerLink;
            nodes.update([source, target]);
        });
    });
});

console.log(nodes);

// create a network
var container = document.getElementById('network');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = visOptions.options();

// initialize network
var network = new vis.Network(container, data, options);
