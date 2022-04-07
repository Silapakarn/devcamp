// Day_3 : Homework 1.3

function draw(n) {
    text = ''; 
        for (let i=1; i<n+1; i++) {
            for (let j=1; j<n+1; j++) {
                text += j;
                }
                text += '\n';
        }
        console.log(text);
}

draw(4);