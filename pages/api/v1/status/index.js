function status(request, response) {
  response.status(200).json({ chave: "essa é a resposta da API" });
}

export default status;
