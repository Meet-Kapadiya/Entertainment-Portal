/* Slider */
var slideIndex = 1;
function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}
function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
window.onload = showSlides;


/* Category */
let index=1;

function changeTab(input) {
    index=input;

    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";

    if (input == 1) {
        document.getElementById("div1").style.display = "block";
    }
    if (input == 2) {
        document.getElementById("div2").style.display = "block";
    }
    if (input == 3) {
        document.getElementById("div3").style.display = "block";
    }
    if (input == 4) {
        document.getElementById("div4").style.display = "block";
    }
}


/* SearchBar */
function search() {
    let inputValue = document.getElementById("input").value.toUpperCase();

    let divInitial

    if(index == 1)
    {
        divInitial=document.getElementById("div1");
    }
    else if(index == 2)
    {
        divInitial=document.getElementById("div2");
    }
    else if(index == 3)
    {
        divInitial=document.getElementById("div3");
    }
    else
    {
        divInitial=document.getElementById("div4");
    }

    let movies = divInitial.getElementsByClassName("contain");

    let b = divInitial.getElementsByTagName("b");

    for (let i = 0; i < b.length; i++) {
        if ( b[i].innerHTML.toUpperCase().indexOf(inputValue) != -1 ) {
            movies[i].style.display = "";
        }
        else {
            movies[i].style.display = "none";
        }
    }
}