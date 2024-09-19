alert("~bakhtawar");

var name = "bakhtawar";
console.log(name);
alert("My name is" + " " + name);

var a = 4;
var b = 2;
var result = a++ + --b - --a + b++ + a + b ;
console.log(result)

var yourfield  = prompt("Enter your field ?");
var yourMarks = prompt("Enter your marks obtained ?");
if (yourfield === "Bio" && yourMarks === "80") { alert(" Congrats! You are Qualified")
}
else if (yourfield === "Bio" &&  yourMarks === "65") {alert("You are Promoted")
  
}
else {
  alert("You are not Qualified")
}