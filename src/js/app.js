document.addEventListener('DOMContentLoaded', function () {
    testWebP(document.body)
})

function testWebP(elem) {
    const webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webP.onload = webP.onerror = function () {
        webP.height === 2 ? elem.classList.add('webp') : elem.classList.add('no-webp')
    }
}

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}




if (document.querySelector('#to_signin')) {
    document.querySelector('#to_signin').addEventListener('click', function () {
        document.querySelector('.modal-signin').classList.add('active');
        document.querySelector('.modal-signup').classList.remove('active');
    }, false);
}
if (document.querySelector('#to_signup')) {
    document.querySelector('#to_signup').addEventListener('click', function () {
        document.querySelector('.modal-signup').classList.add('active');
        document.querySelector('.modal-signin').classList.remove('active');
    }, false);
}
document.getElementById("defaultOpen").click();

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcont");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}