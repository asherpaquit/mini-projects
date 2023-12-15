const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('.show');
        }
        else{
            entry.target.classList.remove('.show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.welcome');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded",function(){
    var choi =  document.getElementById("login");
    
    function hover_effect(){
        alert("wowowoowow");
    }

    choi.addEventListener("click",hover_effect);
});


document.addEventListener("DOMContentLoaded",function(){
    var choi = document.querySelector('.login');
    var choi_2 = document.querySelectorAll('.info_main, .info_news, .info_billings, .info_about, .info_prod');
    
    function hover_effect(){
        choi_2.forEach(function(element){
            element.style.backgroundColor = "white";
            element.style.color = "black";
        });
    }

    function none(){
        choi_2.forEach(function(element){
            element.style.backgroundColor = "";
            element.style.color = "";
        });
    }


    /*function hover_effect(){
        choi_2.style.backgroundColor = "white";
        choi_2.style.color = "black";
    }
    function none(){
        choi_2.style.backgroundColor = "black";
        choi_2.style.color = "white";
    }*/


    choi.addEventListener("mouseenter",hover_effect);
    choi.addEventListener("mouseleave",none);
});

document.addEventListener("DOMContentLoaded", function(){
    var h1Element = document.querySelector('h1');
    h1Element.classList.add('fade-in');
})