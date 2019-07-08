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
var content = document.getElementById('content-titles');
bookmark1.addEventListener('click', function () {
    mytag.style.display = "";
    mysearch.style.display = "";
    content.style.display = "";
});
bookmark2.addEventListener('click', function () {
    mytag.style.display = "none";
    mysearch.style.display = "none";
    content.style.display = "none";
});



/*bookmark2.addEventListener('click', function () {
    $.getJSON("json/films.json", function (data) {
        var Storage = localStorage.getItem('Bookmark');
        var StorageData = JSON.parse(Storage);
        var output = "";
        StorageData.title.forEach(function (name) {
            output += "<tr>";
            output += "<td class='name'>" + name + "</td>";
            output += "<td width='2%'>" + "<i onclick ='Fire(this)' class='fas fa-star Fire'></i>" + "</td>";
            output += "</tr>";
        }); $('table').html(output);
    });


});*/

bookmark1.addEventListener('click', myJson);




/*
*/