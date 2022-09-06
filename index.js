// Code your solutions in this file
const writeCards = (arr, event) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return newArr;
}


console.log(writeCards(["Guadalupe", "Ollie", "Aki"], 'surprise'));

const countDown = (num) => {

    while (num >= 0) {

        console.log(num--);
    }
    
}

console.log(countDown(10));