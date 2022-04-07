// Day_3 : Homework 2.8
debugger;

function draw(n) {

    let count = 1;
    let text = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((i + j) >= (n - 1)) {
                text += count;
                count++
            } else {
                text += '-';
            }
        }
        text += '\n';
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j >= i) {
                text += count;
                count++
            } else {
                text += '-';
            }
        }
        text += '\n';
    }
    console.log(text);
}

draw(4);