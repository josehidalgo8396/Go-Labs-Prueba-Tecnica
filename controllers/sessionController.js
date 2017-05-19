var sessionService   = require('../businessLogic/sessionService.js');

exports.setValue = function(dRequest, dResponse) {
    var data = sessionService.setValue(dRequest.body, function(data){
        dResponse.send(data);
    });
};

exports.getValue = function(dRequest, dResponse) {
    var data = sessionService.getValue(function(data){
        dResponse.send(data);
    });
};
