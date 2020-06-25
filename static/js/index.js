

var profileDescription = document.getElementById("profile-description");
var profileImage = document.getElementById("profile-image");

$(document).on("click", "#mebtn", function(){
    console.log("me clicked");
    $("#page3").css("height", "750px");
    $("#page3").css("padding-top", "50px");
}); 

$(document).on("click", "#resbtn", function(){
    console.log("me clicked");
    $("#page4").css("height", "750px");
    $("#page4").css("padding-top", "50px");
}); 





/*
$(document).on("click", ".contact", function(){
    window.location.href =  "./contact.html";
});

$(document).on("click", ".artPortfolio", function(){
    window.location.href =  "./artPortfolio.html";
});

$(document).on("click", ".webdevPortfolio", function(){
    window.location.href =  "./webdevPortfolio.html";
});*/