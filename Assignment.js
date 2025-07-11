                        //   Combine Two Arrays

let firstNames = ["Lil","Big"]
let lastNames = ["Zzz","Boom"]

for(let i = 0; i < firstNames.length; i++) {
    for(let j = 0; j < lastNames.length; j++) {
        console.log(firstNames[i] + " " + lastNames[j]);
    }
}

                        //  Explanation 

// When we run a nested loop, the outer loop goes through each item in array a, and for each item in a, the inner loop goes through every item in b.
// So the output is all combinations of one item from a with one item from b.

// Since a has 3 items and b has 2 items, the total combinations will be 3 × 2 = 6.

                //  Skip Same Indexes

for(let a = 0; a < firstNames.length; a++) {
    for(let b = 0; b < lastNames.length; b++) {
        if(a !== b) {
            console.log(firstNames[a] + " " + lastNames[b]);
        }
    }
}

    //   Convert Userinput to to lowerCase

let userInput = prompt("Enter Somethings")
userInput = userInput.toLowerCase();
alert(userInput);

        // Normalize City Name 

let city = prompt("Enter Your City Name")
city = city.toUpperCase()

if(city === "KARACHI") {
    alert("Welcome To Karachi")
}

                            // Explanation.

// Changing the case of user input ensures consistency when comparing text. Users may type the same word with different capitalization, like "Apple" vs. "apple". Without converting to a standard case, the program may treat them as different. It helps avoid errors and makes validation more accurate. This improves user experience and program reliability.

                // Extracting first 5 characters

let sentence = "JavaScriptRocks"
let extract = sentence.slice(0, 5)
console.log(extract)

            //   Last character of input

let user = prompt("Type")
let userindex = user.lastIndexOf()
console.log(userindex);

                //   Length of userInput

let fullName = prompt("Enter Your Name")
let lengthOfName = fullName.length
console.log("Length" + " " + lengthOfName);

            //    Find position of Name

let story = "The Lazy Dog Sleeps"
let b = story.indexOf("Dog")
console.log(b)

            // Checking a word Exist or not 

let userInput_2 = prompt("Enter a Greeting Word")
if(userInput_2.toLowerCase().indexOf("hello") !== -1) {
    console.log("Word Found");
}

        //   Example
        
        // If the String Not Found they return -1

            //   Finding a String charAt

let word = "JavaScript"
let charat = word.charAt(4)
console.log(charat);

        // Finding position of  a word from User

let userString = ("Type Something")
let position = +prompt("Choose position of Character")
console.log(userString.charAt(position))

    //    Replace characters

let r = "This is a bad example"
let v = r.replace("bad","good")
console.log(v);

        //  Replace "JS" To "JavaScript"

let word_2 = "JS"
let sequence = word_2.replace(/JS/g,"JavaScript")
console.log(sequence);

        //   Replace() To Costumize Template Greeting

let template = "Hello, Name!"
let costumize = template.replace("Name", "Farhan")
alert(costumize)

    //    Round 2.6 using Math.round, Math.ceil and Math.floor

let round = (Math.round(2.6))
console.log(round);
let ceil = (Math.ceil(2.6))
console.log(ceil)
let floor =  (Math.floor(2.6))
console.log(floor);

//  Asks user to input a Number and round it to integer.

let number = +prompt("Type a Decimal Number")
console.log("Rounded:" + Math.round(number));

//    Compare and difference of Math.floor and Math.ceil

let y = Math.floor(-2.9)
let z = Math.ceil(-2.9)
console.log(y)
console.log(z)

                    // Difference

// Floor : always rounds down to the next lower integer, so floor(-2.9) becomes -3.

// Ceil : always rounds up to the next higher integer, so ceil(-2.9) becomes -2.

        // Dice Roll 

let dice = Math.random() * 6
dice = Math.ceil(dice)
console.log("Number:" + " " + dice);

        // Coin toss simulator 

let toss = Math.random() < 0.5 ? "Head" : "Tail";
console.log("Toss Result:" + " " + toss);

    //  Random Password Generator 1000 to 9999.

let pick = Math.random() * 9000 + 1000;
pick = Math.floor(pick);
console.log("Password Generated:" + " " + pick);

    //   Convert String to a  float.

let str = parseFloat("45.67");
console.log(str);

    //   Parse an integer "123px" and getting result.

let parse = parseInt("123px");
console.log(parse);

    //  Parse "abc"

let parse_2 = parseInt("abc");
console.log(parse_2);

    //    Convert Number To String

let favnum = 5;
console.log(typeof String(favnum));

    //  Convert String "2025" to a Number And add 10.

let year = ("2025");
year = +year;
console.log(typeof year + 10);

    //   Difference of parseInt() and ParseFloat()

let part_1 = parseInt(123.45);
console.log(part_1);

let part_2 = Number(123.45);
console.log(part_2);

                    //   Example.

// parseInt(): Converts to integer, removes decimals.

// parseFloat(): Converts to floating-point, keeps decimals.

    //    Display 2 decimal places

let numbers = 123.45678;
let fixed = numbers.toFixed(2);
console.log(fixed);

        // Convert "12.999" to a number and round it to 1 decimal

let have = parseFloat("12.999");
have = have.toFixed(1);
console.log(have);

        //   Ask User to input decimal and display it rounded to 3 Decimal

let input = +prompt("Type a Decimal Number");
let getValue = input.toFixed(3);
console.log(getValue);

        // Display Current Date and Time

let nowDate = new Date();
console.log(nowDate);

        // Extract and display current year

let years = nowDate.getFullYear();
console.log(years);

        //  Display greet based on current time

let hours = nowDate.getHours();
let greet = hours < 12 ? "Good Morning" : "Good Evening";
console.log(greet);

        // Display current Day, Month and year

let noww = new Date();

let day = noww.getDay();
console.log(day);

let month = noww.getMonth();
console.log(month);

let aYear = noww.getFullYear();
console.log(aYear);

    //    Extract Hours and Minutes

let time = new Date()

let hour = time.getHours();
console.log(hour);

let minutes = time.getMinutes();
console.log(minutes);

        //   Creating a Digital Clock

    let digitalClock = new Date()

    let hrs = digitalClock.getHours();
    let mints = digitalClock.getMinutes()
    let sec = digitalClock.getSeconds()

    console.log(`${hrs} : ${mints} : ${sec}`);