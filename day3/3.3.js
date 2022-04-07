// Day_3 : Homework 3.3
debugger;

function draw(n) {
    let arr = [];
    text = ''; 
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if(i == j){
                   arr.push(text += '*');
                }else if(i < j){
                    arr.push(text += '-');
                }else{
                    arr.push(text += '*');
                }
            }
            text += '\n';
        }
        console.log(text);
        console.log(arr);
}
draw(4);
