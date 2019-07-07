$.getJSON("json/tags.json", function (data) {
    var tags = "";
    $.each(data, function (e, val) {
        tags += "<button class='absolute tag' onclick='setColor(this)'>";
        tags += "<p>" + val + "</p>" + "<i class='fas fa-times cross'></i>";
        tags += "</button>";
    });
    $('.content-tags').html(tags);
});

//массив тегов
var tagArrGreen = [];
//поиск по тегам
function setColor(e) {
    $.getJSON("json/films.json", function (data) {
        var output = "";
        if (e.classList.contains('tag')) { //изменеие массива тегов
            $(e).removeClass('tag');
            $(e).addClass('changing');
            tagArrGreen[tagArrGreen.length] = e.textContent;

        } else {
            $(e).removeClass('changing');
            $(e).addClass('tag');
            tagArrGreen.splice(tagArrGreen.indexOf(e.textContent), 1);
        }

//поиск по тегам
        for (var i = 0; i < data.length; i++) {
            if (tagArrGreen.every(function (mytag) {
                return data[i].tags.some(function (tag) {
                    return mytag === tag;
                });
            })) {
                output += "<tr>";
                output += "<td>" + data[i].title + "</td>";
                output += "<td width='2%'>" + "<i class='fas fa-star'></i>" + "</td>";
                output += "</tr>";

            }
        } 
        $('table').html(output);
//
    });
}

/*moreBtn.style.display = "";
            var counter1 = 0;

            for (var k = 0; k < 15; k++) {
                output += "<tr>";
                output += "<td>" + dynamically[k] + "</td>";
                output += "<td width='2%'>" + "<i class='fas fa-star'></i>" + "</td>";
                output += "</tr>";
            }
            $('table').html(output);
            moreBtn.addEventListener('click', function () {
                counter1 += 1;
                for (var i = 15 * counter1; i < 15 * (counter1 + 1); i++) {
                    output += "<tr>";
                    output += "<td>" + dynamically[i] + "</td>";
                    output += "<td width='2%'>" + "<i class='fas fa-star'></i>" + "</td>";
                    output += "</tr>";
                    if (dynamically.length - 1 < i + 1) {
                        moreBtn.style.display = "none";
                        break;
                    }
                }
                $('table').html(output);
                console.log("Счетчик1 " + counter1);*/