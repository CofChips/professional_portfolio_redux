$(document).ready(function () {

    $("#submitButton").on("click", captureForm);

    function captureForm(event){
        event.preventDefault();
        console.log(event);
        var name = $("#nameForm").val().trim();
        var email = $("#emailForm").val().trim();
        var content = $("#textForm").val().trim();

        var details = {
            name: name,
            email: email,
            content: content,
        }

        console.log(details);
        sendDetails(details);
    }

    function sendDetails(item) {
        $.ajax({
            method: "POST",
            url: "/api/email",
            data: item
        })
            .then(function (response) {
                console.log(response);
                location.reload();
            });
    }

})