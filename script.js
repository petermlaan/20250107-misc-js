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
let startMin = 1;
let startMax = 100;
let curMin;
let curMax;
let guess;
const div = document.querySelector("#guess");

alert("Tänk på ett tal mellan " + curMin + " och " + curMax);
newGame();

function newGame()
{
    curMin = startMin;
    curMax = startMax;
    newguess();
}

function newguess()
{
    guess = (curMax + curMin) / 2 | 0;
    div.innerHTML = guess;
}

function low()
{
    curMin = guess + 1;
    newguess();
}

function high()
{
    curMax = guess - 1;
    newguess();
}

function correct()
{
    alert("Jag visste det!");
}