module.exports = {
    getQuestionStyle: getQuestionStyle
}

function getQuestionStyle() {
    return {
        selector: 'node',
        style: {
            'width': '100px',
            'height': '100px',
            'font-size': '15px',
            'background-color': 'white',
            'text-valign': 'bottom',
            'text-halign': 'center',
            'text-outline-opacity': function(ele){
                if(ele.data('highlighted')){
                    return 1;
                }
                else{
                    return 0.8;
                }
            },
            'text-outline-width': function(ele){
                if(ele.data('highlighted')){
                    return 2;
                }
                else{
                    return 1;
                }
            },
            'color': 'white',
            'overlay-opacity': '0',
            'background-blacken': function(ele){
                if(ele.data('highlighted')){
                    return 0;
                }
                else{
                    return 0.7;
                }
            },
            'text-opacity': function(ele){
                if(ele.data('highlighted')){
                    return 1;
                }
                else{
                    return 0.8;
                }
            }
        }
    }
}
