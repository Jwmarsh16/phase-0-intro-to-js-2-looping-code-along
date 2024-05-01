// Code your solutions in this file




function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++)
    { 
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`; 
        thankYouMessages.push(message); 
    
    }

    return thankYouMessages; 
}


console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));



function countDown() {
    let number = 10; 
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

countDown(5);
