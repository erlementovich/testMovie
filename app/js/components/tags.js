$.getJSON("json/tags.json", function (data) {
    var tags = "";
    $.each(data, function (e, val) {
        tags += "<button class='tag'>";
        tags += "<p>" + val + "</p>" + "<i class='fas fa-times'></i>";
        tags += "</button>";
    });
    $('.content-tags').html(tags);
});