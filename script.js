const form = document.querySelector('#form-atividade');
const imgAprovado = '<img src="./Images/aprovado.png" alt="Emoji festejando" />';
const imgReprovado = '<img src="./Images/reprovado.png" alt="Emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))

let linhas = '';

form.addEventListener('submit', function(e){
	e.preventDefault();

	adicionaLinha();
	atualizaTabela();
	atualizaMedia();
});

function adicionaLinha() {
	const inputNomeAtividade = document.querySelector('#nome-atividade');
	const inputNotaAtividade = document.querySelector('#nota-atividade');

  if (atividades.includes(inputNomeAtividade.value)) {
		alert(`Atividade ${inputNomeAtividade.value} já foi adicionada!`)
	} else {
		atividades.push(inputNomeAtividade.value);
		notas.push(parseFloat(inputNotaAtividade.value));

		let linha = '<tr>';
		linha += `<td>${inputNomeAtividade.value}</td>`;
		linha += `<td>${inputNotaAtividade.value}</td>`;
		linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
		linha += '</tr>';

		linhas += linha;
	}

	inputNomeAtividade.value ='';
	inputNotaAtividade.value ='';
};

function atualizaTabela() {
	const corpoTabela = document.querySelector('tbody');
	corpoTabela.innerHTML = linhas;
};

function atualizaMedia() {
	const mediaFinal = calculaMedia();
	
	document.getElementById('media-final').innerHTML = mediaFinal.toFixed(2);
	document.getElementById('media-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
};

function calculaMedia() {
	let somaNotas = 0;

	for (let i = 0; i < notas.length; i++) {
		somaNotas += notas[i];
	}

	return somaNotas / notas.length
};