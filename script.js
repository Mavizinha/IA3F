const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "Qual dessas aplicacoes e um exemplo de IA generativa?",
        alternativas: ["Um sistema de recomendacao de filmes com base no historico de visualizacoae","Um modelo de linguagem que cria textos ou imagens originais a partir de descricoes fornecidas"]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: ["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: ["Alternativa 1","Alternativa 2"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = pergunta[Atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
}

function mostraAlternativas(){

}


mostraPergunta();

