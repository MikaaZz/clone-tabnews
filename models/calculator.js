function sum(numero01, numero02) {
  if (typeof numero01 !== "number" || typeof numero02 !== "number")
    return "Erro";
  return numero01 + numero02;
}

exports.sum = sum;
