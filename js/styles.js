

var profileDescription = document.getElementById("profile-description");
var profileImage = document.getElementById("profile-image");

profileDescription.textContent = " Hi! I'm Swechchha Parajuli. I am currently an undergraduate student at University of California, Santa Cruz. I'm majoring in Computer Science."

$(document).on("click", ".home", function(){
    console.log("home clicked");
    window.location.href =  "./index.html";
}); 

$(document).on("click", "#mongoScraper", function(){
    console.log("scrape clicked");
    window.location.href =  "http://swechchha.com/clickyGame/";
});   

$(document).on("click", ".artPortfolio", function(){
    window.location.href =  "./artPortfolio.html";
});

$(document).on("click", ".contact", function(){
    window.location.href =  "./contact.html";
});

$(document).on("click", ".webdevPortfolio", function(){
    window.location.href =  "./webdevPortfolio.html";
});