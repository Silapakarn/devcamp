// Day_3 : Homework 1.2
function printRow(n) {
    text = '';
      for (let j=0; j<n; j++) {
        text += '*';
        }
        return text;
      }
  
function draw(n) {
    text = '';
        for (let i=0; i<n; i++) {
            text += printRow(n);
            text += '\n';
            }
        console.log(text);
  }

console.log(draw(2));


