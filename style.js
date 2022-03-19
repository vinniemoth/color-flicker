const color = ['Red','Orange','Yellow','Cyan','Blue','Green','Purple'];
const nome = document.querySelector(".name");
const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();

    console.log(randomNumber);
    document.body.style.backgroundColor = color[randomNumber];
    nome.style.color = color[randomNumber];
    nome.textContent = color[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * color.length);
}