// javascript will go here

$(document).ready(function() {
    $('info-button').click(function() {
        $('info-popup').toggle();
    });

$(document).mouseup(function(e) {
    var container = $('#info-popup');
    if (!container.us(e.target) && container.has(e.target).length === 0) {
        container.hide();
        }
    });
});

// The following code is for the slide on the index page

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);

}

function showSlides(n) {

}

function openPrologue(url) {
    window.open(url, '_blank');
}