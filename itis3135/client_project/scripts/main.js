//JQuery code
  $(document).ready(() => { 
 
    $('#submitBtn').click(() => {

        var value = $('.options:checked').val();
        if (value){
        alert(value);
        }
        else {
            alert("Please select one of the options before you select the submit button");
        }
    });

  });

//JScript

const thumbNail = document.querySelectorAll(".thumbnail");
const defaultImage = document.getElementById("defaultImg");

for ( let i = 0; i < thumbNail.length; i++){
    thumbNail[i].addEventListener("click", 
        function () {
        defaultImage.src = this.src;

    });
}
