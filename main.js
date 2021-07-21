'use strict'

// make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    console.log(window.scrollY);
    console.log(navbarHeight);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }
    else{
        navbar.classList.remove('navbar--dark');
    }
});

// handle scrolling when tapping on the navbar menu

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth' });
}

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if(link==null){
        return;
    }
    // 기존코드
    // console.log(event.target.dataset.link);
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({behavior: 'smooth', block: 'center'});
    
    scrollIntoView(link);
    // 정리한코드

});

// Handle scrolling when tapping on the navbar menu

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    // 기존코드
    // const scrollTo = document.querySelector('#contact');
    // scrollTo.scrollIntoView('smooth'); 
    
    scrollIntoView('#contact');
    // 정리한코드
});
