// Day_3 : Homework 2.1
debugger;

function draw(n) {
    text = ''; 
        for (let i=0; i <n; i++) {
            for (let j=0; j <n; j++) {
                if(i == j){
                    text += '*';
                }else if(i < j){
                    text += '-';
                }else{
                    text += '*';
                }
            }
            text += '\n';
        }
        console.log(text);
}
draw(3);