// console.log("Hello World")
// This is the array
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
// console.log(names)

// this loops over the array
for (var i = 0; i < names.length; i++) {
  names[i]
  // console.log(names[i]);
  // get the first letter
  var firstletter = names[i].charAt([0]);
  // console.log(firstletter)
  // change the first letter to lowercase
  firstletter = firstletter.toLowerCase()
  // console.log(firstletter)
  if (firstletter==="j") {
    byeSpeaker.speak();
  } else {
    // console.log("Hello " + names[i])
    helloSpeaker.speak();
  }
}
