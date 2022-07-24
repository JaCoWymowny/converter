export const currencyValidation = {
  required: {
    value: true,
    message: "Uzupełnij to pole"
  },
  pattern: {
    value: /^[0-9]*\.?[0-9]*$/,
    message: 'Nieprawidłowa wartość',
  }
};

export const exchangeFromValidation = {
  required: {
    value: true,
    message: "Wybierz wartość"
  },
};

export const exchangeToValidation = {
  required: {
    value: true,
    message: "Wybierz wartość"
  },
}
