
//Первоначальный вызов функции
var xhr = new XMLHttpRequest();
xhr.open("GET", "json/films.json", true);
xhr.send();
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var Data = JSON.parse(xhr.responseText);
        renderHTML(Data);
    }
};



var moreBtn = document.querySelector('#more-btn');


//Первоначальный вывод
function renderHTML(data) {
    var dynamically = [];
    var output = "";
    for (var j = 0; j < data.length; j++) {
        dynamically[dynamically.length] = data[j].title; //получаем массив данных
    }
    for (var i = 0; i < dynamically.length; i++) {
        output += "<tr>";
        output += "<td>" + dynamically[i] + "</td>";
        output += "<td width='2%'>" + "<i class='fas fa-star'></i>" + "</td>";
        output += "</tr>";

    }
    $('table').html(output);

}



//счетчик по 15









$('#form-search').keyup(function () {
    $.getJSON("json/films.json", function (data) {
        var search = $('#form-search').val();
        var regex = new RegExp(search, 'i');
        var dynamically = [];
        var output = "";
        $.each(data, function (key, val) {
            if (val.title.search(regex) != -1) {
                dynamically[dynamically.length] = val.title;
            }
        });

        for (var i = 0; i < dynamically.length; i++) {
            output += "<tr>";
            output += "<td>" + dynamically[i] + "</td>";
            output += "<td width='2%'>" + "<i class='fas fa-star'></i>" + "</td>";
            output += "</tr>";

        }
        $('table').html(output);




    });
});


