// alert ("Hi! There ");
// let name=prompt("what is your name?");
// if (name){
//     let age =prompt(`Hi ${name} How old are you?`)
//     let email=prompt("what is your email address?")

// }
// if (name){
//     if (age < 12){
//         alert ("Hi! ${name}, you are ${age} years old and you are too young to register. sorry ");
//         }else if (age > 12 && age < 18){
//             alert ("Hi! ${name}, you are ${age} years old and you are too young to register. sorry ");

//         }
// }
// $(name}. Welcome to my paged
// *);
// let age=prompt (May I know your age please,
// $｛fate｝59？）；
// alert( Ok girl, ${age}? Looking good! @)
// let email=prompt (Drop your email address here alert(Hi $(name}, you are ${ag

alert("Hi! There ");

let name = prompt("What is your name?");
let age, email ;
if (name) {
    age = prompt("Hi " + name + " How old are you?")
    email = prompt('What is your email address?')
}
if (age) {
    if (age < 12) {
        alert("Hi " + name + ", you are " + age + " years old and you are too young to register. Sorry.")
    } else if (age >= 12 && age < 18) {
        alert ("Hi " + name + ", you are " + age +  " years old and you have limited options to register ,Sorry.")
    } else if (age >= 18) {
        alert("Hi " + name +  " ,you are " + age +  " years old and you can register for any option.")
    } else {
        alert("Hi " + name + " , you are  " + age + "years old,sorry.")
    }
}else{
    alert(`you have to give me a name!`)
} 
