// Day_3 : Homework 2.3
debugger;

function draw(n) {
    let text = "";

    for (let i = 1; i < n + 1; i++) {
        for (let j = 0; j < n; j++) {
            if (j < i) {
                text += "*";
            } else {
                text += "-";
            }

        }
        text += "\n";
    }


    for (let i = 1; i <= n - 1; i++) { // n = 3
        for (let j = 0; j < n; j++) {
            if (j < (n - i)) {
                text += "*";
            } else {
                text += "-";
            }
        }
        text += "\n";
    }


    console.log(text);
}

draw(4);