// Day_3 : Homework 1.5
debugger;
function draw(n) {
    text = ''; 
        for (let i=n; i>=1; i--) {
            for (let j=n; j>=1; j--) {
                text += i;
                }
                text += '\n';
        }
        console.log(text);
}

draw(4);