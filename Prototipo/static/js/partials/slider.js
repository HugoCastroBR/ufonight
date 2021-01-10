const slides = document.querySelectorAll(".Slide"); //seleciona todos os slides
let SliderShow = 0; //numero do slide atual padrao sendo o primeiro da lista
let anterior = slides.length - 1; //numero do slide anterior com padrao sendo o ultimo da lista
let duracao_cada_slide = 10000 //altere aqui para mudar o tempo de cada slide em ms

//utility functions
//adicionar classe, recebe elemento para adicionar e classe a ser adicionada
function Add_Class(element, toadd = "noDisplay") {
    element.classList.add(`${toadd}`);
}
//remover classe, recebe elemento para remover classe e classe a ser removida
function Remove_Class(element, toremove = "noDisplay") {
    element.classList.remove(`${toremove}`);    
}

//main functions

//reseta todas as classes de animacao
function reset() {
    slides.forEach(element => Remove_Class(element, "saida"));
    slides.forEach(element => Remove_Class(element, "stoped"));
    slides.forEach(element => Remove_Class(element, "entrada"));
}
//roda ao iniciar
function start() {
    reset();
    autoNext = setInterval(() => next(1), duracao_cada_slide ); 
    slides[0].classList.add("stoped");
}

//animaçao do slide recebe slide atual e slide anterior
function AnimateSlide(element, anterior) {
    reset();
    Remove_Class(element);
    Remove_Class(anterior);
    Add_Class(element, "stoped");
    Add_Class(anterior, "saida");
}
//proximo slide recebe se 1 para proximo e -1 para anterior
function next(n = 1) {
    
    anterior = SliderShow;
    SliderShow += n;
    if (SliderShow > slides.length - 1) {
        SliderShow = 0;
    } else if (SliderShow < 0) {
        SliderShow = slides.length - 1;
    }
    AnimateSlide(slides[SliderShow], slides[anterior]);
}

start()