
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

    const observers = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show2');
            }
            else{
                entry.target.classList.remove('show2');
            }
        });
    });

    const hiddensElements = document.querySelectorAll('.hidden2');
    hiddensElements.forEach((el) => observers.observe(el));

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
            element.style.backgroundColor = "black";
            element.style.color = "white";
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
    /*var loginCheck = document.querySelector('.login');
    function switcherL_true(){
        var info_bar = document.querySelectorAll('.i_m, .i_p, .i_n, .i_b, .i_a');
        info_bar.forEach(function (element){
            element.style.color = "black";
        });
    };
    function switcherL_false(){
        var info_bar = document.querySelectorAll('.i_m, .i_p, .i_n, .i_b, .i_a');
        info_bar.forEach(function (element){
            element.style.color = "white";
        });
    };

    loginCheck.addEventListener("mouseenter", switcherL_true);
    loginCheck.addEventListener("mouseleave", switcherL_false);


    var mainCheck = document.getElementsByClassName('info_main');
    var prodCheck = document.querySelector('.info_prod');

    function switcher_nav_true(element){
        element.style.color = "white";
        backgroundColor = "black";
    }
    function switcher_nav_false(element){
        element.style.color = "black";
        backgroundColor = "white";
    }

    mainCheck = this.addEventListener("mouseenter", function(){
        switcher_nav_true(mainCheck);
    })
    mainCheck = this.addEventListener("mouseleave", function(){
        switcher_nav_false(mainCheck);
    }) */
});
