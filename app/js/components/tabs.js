$(".tab").click(function changeColor(e) {
    e.preventDefault();
    var tab = $('.tab.active');
    tab.removeClass("active");
    $(this).addClass("active");

});

var mark = $('.tab');
var bookmark2 = mark[1];
var bookmark1 = mark[0];
var mytag = document.getElementById('content-tags');
var mysearch = document.getElementById('content-form');
bookmark1.addEventListener('click', function () {
    mytag.style.display = "";
    mysearch.style.display = "";
});
bookmark2.addEventListener('click', function () {
    mytag.style.display = "none";
    mysearch.style.display = "none";
});

/*
*/