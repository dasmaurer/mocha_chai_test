

var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should();

var BorrarEspacios = require("../Funciones");


describe ("test mocha is running", function() {
    it ("mocha test should run", function(){
        assert.equal(true, true);
    })
})

describe ("Testea funcionalidad de: BorrarEspacios()", function (){
    it("Debería mostrar un string contínuo sin espacios", function () {
        var result = BorrarEspacios ("hola esta es mi frase");
        expect(result).to.be.equal("holaestaesmifrase");
    })
})

