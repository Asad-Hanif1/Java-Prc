var letter = prompt("Enter a number or string");

if(letter >= 'A' && letter <= 'Z') {
    console.log("This is an Upper Case Letter & Also a string");
}
else if(letter >= 'a' && letter <= 'z') {
    console.log("This is a Lower Case Letter & Also a String");
}
else if(letter >= 48 && letter  <= 57){
    console.log("This is a Number")
}
else {
    console.log("Please Enter a number or string");
}