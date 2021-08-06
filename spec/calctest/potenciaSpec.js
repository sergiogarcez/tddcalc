describe('Suíte de testes da função multiplicação da calculadora', function(){

//require funciona como um "importador", onde ele atribui o valor de um local para outro. 
//O seu uso é compreendido pelos ../ para sair do diretorio e /*nomedodiretorio* para entrar no diretorio
//Ex: require('../../src/css/calculadora.css')

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve elevar um numero inteiro à outro, 6 e 2, e retornar 36', function(){
		expect(myCalc.potencia(6,2)).toEqual(36);

	});

	it('Deve elevar um numero inteiro à outro, 6.5 e 2, e retornar 42.25', function(){
		expect(myCalc.potencia(6.5,2)).toEqual(42.25);

	});
});