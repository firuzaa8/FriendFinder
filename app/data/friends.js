$(document).ready(function () {

     function checkForm() {
        var canSubmit = true;
        if ($("#fullname").val() == "" || $("#image").val() == "") {
            canSubmit = false;
        }

        $("select.form-control").each(function(){
            if ($(this).val() == 0) {
                canSubmit = false;
            }

        });
        if(canSubmit) {
            $("#submit").removeAttr("disabled");
        }
     }


    $(".form-control").on("change", function () {
        var answer = ($(this).val())
         //console.log(answer);
         checkForm();
    });

  $("#submit").on("click", function(event){
    event.preventDefault();

    var answerArray = {name: "", photo: "", scores: []};

    $(".form-control").each(function(){
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
console.log(answerArray);
  })  

});