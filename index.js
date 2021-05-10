const Recurso = require("./api/services/Recurso");

let params = {
    _pagoDetalleId: 1,
    itempago: 200
}

Recurso.calculado(params);