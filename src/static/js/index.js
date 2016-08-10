function addNumber(val) {
    d3.json('http://add1-env.us-east-1.elasticbeanstalk.com/api/add/' + val, function(error, data) {
        var val = data.response;
        d3.select('#result').text(val);
    });
}

function getNumberValue() {
    return d3.select('#number').property('value');
}

d3.select('#number').on('blur', function() {
    addNumber(getNumberValue());
});

d3.select('#number').on('keyup', function() {
    if (d3.event.keyCode == 13) {
        addNumber(getNumberValue());
    }
});
