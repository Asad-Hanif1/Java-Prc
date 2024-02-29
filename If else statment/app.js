// console.log(10 > 10 && 6 < 20 && 80 !== 20 )
// console.log(10 > 8 || 10 < 20 || 20 !== 20 )

var percentage = +prompt("Enter Your Percentage");

if(percentage > 100){
    console.log("Enter Correct Percentage")
}else if( percentage >=50  &&  percentage <= 60  ){
    console.log("Your Grade Is C & You Are Pass")
}else if(percentage >=61 && percentage <= 70){
    console.log("Your Grade is A & You Are Pass")
}else if(percentage >=71 && percentage <= 80){
    console.log("Your Grade is A+ & You Are Pass")
}else if(percentage >=81 && percentage <= 90){
    console.log("Your Grade is A+ & You Are Pass")
}else if(percentage >=91 && percentage <=98){
    console.log("Ap Na Top Kai ha puri class ma & You Are Pass")
}
else {
    console.log(percentage)
}