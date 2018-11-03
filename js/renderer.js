var cytoscape = require('cytoscape');
var jQuery = global.jQuery = require('jquery');
var shell = require('electron').shell;

var cytoscapeStyle = require('./cytoscape-style');
var questAPI = require('./quest-api');
var draw = require('./draw');

document.addEventListener('DOMContentLoaded', function() {
    var cy = window.cy = cytoscape({
        container : document.getElementById('cy'),
        style: [
            cytoscapeStyle.getQuestionStyle()
        ]
    });
    questAPI.listQuestions( function(questions) {
        draw.drawQuestions(cy, questions);
    });
});
