module.exports = {
    options: options,
    nodesOptions: nodesOptions,
    edgesOptions: edgesOptions,
    layoutOptions: layoutOptions,
    interactionOptions: interactionOptions,
    formatNodeTitle: formatNodeTitle 
}

function nodesOptions() {
    return {
        borderWidthSelected: 5,
        color: {
            border: '#10b0ea',
            background: '#97dcf4',
            highlight: {
                border: '#97dcf4',
                background: '#10b0ea'
            },
            hover: {
                border: '#50bee5',
                background: '#c4e6f2'
            }
        },
        font: {
            face: 'helvetica'
        },
        // labelHighlightBold: true,
        margin: 15,
        // scaling: {
            // label: {
                // enabled: true,
                // drawThreshold: 8,
            // }
        // },
        shape: 'box',
        shapeProperties: {
            borderRadius: 25
        },
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
        scaling: {
            min: 1,
            max: 15
        },
        smooth: {
            type: 'continuous',
            roundness: 0.3
        },
        value: 5
    }
}

function layoutOptions() {
    return {}
}

function interactionOptions() {
    return {
        hover: true,
        hoverConnectedEdges: false,
        tooltipDelay: 0,
    }
}

function options() {
    return {
        nodes: nodesOptions(),
        edges: edgesOptions(),
        layout: layoutOptions(),
        interaction: interactionOptions()
    }
}

function formatNodeTitle(title) {
    return '<div id="titleTooltip">'+title+'</div>'
}
