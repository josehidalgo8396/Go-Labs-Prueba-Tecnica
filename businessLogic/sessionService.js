
var repository = require('../dataAccess/repository.js');

exports.getValue = function(callback){
    repository.executeQuery({
        spName: 'sp_obtenerValor',
        params: ''
    }, 
    function(success, data) {
        if(success) {
            callback({
                success: true, 
                message: 'Datos válidos',
                data: data[0][0]
            });
        }
        else {
            callback({
                success: false, 
                message: 'Ha ocurrido un error, no se ha obtenido los valores',
                data: {}
            });
        }
    });    
};

exports.setValue = function(data, callback){
    console.log(data);
    repository.executeQuery({
        spName: 'sp_actualizarContador',
        params: data.valor
    }, 
    function(success, data) {
        if(success) {
            callback({
                success: true, 
                message: 'Datos válidos',
                data: data[0][0]
            });
        }
        else {
            callback({
                success: false, 
                message: 'Ha ocurrido un error, no se ha actualizado el valor',
                data: {}
            });
        }
    });    
};