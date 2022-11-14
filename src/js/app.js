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
if(document.querySelector('#defaultOpen')) {
    document.getElementById("defaultOpen").click();
}

$('.dropdownn').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdownn-menu').slideToggle(300);
});
$('.dropdownn').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdownn-menu').slideUp(300);
});
$('.dropdownn .dropdownn-menu > div').click(function () {
    $(this).parent().parent().find('.slct-span').text($(this).text());
    $(this).parent().parent().find('.slct-input').attr('value', $(this).attr('id'));
});