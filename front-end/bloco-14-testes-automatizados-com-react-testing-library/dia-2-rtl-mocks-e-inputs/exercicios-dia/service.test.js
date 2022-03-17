const service = require('./service');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.randomNumber(10, 2)).toBe(5);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
});

describe("testando implementações", () => {
  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(2, 4, 6)).toBe(48);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 4, 6);
  });

test("testando se a função retorna o dobro do parâmetro", () => {
  service.randomNumber.mockReset();
  expect(service.randomNumber).toHaveBeenCalledTimes(0);

  service.randomNumber.mockImplementation(a => a * 2);
  expect(service.randomNumber(5)).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(5);
});
});

describe("testes das funções de string", () => {
  test("receber parâmetro com mock e retornar caixa baixa", () => {
    const mockUpperCase = jest.spyOn(service, "upperCase").mockImplementation(a => a.toLowerCase());

    expect(mockUpperCase("ALLINE")).toBe("alline");
    expect(service.upperCase).toHaveBeenCalledTimes(1);
    expect(service.upperCase).toHaveBeenCalledWith("ALLINE");
  });

  test("firstLetter retorna a última letra da string com o mock", () => {
    const mockFirstLetter = jest.spyOn(service, "firstLetter").mockImplementation(a => a[a.length -1]);

    expect(mockFirstLetter("alline")).toBe("e");
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith("alline");
  });

  test("concatena recebe 3 strings com mock e concatena", () => {
    const mockConcatena = jest.spyOn(service, "concatena").mockImplementation((a, b, c) => a + b + c);

    expect(mockConcatena("otorrino", "laringo", "logista")).toBe("otorrinolaringologista");
    expect(service.concatena).toHaveBeenCalledTimes(1);
    expect(service.concatena).toHaveBeenCalledWith("otorrino", "laringo", "logista");
  });

  test("restaura a função upperCase", () => {
    service.upperCase.mockRestore();
    expect(service.upperCase("trybe")).toBe("TRYBE");
  });
});
