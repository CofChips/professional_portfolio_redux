$(document).ready(function () {
    $.get("/api/skills1").then(function (result) {
        console.log("skills1")
        var list = $("#skillsList1");
        for(var i = 0; i<result.length; i++){
            var newLi = $("<li class='pt-3'>");
            newLi.append(result[i].name);
            list.append(newLi);
        }
    })

    $.get("/api/skills2").then(function (result) {
        console.log("skills2")
        var list = $("#skillsList2");
        for(var i = 0; i<result.length; i++){
            var newLi = $("<li class='pt-3'>");
            newLi.append(result[i].name);
            list.append(newLi);
        }
    })

    $.get("/api/skills3").then(function (result) {
        console.log("skills3")
        var list = $("#skillsList3");
        for(var i = 0; i<result.length; i++){
            var newLi = $("<li class='pt-3'>");
            newLi.append(result[i].name);
            list.append(newLi);
        }
    })
})
