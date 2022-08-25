const cores = ['red', 'purple', 'blue', 'green', 'LawnGreen', 'Yellow', '#FF00FF', '#7FFFD4', 'black', 'orange', 'grey', '#FF4500', '#00FFFF']
const btn = document.querySelector(".botao");
const cor = document.querySelector(".cor");


// Funtion to get random index from array / Função para pegar um índice aleatório do array 
 function trocarCor(){
    const corAleatoria = Math.floor(Math.random() * cores.length);
     document.body.style.backgroundColor = cores[corAleatoria];
     cor.innerHTML = cores[corAleatoria];
}

btn.addEventListener('click', function(){
    trocarCor();
});
