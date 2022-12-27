window.onresize = function () {
    let width = $('body').innerWidth()
    let slider = document.querySelector('.slider')
    if (width > 500) {
        
        alert(slider.classList.toString())
    } else {
        
    }
};

$('.single-item').slick({
    infinite: false,
    slidesToShow: 1
});