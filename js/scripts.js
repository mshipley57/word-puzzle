$(document).ready(function(){
  $("#wordForm").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var sentenceArray = sentence.split("");
    var puzzleArray = []


    for (i = 0; i < sentenceArray.length; i += 1) {

      if (sentenceArray[i] === 'a'){
      }
        else if (sentenceArray[i] === 'e'){
      }
        else if (sentenceArray[i] === 'i') {
      }
        else if (sentenceArray[i] === 'o') {
      }
        else if (sentenceArray[i] === 'u') {
          puzzleArray.push('-');
      }
        else {
        puzzleArray.push(sentenceArray[i]);
      }

      var puzzleString = puzzleArray.join("");
      $(".output").text(puzzleString);

    }
  });
});



    //$(".output").text(reverseArray.join(" "));
