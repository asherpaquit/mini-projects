document.addEventListener("DOMContentLoaded", function () {
    // IntersectionObserver for elements with the class 'hidden'
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            else{
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Click event listener for element with the ID 'login'
    const choi = document.getElementById("login");
    function wowix() {
        alert("wowowoowow");
    }
    choi.addEventListener("click", wowix);

    // Mouseenter and mouseleave event listeners for element with the class 'login'
    var choi_2 = document.querySelectorAll('.info_main, .info_news, .info_billings, .info_about, .info_prod');
    function hover_effect() {
        choi_2.forEach(function (element) {
            element.style.backgroundColor = "white";
            element.style.color = "black";
        });
    }

    function none() {
        choi_2.forEach(function (element) {
            element.style.backgroundColor = "";
            element.style.color = "";
        });
    }

    choi.addEventListener("mouseenter", hover_effect);
    choi.addEventListener("mouseleave", none);

    // Adding 'fade-in' class to the first h1 element
    var h1Element = document.querySelector('h1');
    if (h1Element) {
        h1Element.classList.add('fade-in');
    }
    //removing sa katong blueblue sa link **hala nagsasabi nito
    var blueLinkFix = document.querySelectorAll('.i_m');
    
    function eliminate(){
        blueLinkFix.forEach(function (element){
            element.style.color = "white";
        })
    } 

    function blacku(){
        blueLinkFix.forEach(function (element){
            element.style.color = "black";
        })
    }

    /*const blueFix = document.querySelectorAll('.i_m .i_n .i_p i_b i_a i_l');
    blueFix.addEventListener("mouseenter",none);
    blueFix.addEventListener("mouseleave",eliminate);*/
    // this is my wrong code **need to document this shi

    const blueFix = document.querySelectorAll('.info_main');
    blueFix.forEach(function (element) {
    element.addEventListener("mouseenter", blacku);
    element.addEventListener("mouseleave", eliminate);
});

});
