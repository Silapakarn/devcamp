// Day_3 : Homework 2.4
debugger;

function draw(n) {
    let text = "";

    for (let i = 1; i < n + 1; i++) {
        for (let j = 0; j < n; j++) {
            if (j < i) {
                text += i;
            } else {
                text += "-";
            }
        }
        text += "\n";
    }
    
    debugger;
    for (let i = (n - 1); i >= 1; i--) {
        for (let j = n; j >= 1; j--) {
            if (j > (n - i)) {
                text += i;
            } else {
                text += "-";
            }
        }
        text += '\n';
    }
    console.log(text);
}

draw(4);