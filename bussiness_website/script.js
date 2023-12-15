document.addEventListener("DOMContentLoaded", function () {
    // IntersectionObserver for elements with the class 'hidden'
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Click event listener for element with the ID 'login'
    var choi = document.getElementById("login");
    function hover_effect() {
        alert("wowowoowow");
    }
    choi.addEventListener("click", hover_effect);

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
});
