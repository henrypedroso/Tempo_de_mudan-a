const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

{
    enunciado: "Em sua aula de Biologia, você se dá conta de que as mudanças climáticas que estão ocorrendo no planeta são consequências do aquecimento global...",
    alternativas: [
        {
            texto: "Isso é perturbador!",
            afirmacao: "No futuro, com o avanço da tecnologia, deverão surgir profissões que ajudem a diminuir o impacto do homem sobre a natureza." 
        },
        {
            texto: "Olha aí uma oportunidade!",
            afirmacao: "Então esse é o momento de se capacitar em tecnologias promovendo a sua inclusão digital."
        }
    }