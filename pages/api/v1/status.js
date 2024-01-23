function status(request, response) {
  response.status(200).json({
    chave: "Testing this responde from next js ( teste de acentos: é )",
  });
}

export default status;
