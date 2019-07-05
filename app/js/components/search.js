/*var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var films = JSON.parse(xmlhttp.responseText);

        var output = '';
        // var tag = '';
        for (var i = 0; i < films.length; i++) {
            //for (var j = 0; j < films[i].tags.length; j++) {
            //   tag += films[i].tags[j] + '<br>';
            // }
            output += '<li>' + films[i].title + '</li>' + '<br>';//+ tag;
            //tag = "";
        }
        document.getElementById('demo').innerHTML = output;
    }
};
xmlhttp.open("GET", "json/films.json", true);
xmlhttp.send();*/
$.getJSON("json/films.json", function (data) {
    var output = "";

    $.each(data, function (key, val) {
        output += "<tr id=" + key + ">";
        output += "<td>" + val.title + "</td>";
        output += "<td width='2%'>" + "<i class='far fa-star'></i>" + "</td>";
        output += "</tr>";
    });
    $('table').html(output);
});


$('#form-search').keydown(function () {
    $.getJSON("json/films.json", function (data) {
        var search = $('#form-search').val();
        var regex = new RegExp(search, 'i');
        var output = "";
        $.each(data, function (key, val) {
            if (val.title.search(regex) != -1) {
                output += "<tr id = " + key + ">";
                output += "<td>" + val.title + "</td>";
                output += "<td width='2%'>" + "<i class='far fa-star'></i>" + "</td>";
                output += "</tr>";
            }
        });
        $('table').html(output);
    });
});

