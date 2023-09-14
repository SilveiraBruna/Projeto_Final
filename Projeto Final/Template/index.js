
// Definições básicas
let continuar = true
let dados = []


// Função para cadastro
function cadastrar() {
	let nome = prompt("Digite nome do abrigo:")
	let cidade = prompt("Digite a cidade:")
	let endereco = prompt("Digite o endereço:")
	let telefone = prompt("Digite o número de telefone:")
	let capacidade = prompt("Digite a capacidade:")
	
	const guiaAbrigos = {
		nome: nome,
		cidade: cidade,
		endereco: endereco,
		telefone: telefone,
		capacidade: capacidade,
	}

	dados.push(guiaAbrigos)
	
}

// Função para listar
function listar(itens) {
	console.log("Função de Listar")
	
	for(let i = 0; i < itens.length; i++){
		console.log(`Nome: ${itens[i].nome} Cidade: ${itens[i].cidade} Endereço: ${itens[i].endereco} Telefone: ${itens[i].telefone} Capacidade: ${itens[i].capacidade}`)
	}	
}

// Função para buscar
function buscar(itens) {
	console.log("Função de busca")
	let buscaAbrigo = prompt("Qual abrigo você está buscando?")
	for(let i =0; i < itens.lenght; i++){
		


	}


}

// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "ABRIGOS TEMPORÁRIOS\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar abrigo\n"
		pergunta += "2. Listar abrigos\n"
		pergunta += "3. Procurar abrigo\n"
		pergunta += "4. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar(dados)
			break
		case 3:
			buscar()
			break
		case 4:
			sair()
			break
	}
}
