function draw(n){
    text = '';
    let count = 2;
    for (let i = 0; i < n; i++){
        for (let j = n; j > n-1; j--){
            text += count;
            count += 2;
        }
        text += '\n';
    }
    console.log(text);
}

draw(4);