let fruits = ["apple", "banana", "mango"]

function addFruits(fruit, callback) {
    console.log(1)
    setTimeout(function() {
        console.log(2)
        fruits.push(fruit);
        console.log(`add ${fruit} Success`)
        callback()
    }, 500)
}



addFruits("pineapple", function getFruits() {
    console.log(3)
    setTimeout(function() {
        console.log(4)
        console.log(fruits)
    }, 200)
})