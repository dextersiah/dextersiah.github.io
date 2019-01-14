//Initialize Wow
new WOW().init();

//Enable Smooth Scrolling On Jump 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


//Change Animation of Screen Size
const avatar = document.querySelector('.portrait');
const abtMe = document.querySelector('.about-me');
if (window.innerWidth < 1040) {
    avatar.classList.remove('fadeInRight');
    avatar.classList.add('fadeInUp');
    avatar.dataset.wowOffset = '200';
    abtMe.dataset.wowOffset = "200";
}