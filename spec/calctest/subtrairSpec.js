describe('Suíte de testes da função subtração da calculadora', function(){

//require funciona como um "importador", onde ele atribui o valor de um local para outro. 
//O seu uso é compreendido pelos ../ para sair do diretorio e /*nomedodiretorio* para entrar no diretorio
//Ex: require('../../src/css/calculadora.css')

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve subtrair dois numeros inteiros, 2 e 3, e retornar -1', function(){
		expect(myCalc.subtrair(2,3)).toEqual(-1);

	});

	it('Deve subtrair dois numeros reais, 2.5 e 4.5, e retornar -2', function(){
		expect(myCalc.subtrair(2.5,4.5)).toEqual(-2);

	});
});
