const article = document.querySelector("article");
let attempts = 0;
const numbers = [];
const images = ["strawberry.png","cherries.png","pineapple.png","lemon.png","pear.png","orange-slice.png","pomegranate.png","kiwi.png"];

for (let i = 1; i <= 8; i++) {
    numbers.push(i, i);
}

for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}

function renderCards(){
    for(let i=0; i<numbers.length; i++){
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.set = numbers[i];
        card.dataset.id = i;
    
        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');
    
        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
    
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
    
        const img = document.createElement('img');
        img.src = "./"+images[numbers[i]-1];
    
        cardBack.appendChild(img);
    
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
    
        article.appendChild(card);
    }
}

renderCards();

article.addEventListener("click",function(event){
    const sectionObj = event.target.closest(".card");
    sectionObj.classList.add("active");
    const findPair = sectionObj.getAttribute("data-set");
    const findPairId = sectionObj.getAttribute("data-id");

    let pairId = 0;
    const sections = document.querySelectorAll(".active");
    if(sections.length==2){
        setTimeout(function(){
            sections.forEach(ele=>{
                const id = ele.getAttribute("data-id");
                if(findPair == ele.getAttribute("data-set") && findPairId!=id){
                    pairId = id;
                }
            });
    
            if(pairId>0){
                sections.forEach(section => {
                    section.classList.replace("active","match");
                });            
            }
            else{
                sections.forEach(section => {
                    section.classList.remove("active");
                });
            };
        },500);
    }
    attempts++;
    document.querySelector("label").innerText = "Attempts: "+attempts;
});

const resetButton = document.querySelector("button");
resetButton.addEventListener("click",function(){
    attempts = 0;
    document.querySelector("label").innerText = "Attempts: "+attempts;

    const sections = document.querySelectorAll(".card");
    sections.forEach(section => {
        section.classList.remove("active");
        section.classList.remove("match");
    });
});
