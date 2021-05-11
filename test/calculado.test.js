const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const sinon = require("sinon");
var recurso = require("../api/services/Recurso");


describe('Recurso', function() {
    describe('#calculado', function() {
        describe('when the payment detail does not exist', function() {
            it('responds with Error',  async function() {
                result = await recurso.calculado({
                    _pagoDetalleId:1,
                    itempago:346
                })
                assert.equal(JSON.stringify(result), JSON.stringify({"data":{"cantidad":0,"error":{},"_params":{"_pagoDetalleId":1,"itempago":346}},"status":500}));
            });
        });
    });
});