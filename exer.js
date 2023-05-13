// Iteration 1: Names and Input

let hacker1 = "Xavier";
console.log(`Tha driver's name is ${hacker1}`);

let hacker2 = "Marcos";
console.log(`Tha navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)   ; 
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

//1.
let newHacker1 = "";
for(let i = 0; i < hacker1.length; i++){
 
    if (i > 0){
       newHacker1 = newHacker1+" "+hacker1[i]
    } else {
       newHacker1 = newHacker1+hacker1[i]
    }
}

console.log(newHacker1);

//2. 
let newHacker2 = "";
for(let i = (hacker2.length-1); i >= 0; i--){
        newHacker2 = newHacker2 + hacker2[i]
 }

console.log(newHacker2);

//3. 

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?