$(document).ready(function(event) {
  $("form#form").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    let wordInput = $("input#submission").val();
    let wordString = wordInput.split("");
    let reverseArray = wordString.reverse();
    let reverseWord = reverseArray.join("");
    if (reverseWord === wordInput) {
      result = ("Yes! " + wordInput + " is a palindrome!");
    } else {
       result = ("No, " + wordInput + " is not a palindrome.")
    }
    $("p").text(result);
  });
 }); 