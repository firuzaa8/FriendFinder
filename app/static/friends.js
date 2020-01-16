$(document).ready(function () {
    $("#match").hide();
    function checkForm() {
        var canSubmit = true;
        if ($("#fullname").val() == "" || $("#image").val() == "") {
            canSubmit = false;
        }

        $("select.form-control").each(function () {
            if ($(this).val() == 0) {
                canSubmit = false;
            }

        });
        if (canSubmit) {
            $("#submit").removeAttr("disabled");
        }
    }


    $(".form-control").on("change", function () {
        var answer = ($(this).val())
        //console.log(answer);
        checkForm();
    });

    $("#submit").on("click", function (event) {
        $("#surveyform").hide();

        event.preventDefault();

        var answerArray = { name: "", photo: "", scores: [] };

        $(".form-control").each(function () {
            var id = $(this).attr("id");

            if (id === "fullname") {
                answerArray["name"] = $(this).val();
            }
            else if (id === "image") {
                answerArray["photo"] = $(this).val();
            }
            else if ($(this).is("select")) {
                answerArray.scores.push(parseInt($(this).val()));
            }

        });
        //console.log(answerArray);




        var form = $("#surveyform");
        var url = "/api/addprofile";

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function (data) {
                for (i = 0; i < data.length; i++) {
                    var card = $("<div class='card' style='width: 18rem;'>");
                    var cardbody = $("<div class='card-body'>");
                    cardbody.append($("<h5 class='card-title'>You are a match with " + data[i].name + "</h5>"));
                    cardbody.append($("<p class='card-text'>Your match score is " + data[i].score + "</p>"));
                    card.append(cardbody);
                    $("#match").append(card);
                }
                $("#match").show();
            }


        });

    })

});