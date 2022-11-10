$('#menu').click(function () {
    $('.lists').toggleClass('toggleUl');
    $('.lists li').toggleClass('toggleLi');
    $('.one').toggleClass('toggleOne');
    $('.two').toggleClass('toggleTwo');
    $('.three').toggleClass('toggleThree');
});

let year = new Date().getFullYear();

$('.copyright').html('Copyright &copy; ' + year + ' Samir');