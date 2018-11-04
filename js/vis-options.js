module.exports = {
    options: options,
    nodesOptions: nodesOptions,
    edgesOptions: edgesOptions,
    layoutOptions: layoutOptions,
    interactionOptions: interactionOptions,
    manipulationOptions: manipulationOptions,
    physicsOptions: physicsOptions,
    formatNodeTitle: formatNodeTitle 
}

function nodesOptions() {
    return {
        borderWidthSelected: 5,
        color: {
            border: '#078cbc',
            background: '#97dcf4',
            highlight: {
                border: '#def2f9',
                background: '#10b0ea'
            },
            hover: {
                border: '#def2f9',
                background: '#c4e6f2'
            }
        },
        font: {
            face: 'helvetica'
        },
        margin: 15,
        shape: 'dot',
        widthConstraint: {
            maximum: 140,
        }
    }
}

function edgesOptions() {
    return {
        arrows: {
            to: {
                enabled: false,
                scaleFactor: 1,
                type:'arrow'
            }
        },
        arrowStrikethrough: false,
        color: {
            inherit: 'both'
        },
        // TODO: do this with a callback
        // hoverWidth: function (width) {return width*2.5;},
        // length: 500,
        scaling: {
            min: 1,
            max: 15
        },
        smooth: {
            type: 'continuous',
            roundness: 0.4
        },
        value: 2
    }
}

function layoutOptions() {
    return {}
}

function physicsOptions() {
    return {
        solver: 'repulsion',
        repulsion: {
            nodeDistance: 350,
            springLength: 150,
            springConstant: 0.003
        },
    }
}

function interactionOptions() {
    return {
        hover: true,
        hoverConnectedEdges: false,
        tooltipDelay: 0,
    }
}

function manipulationOptions() {
    return {
        enabled: false,
        addNode: function(nodeData, callback) {
            nodeData.label = '';
            callback(nodeData);
        },
        editNode: function(nodeData, callback) {
            callback(nodeData);
        },
    }
}

function options() {
    return {
        nodes: nodesOptions(),
        edges: edgesOptions(),
        layout: layoutOptions(),
        interaction: interactionOptions(),
        manipulation: manipulationOptions(),
        physics: physicsOptions(),
    }
}

function formatNodeTitle(title) {
    return '<div id="titleTooltip">'+title+'</div>'
}
