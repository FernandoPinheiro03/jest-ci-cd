function soma(a, b) {
    return a + b;
  }
  
  test('deve retornar a soma de dois números', () => {
    expect(soma(2, 3)).toBe(5);
  });