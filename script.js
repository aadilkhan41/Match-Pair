const article = document.querySelector("article");
let attempts = 0;
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
