var cytoscape = require('cytoscape');
var popper = require('cytoscape-popper');
var Tippy = require('tippy.js');

cytoscape.use(popper);

module.exports = {
    drawQuestions: drawQuestions,
    drawQuestion: drawQuestion
}

function drawQuestions(cy, questionsData){
    questionsData.forEach(function(questionData) {
        drawQuestion(cy, questionData);
    });
}

function drawQuestion(cy, questionData){
    console.log(questionData);
    var question = cy.add({
        group: "nodes",
        data: questionData,
        position: questionData.position
    });
    drawTooltip(question, questionData.text);
    return question;
}

function drawTooltip(elem, tooltipText){
    var ref = elem.popperRef();
    var tippy = Tippy(ref, {
        arrow: true,
        sticky: true,
        trigger: 'manual',
        html: (() => {
            var div = document.createElement('div');
            div.innerHTML = tooltipText;
            return div;
        })()
    }).tooltips[0];
    elem.on('tap', () => tippy.show());
}
