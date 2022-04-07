// Day_3 : Homework 1.10

debugger;

function draw(n) {

    text = ''; 
        for (let i=1; i <=n; i++) {
            for (let j=1; j<=n; j++) {
                text += i * j;
                }
            text += '\n';
        }
        console.log(text);
}
draw(3);