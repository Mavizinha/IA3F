const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "O que é a inteligencia artficial?",
        alternativas: ["Uma pessoa considerada não inteligente","Algo que se aproxima da inteligencia humana, porém artificial"]
    },
    {
        enunciado: "As IAs devem ser programadas para:",
        alternativas: ["Tomar decisões autônomas","Seguir sempre as diretrizes humanas"]
    },
    {
        enunciado: "A IA deve ser usada principalmente para",
        alternativas: ["Aumentar a eficiência humana","Substituir completamente o trabalho humano"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();