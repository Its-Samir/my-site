$('#menu').click(function () {
    $('.lists').toggleClass('toggleUl');
    $('.lists li').toggleClass('toggleLi');
    $('.one').toggleClass('toggleOne');
    $('.two').toggleClass('toggleTwo');
    $('.three').toggleClass('toggleThree');
});

$('.darkModeIcon').click(function() {
    $('head').children('link').last().attr('href', 'backgroundColor.css');
    $('.lightModeIcon').css('display', 'block');
    $('.darkModeIcon').css('display', 'none');
});

$('.lightModeIcon').click(function() {
    $('head').children('link').last().attr('href', 'style.css');
    $('.lightModeIcon').css('display', 'none');
    $('.darkModeIcon').css('display', 'block');
});

let year = new Date().getFullYear();

$('.copyright').html('Copyright &copy; ' + year + ' Samir');