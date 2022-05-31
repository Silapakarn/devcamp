// Day_3 : Homework 3.1
debugger;

function draw(n) {

    let text = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= (n - i); j++) {
            text += "-";
        }

        for (let k = 0; k < ((2 * i) - 1); k++) {
            text += "*";
        }

        for (let g = 1; g <= (n - i); g++) {
            text += "-";
        }
        text += "\n";
    }


    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            text += "-";
        }

        for (let k = 0; k < ((2 * (n - i)) - 1); k++) {
            text += "*";
        }

        for (let g = 0; g < i; g++) {
            text += "-";
        }
        text += "\n";
    }

    console.log(text);

}
draw(4);