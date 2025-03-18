// Declaração do array para armazenar os amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
  // Captura o valor do campo de entrada
  let nomeAmigo = document.getElementById("amigo").value;

  // Valida a entrada
  if (nomeAmigo.trim() === "") {
    alert("Por favor, insira um nome de um amigo.");
  } else {
    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista visível na página
    exibirListaAmigos();

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";
  }
}

// Função para exibir a lista de amigos na página
function exibirListaAmigos() {
  let listaElement = document.getElementById("listaAmigos");
  listaElement.innerHTML = ""; // Limpa a lista antes de atualizar

  // Percorre o array de amigos e adiciona cada nome como um item de lista
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    listaElement.appendChild(li);
  }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione amigos antes de realizar o sorteio.");
    return;
  }

  // Gera um índice aleatório
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtém o nome sorteado usando o índice aleatório
  let amigoSorteado = amigos[indiceAleatorio];

  // Exibe o nome sorteado na lista de resultados
  let resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = ""; // Limpa resultados anteriores

  let li = document.createElement("li");
  li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
  resultadoElement.appendChild(li);
}