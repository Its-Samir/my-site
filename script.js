function enableLightMode() {
    $('head').children('link').last().attr('href', 'backgroundColor.css');
    $('.light-mode-icon').css('display', 'none');
    $('.dark-mode-icon').css('display', 'block');
}

if (localStorage.getItem('theme') === 'light') {
    enableLightMode();
}

$('#menu').click(function () {
    $('.lists').toggleClass('toggle-ui');
    $('.one').toggleClass('toggle-one');
    $('.two').toggleClass('toggle-two');
    $('.three').toggleClass('toggle-three');
});

$('.dark-mode-icon').click(function () {
    $('head').children('link').last().attr('href', 'style.css');
    $('.light-mode-icon').css('display', 'block');
    localStorage.setItem('theme', 'dark');
    $('.dark-mode-icon').css('display', 'none');
});

$('.light-mode-icon').click(function () {
    $('head').children('link').last().attr('href', 'backgroundColor.css');
    $('.light-mode-icon').css('display', 'none');
    localStorage.setItem('theme', 'light');
    $('.dark-mode-icon').css('display', 'block');
});

$('.skill-btn').click(function () {
    $('.skill-box').css('display', 'block');

    $('.skill-btn').addClass('active');
    $('.frontend-skill-btn').removeClass('active');
    $('.backend-skill-btn').removeClass('active');

    $('.squarebox-one').removeClass('showsquarebox-one');
    $('.squarebox-two').removeClass('showsquarebox-two');
});

$('.frontend-skill-btn').click(function () {
    $('.squarebox-one').addClass('showsquarebox-one');
    $('.squarebox-two').removeClass('showsquarebox-two');

    $('.frontend-skill-btn').addClass('active');
    $('.skill-btn').removeClass('active');
    $('.backend-skill-btn').removeClass('active');

    $('.skill-box').css('display', 'none');
});

$('.backend-skill-btn').click(function () {
    $('.squarebox-two').addClass('showsquarebox-two');
    $('.squarebox-one').removeClass('showsquarebox-one');

    $('.backend-skill-btn').addClass('active');
    $('.skill-btn').removeClass('active');
    $('.frontend-skill-btn').removeClass('active');

    $('.skill-box').css('display', 'none');
});

let year = new Date().getFullYear();

$('.copyright').html('Copyright &copy; ' + year + ' Samir');