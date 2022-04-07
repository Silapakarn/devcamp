// Day_3 : Homework 1.6

debugger;
function draw(n) {
    let count = 1
    text = ''; 
        for (let i=1; i<n+1; i++) {
            for (let j=1; j<n+1; j++) {
                text += count;
                count++
                }
                text += '\n';
        }
        console.log(text);
}
draw(3);