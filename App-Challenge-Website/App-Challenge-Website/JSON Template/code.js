var myJSON, text, obj, thing;
// Storing data:
var myElement = document.getElementById("demo");
var myObj = myElement.innerHTML;
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo2").innerHTML = obj;