function soma(a, b) {
    return a + b;
  }

  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }

  function divisao(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return 'Divisão por zero não é definida.';
    }
  }
  
  test('Teste Soma', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('Teste Multiplicacao', () => {
    expect(multiplicacao(4, 5)).toBe(20);
  });
  
  test('Teste Divisão', () => {
    expect(divisao(10, 2)).toBe(5);
  });
  
  test('Teste Divisão', () => {
    expect(divisao(5, 0)).toBe('Divisão por zero não é definida.');
  });