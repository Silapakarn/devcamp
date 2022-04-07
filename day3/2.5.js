// Day_3 : Homework 2.5
debugger;

function draw(n) {
    text = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((i + j) >= (n-1)) {
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