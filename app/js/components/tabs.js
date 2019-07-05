$(".tab").click(function changeColor(e) {
    e.preventDefault();
    var tab = $('.tab.active');
    tab.removeClass("active");
    $(this).addClass("active");
    
});