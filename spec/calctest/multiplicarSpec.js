describe('Suíte de testes da função multiplicação da calculadora', function(){

//require funciona como um "importador", onde ele atribui o valor de um local para outro. 
//O seu uso é compreendido pelos ../ para sair do diretorio e /*nomedodiretorio* para entrar no diretorio
//Ex: require('../../src/css/calculadora.css')

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve multiplicar dois numeros inteiros, 6 e 3, e retornar 18', function(){
		expect(myCalc.multiplicar(6,3)).toEqual(18);

	});

	it('Deve multiplicar dois numeros reais, 15.5 e 4.5, e retornar 69.75', function(){
		expect(myCalc.multiplicar(15.5,4.5)).toEqual(69.75);

	});
});