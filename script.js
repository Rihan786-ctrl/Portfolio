// Scroll Reveal

const reveals = document.querySelectorAll(
".hero,.about,.skills,.projects,.journey,.contact"
);

function revealSection(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight-120){

            section.classList.add("reveal","active");

        }

    });

}

window.addEventListener("scroll",revealSection);

revealSection();


// Back To Top Button

const backTop=document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backTop.classList.add("show");

    }else{

        backTop.classList.remove("show");

    }

});