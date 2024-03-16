let randomnum = Math.round(Math.random() * 10) + 1;
console.log(randomnum);
let attemp = 0;

function guessing() {
    let number = parseInt(document.getElementById("Guess").value);

    attemp++;
    if (attemp <= 3) {
        if (number == randomnum) {
            document.getElementById("result").innerHTML = ("Congratulation you're won The Game");
        }

        if (number < randomnum) {
            alert("Try a Number Greater than " + number);
        }
        else if (number > randomnum) {
            alert("Try a Number less than " + number);
        }


    }
    else if (attemp>3) {
        document.getElementById("Guess").disabled = true;
        document.querySelector("button").disabled = true;
        alert("Wrong guess!!!!!! Game Over Try again.......");
    }
}