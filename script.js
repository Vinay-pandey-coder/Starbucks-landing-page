function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

//  scroll reveal
ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay: "400",
});
ScrollReveal().reveal('header');
ScrollReveal().reveal('.imgBox', { origin: "right"});
ScrollReveal().reveal('.textBox', { origin: "left"});
ScrollReveal().reveal('.textBox,h2', { delay:"500", origin: "left"});



ScrollReveal().reveal('.thumb', { origin: "bottom"});
ScrollReveal().reveal('.sci', { origin: "right"});