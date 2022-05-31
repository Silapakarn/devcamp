// Day_3 : Homework 2.10
debugger;

function draw(n) {

    let text = "";
    for (let i = 0; i < n; i++) {
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