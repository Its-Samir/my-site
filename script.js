function enableLightMode() {
    $('head').children('link').last().attr('href', 'backgroundColor.css');
    $('.lightModeIcon').css('display', 'none');
    $('.darkModeIcon').css('display', 'block');
}

if (localStorage.getItem('theme') === 'light') {
    enableLightMode();
}

$('#menu').click(function () {
    $('.lists').toggleClass('toggleUl');
    $('.one').toggleClass('toggleOne');
    $('.two').toggleClass('toggleTwo');
    $('.three').toggleClass('toggleThree');
});

$('.darkModeIcon').click(function () {
    $('head').children('link').last().attr('href', 'style.css');
    $('.lightModeIcon').css('display', 'block');
    localStorage.setItem('theme', 'dark');
    $('.darkModeIcon').css('display', 'none');
});

$('.lightModeIcon').click(function () {
    $('head').children('link').last().attr('href', 'backgroundColor.css');
    $('.lightModeIcon').css('display', 'none');
    localStorage.setItem('theme', 'light');
    $('.darkModeIcon').css('display', 'block');
});

$('.skillsBtn').click(function () {
    $('.skillBox').css('display', 'block');

    $('.skillsBtn').addClass('active');
    $('.frontendSkillBtn').removeClass('active');
    $('.backendSkillBtn').removeClass('active');

    $('.squareBoxOne').removeClass('showSquareBoxOne');
    $('.squareBoxTwo').removeClass('showSquareBoxTwo');
});

$('.frontendSkillBtn').click(function () {
    $('.squareBoxOne').addClass('showSquareBoxOne');
    $('.squareBoxTwo').removeClass('showSquareBoxTwo');

    $('.frontendSkillBtn').addClass('active');
    $('.skillsBtn').removeClass('active');
    $('.backendSkillBtn').removeClass('active');

    $('.skillBox').css('display', 'none');
});

$('.backendSkillBtn').click(function () {
    $('.squareBoxTwo').addClass('showSquareBoxTwo');
    $('.squareBoxOne').removeClass('showSquareBoxOne');

    $('.backendSkillBtn').addClass('active');
    $('.skillsBtn').removeClass('active');
    $('.frontendSkillBtn').removeClass('active');

    $('.skillBox').css('display', 'none');
});

let year = new Date().getFullYear();

$('.copyright').html('Copyright &copy; ' + year + ' Samir');