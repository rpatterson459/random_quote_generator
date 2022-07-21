console.log("connected!")
const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".name"),
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),




soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innertext}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerHTML)
});

quoteBtn.addEventListener("click", function randomQuote(){
 //   quoteBtn.classicList.add("loading");//
   // quoteBtn.innerText = "Loading Quote..."
    fetch("https://api.quotable.io/random").then(result => result.json()).then(result =>{
        console.log(result)
        quoteText.innerHTML = result.content;
        authorName.innerHTML = result.author;
        quoteBtn.innerHTML = "New Quote";
      //  quoteBtn.classicList.remove("loading");
    });
   // console.log(result)
});