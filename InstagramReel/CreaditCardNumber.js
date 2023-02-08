const hideCreditCardNumber = (cardNumber) => {
  cardNumber.replace(
    /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm,
    "#### #### #### ");
};

hideCreditCardNumber('VISA 1234 5678 9087 6543');