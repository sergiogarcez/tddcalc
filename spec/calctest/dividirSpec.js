describe('Suíte de testes da função divisão da calculadora', function(){

//require funciona como um "importador", onde ele atribui o valor de um local para outro. 
//O seu uso é compreendido pelos ../ para sair do diretorio e /*nomedodiretorio* para entrar no diretorio
//Ex: require('../../src/css/calculadora.css')

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve dividir dois numeros inteiros, 6 e 3, e retornar 2', function(){
		expect(myCalc.dividir(6,3)).toEqual(2);

	});

	it('Deve dividir dois numeros reais, 15.5 e 4.5, e retornar 3.44', function(){
		expect(myCalc.dividir(15.5,4.5)).toEqual(3.44);

	});
});