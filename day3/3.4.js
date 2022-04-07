// Day_3 : Homework 3.4
debugger;

function draw(n) {

    let arr = [];
    text = ''; 
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= (n - i); j++) {
            arr.push(text += '-');
        }

        for (let k = 0; k < ((2 * i) - 1); k++) {
            arr.push(text += '*');
        }

        for (let g = 1; g <= (n - i); g++) {
            arr.push(text += '-');
        }
        text += "\n";
    }

    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            arr.push(text += '-');
        }

        for (let k = 0; k < ((2 * (n - i)) - 1); k++) {
            arr.push(text += '*');
        }

        for (let g = 0; g < i; g++) {
            arr.push(text += '-');
        }
        text += "\n";
    }
    console.log(text);
    console.log(arr);
}
draw(4);