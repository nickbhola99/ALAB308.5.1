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
console.log(arraySum(array1));
console.log(arrayAverage(array1));
console.log(largestString(array2));
console.log(stringsLongerThan(array3, num));
recursion(8);


