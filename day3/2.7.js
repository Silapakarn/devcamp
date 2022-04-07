// Day_3 : Homework 2.7
debugger;

function draw(n) {

    let text = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((i + j) >= (n - 1)) {
                text += '*';
            } else {
                text += '-';
            }
        }
        text += '\n';
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j >= i) {
                text += '*';
            } else {
                text += '-';
            }
        }
        text += '\n';
    }

    console.log(text);

}

draw(4);