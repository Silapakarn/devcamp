// Day_3 : Homework 1.12

debugger;

function draw(n) {
    text = ''; 
        for (let i=0; i <n; i++) {
            for (let j=0; j <n; j++) {
                if((i+j) == n-1){
                    text += '_';
                }else{
                    text += '*';
                }
            }
            text += '\n';
        }
        console.log(text);
}
draw(4);