const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [   //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "O que é a inteligencia artficial?",
        alternativas: [
            {texto:"Uma pessoa considerada não inteligente", afirmação:"Afirmação da alternativa1"},
               
            {texto:"Algo que se aproxima da inteligencia humana, porém artificial", afirmação:'Afirmação da alternativa2'}]
    },
    {
        enunciado: "As IAs devem ser programadas para:",
        alternativas: [
            {texto:"Tomar decisões autônomas", afirmação:"Afirmação da alternativa1"}
            {texto:"Seguir sempre as diretrizes humanas", afirmação:"Afirmação da alternativa1"}]
    },
    {
        enunciado: "A IA deve ser usada principalmente para",

        alternativas: [
            {texto:"Aumentar a eficiência humana",afirmação:"Afirmação da alternativa1",}
            {texto: "Substituir completamente o trabalho humano", afirmação:"Afirmação da alternativa1"}]
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
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);

    }
    
}
mostraPergunta();