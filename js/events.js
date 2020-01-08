
//define functions here

// Define a function getIt that does not accept a parameter.
// The function should bind a click event to the p tag.
// When the paragraph is clicked, the function should alert "Hey!".


function getIt() {

    //action you want taken
    document.querySelector('p').addEventListener('click', () => {
        alert("Hey !");
    })
}

// Define a function frameIt that does not accept a parameter.
// The function should bind the load event that adds the class
// tasty to the image to add a red frame to the image.

function frameIt() {



    //var element = document.getElementsByTagName('img');


    $('img').on('load', function() {
      $('img').addClass('tasty')
    });

}


// Define a function pressIt that does not accept a parameter.
// The function should bind a keydown event to the input field of
// the form that alerts a user when they have pressed the G key

function pressIt() {

  $('#typing').on('keydown', function (key) {
      if (key.which == 71) {
          alert('G was pressed');
      }
  });

}

// Define a function submitIt that does not accept a parameter.
// The function should bind a submit event to the form that alerts
// "Your form is going to be submitted now."

function submitIt() {


  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert("Your form is going to be submitted now.");
    return;
  }
    alert("you entered the wrong value");
    return;
  });
}

$(document).ready(function () {

    // call functions here

    getIt();
    frameIt();
    pressIt();
    submitIt();

});
