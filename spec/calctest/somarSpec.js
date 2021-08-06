describe('Suíte de testes da função soma da calculadora', function(){

//require funciona como um "importador", onde ele atribui o valor de um local para outro. 
//O seu uso é compreendido pelos ../ para sair do diretorio e /*nomedodiretorio* para entrar no diretorio
//Ex: require('../../src/css/calculadora.css')

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve somar dois numeros inteiros, 2 e 5, e retornar 7', function(){
		expect(myCalc.somar(2,5)).toEqual(7);

	});

	it('Deve somar dois numeros reais, 2.5 e 4.5, e retornar 7', function(){
		expect(myCalc.somar(2.5,4.5)).toEqual(7);

	});
});
