// Day_3 : Homework 2.6
debugger;

function draw(n) {
    text = '';
    for (let i = 0; i < n; i++) {
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