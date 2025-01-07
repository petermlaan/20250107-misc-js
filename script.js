console.log("s1");

// FizzBuzz
/*for (i=1; i<101; i++)
{
    let s = i.toString() + " ";
    if (i % 3 === 0)
        s += "Fizz";
    if (i % 5 === 0)
        s += "Buzz";
    console.log(s);
}*/

// likadana bokstäver
/*const word1 = prompt("Ord 1: ");
const word2 = prompt("Ord 2: ");
res = "";
for (i=0; (i < word1.length) && (i < word2.length); i++)
{
    if (word1[i] === word2[i])
        res += word1[i];
    else
        res += "_";
}
alert("Likadana bokstäver: " + res);*/

// Gissa nummer
let min = 1;
let max = 100;
let guess = 50;
alert("Tänk på ett tal mellan " + min + " och " + max);
const div = document.querySelector("#guess");

console.log("s2");

function low()
{
    min = guess;
    guess = (max + min) / 2 | 0;
    div.innerHTML = guess;
}

function high()
{
    max = guess;
    guess = (max + min) / 2 | 0;
    div.innerHTML = guess;
}

function correct()
{
    alert("Jag visste det!");
}