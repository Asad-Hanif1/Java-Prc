// console.log('hello arrays');

// let
// const


// var username = 'Asad Hanif'; // declare
// var username = 'Haider';// redeclared
// username = 'Danish'; // reassign

// console.log(username)

// var
// redeclare
// reassign


// let username;
// username = 'Asad Hanif'

// let username = 'Asad Hanid';
// let username = 'dnaish '
// username = 'Haider'
// console.log(username)



// const username = 'Asad Hanif';
// username = 'usman'
// console.log(username);





// let city1 = 'karachi';
// let city2 = 'Pakpattan';
// let city3 = 'Arifwala';


// let cities = ['karachi' , 'Pakpattan' , 'Arifwala' , 'faislabad' , 'hyderabad' , 'sheikarpur'];
// let cities = ['karachi' , 'Pakpattan' , 'Arifwala' , 'faislabad' , 'hyderabad' , 'sheikarpur' , 20 , true , ['fb area' , 'liyari' , 'golimar']];
// console.log(cities[8][2]);
// console.log(cities.length);
// console.log(cities[3]);
// console.log(typeof(cities))









// const user = ['Asad Hanif' , 'Danish' , 'haider'];
// // console.log(`${user[0]} ${user[2]}`);

// user[0] = 'Danish ';
// user[4] = 'ali'
// console.log(user[3])





// const user = [];
// user[0] = prompt('enter name1')
// user[1] = prompt('enter name2')
// user[2] = prompt('enter name3')
// console.log(user);



// const fruit = 'apple';
// const fruits = ['banana' , 'orange', 'mango' , fruit];
// console.log(fruits);






//push
//pop
//unshift
//shift
//splice
//slice
//split
//join
//concat
//sort
//reverse
//indexof


const fruits = ['banana' , 'orange', 'mango'];
fruits.push('watermelon');
fruits.pop();
fruits.unshift('watermelon')
fruits.shift()

fruits.splice('shurw kaha sa krna ha' , 'kitna delete krna hain' , 'uski jaga kiya rkhna haa')
fruits.splice(2 , 1 , 'strawberry' , 'watermelon' , 'melon' , 'mangoes' , 'guava' , 'nashpati' , 'grapes' , 'anaaar' , 'kinno');
// fruits.splice(1 , 3);
fruits.splice(6 , 2 , 'banana');
fruits[3].pop()
console.log(fruits)


const newArr = fruits.slice(3)
console.log(newArr);




// const names = 'Asad Hanif';
// const arr = names.split(' ')
// console.log(arr);



// const names = ['Asad' , 'Hanif' , 'DH'];
// const str = names.join(' ')
// console.log(str);







//concat
//sort
//reverse
//indexof



// const shop = ['Apple', 'Banana',  'Orange', 'Mango', 'Grape', 'Strawberry']
// console.log(fruits.includes('dafdsfdsfd'));
// console.log(fruits.indexOf('fsdkjfhsdjkfh'));

// fruits.shift();
// fruits.unshift('Guaava' , 'Faalsa');
// fruits.unshift('Apple');
// fruits.splice(2, 3 ,);
// fruits.pop();
// fruits.push('Watermelon');
// fruits.push('Strawberry');
// fruits.splice(2 , 2);
// fruits.splice(2 , 0 , 'fruit 1' , 'fruit 2');
// fruits.splice(3 , 0 , 'fruit 3' , 'fruit 4');




// console.log(fruits);











const shop = ['Apple', 'Banana',  'Orange', 'Mango', 'Grape', 'Strawberry'];
const input = document.querySelector('#input');
const h2 = document.querySelector('h2');
function getFruits(){
    console.log(input.value)
    if(shop.includes(input.value)){
        console.log('fruit available haa..')
        h2.innerHTML = `${input.value} is available`
    }else{
        console.log('fruit available nahi ha');
        h2.innerHTML = `${input.value} is not available`
    }


    input.value = ''
}