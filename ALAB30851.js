function arraySum(array){
    var x = 0;
    array.forEach(element => { x += element;
    });
    return x;
}

function arrayAverage(array){
    var x = 0;
    array.forEach(element => { x += element;
    });
    return x / array.length;
}

function largestString(array){
    var x = "";
    array.forEach(element => {
        if(element.length > x.length){
            x = element;
        }
    })
    return x;
}

function stringsLongerThan(array, num){
    let i = 0;
    while (i < array.length){
        if(array[i].length <= num){
            array.splice(i, 1);
            i = 0;
            continue;
        }
        i++;
    }
    return array;
}


function recursion(num){
    if(num == 0){
        return;
    }
    console.log(num);
    recursion(num-=1);
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = ["one", "two", "three"];
let array3 = ["Albatross", "Aligator", "Bat", "Bear", "Cat", "Caterpillar", "Kangaroo"];
let num = 4;
let num2 = 8;
console.log("Sum: " + arraySum(array1));
console.log("Average: " + arrayAverage(array1));
console.log("Largest string is " + largestString(array2));
console.log(`The strings longer than ${num} are ${stringsLongerThan(array3, num)}` );
console.log(`Counting down from ${num2}: `);
recursion(8);

// Results:
// Sum: 55
// Average: 5.5
// Largest string is three
// The strings longer than 4 are Albatross,Aligator,Caterpillar,Kangaroo
// Counting down from 8: 
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1