
window.addEventListener('DOMContentLoaded', myJson);

function myJson() {
    $.getJSON("json/films.json", function (data) {
        renderHTML(data);
    });
}


var moreBtn = document.querySelector('#more-btn');
//Первоначальный вывод
function renderHTML(data) {

    var dynamically = {
        name: [],
        page: []
    };
    for (var j = 0; j < data.length; j++) {
        dynamically.name[dynamically.name.length] = data[j].title;
        dynamically.page[dynamically.page.length] = Math.floor((dynamically.page.length + 0) / 15 + 1); //получаем массив данных
    }
    Dynamic(dynamically);
}
//Первоначальный вывод




//Вывод данных
function Dynamic(dynamic) {
    var output = "";
    dynamic.name.forEach(function (name) {
        output += "<tr>";
        output += "<td class='name'>" + name + "</td>";
        output += "<td width='2%'>" + "<i onclick ='Fire(this)' class='fas fa-star noFire'></i>" + "</td>";
        output += "</tr>";
    }); $('table').html(output);
}






var Bookmark = {
    title: [],
    star: []
};

/*function Fire(e) {
    var mark = e.parentNode.previousSibling.textContent;

    if (e.classList.contains('noFire')) { //изменеие массива тегов
        $(e).removeClass('noFire');
        $(e).addClass('Fire');
        Bookmark.title[Bookmark.title.length] = mark;
        Bookmark.star[Bookmark.star.length] = "Fire";
        localStorage.setItem('Bookmark', JSON.stringify(Bookmark));

    } else {
        $(e).removeClass('Fire');
        $(e).addClass('noFire');
        Bookmark.title.splice(Bookmark.title.indexOf(mark), 1);
        Bookmark.star.splice(Bookmark.title.indexOf(mark), 1);
        localStorage.setItem('Bookmark', JSON.stringify(Bookmark));
    }
}*/

/*var Storage = localStorage.getItem('Bookmark');
var StorageData = JSON.parse(Storage);
var len = StorageData.title.length;
var star = StorageData.star;
var title = StorageData.title;
console.log(title);*/











//Вывод данных



$('#form-search').keyup(function () {
    $.getJSON("json/films.json", function (data) {
        var btn = $('.changing');
        btn.removeClass('changing');
        btn.addClass('tag');
        var dynamically = {
            name: [],
            page: []
        };
        var search = $('#form-search').val();
        var regex = new RegExp(search, 'i');
        if (search[0] != undefined) {
            $.each(data, function (key, val) {
                if (val.title.search(regex) != -1 && Boolean(val.title[0].toLowerCase() == search[0].toLowerCase())) {
                    dynamically.name[dynamically.name.length] = val.title;
                    dynamically.page[dynamically.page.length] = Math.floor((dynamically.page.length + 0) / 15 + 1);
                }

            });
        } else if (search[0] == undefined) {
            $.each(data, function (key, val) {
                dynamically.name[dynamically.name.length] = val.title;
                dynamically.page[dynamically.page.length] = Math.floor((dynamically.page.length + 0) / 15 + 1);
            });
        }

        Dynamic(dynamically);
    });
});



function Click() {
    var j = 1;
    moreBtn.addEventListener('click', function () {
        j += 1;
        dynamic.name.forEach(function (name, i) {
            if (dynamic.page[i] == j) {
                output += "<tr>";
                output += "<td>" + name + "</td>";
                output += "<td width='2%'>" + "<i onclick ='Fire(this)' class='fas fa-star'></i>" + "</td>";
                output += "</tr>";
                if (j == dynamic.page[dynamic.page.length - 1]) {
                    moreBtn.style.display = "none";
                }
            }
        }); $('table').html(output);
    });

}