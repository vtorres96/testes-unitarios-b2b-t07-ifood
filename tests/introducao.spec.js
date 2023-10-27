const somar = (numero1, numero2) => {
    if (typeof numero1 != "number" || typeof numero2 != "number") {
        return "O formato válido para os parâmetros numero1 e numero2 é: Number"
    }
    return numero1 + numero2
}

describe('Introdução a testes', () => {
    test('Testando metodo somar() sucesso', () => {
        let numero1 = 10;
        let numero2 = 20;
        expect(somar(numero1, numero2)).toEqual(expect.any(Number))
    })
    test('Testando metodo somar() erro', () => {
        let numero1 = "1";
        let numero2 = "2";
        expect(somar(numero1, numero2)).toEqual(expect.any(String))
    })
    test('Testando metodo somar() erro', () => {
        let numero1 = true;
        let numero2 = false;
        expect(somar(numero1, numero2)).toEqual(expect.any(String))
    })
})