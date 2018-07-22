//  author: Yong Long

// common functions

function isInteger(obj) {
    return typeof obj === "number" && obj % 1 === 0;
}

function isText(obj) {
    return typeof obj === "string";
}


/////////////    Page 16    /////////////////

function swapping() {
    var num = 42;
    var myname = "yong Long";
    var tmp = num;
    num = myname;
    myname = tmp;
    console.log("num = " + num);
    console.log("myname = " + myname);
}

function print1066() {
    for (var i = -52; i <= 1066; i++) {
        console.log(i);
    }
}

function beHappy() {
    for (var i = 0; i < 98; i++) {
        beCheerful();
    }
}

function beCheerful() {
    console.log("good morning!");
}

function multiple3() {
    for (var i = -300; i <= 0; i += 3) {
        if (i == -3 || i == -6) continue;
        console.log(i);
    }
}

function printInt() {
    var i = 2000;
    while (i <= 5200) {
        console.log(i);
        i++;
    }
}

function ifBirthday(month, day) {
    var myMonth = 4;
    var myDay = 20;
    if (month == myMonth && day == myDay) {
        console.log("How did you know?");
    }
    else {
        console.log("Just another day ....")
    }
}

function leapYear(year) {
    if (year % 400 == 0) {
        console.log(year + " is a lean year");
        return true;
    }
    if (year % 100 == 0) {
        console.log(year + " is not a lean year");
        return false;
    }
    if (year % 4 == 0) {
        console.log(year + " is a lean year");
        return true;
    }
    console.log(year + " is not a lean year");
    return false;
}

function printAndCount() {
    var count = 0;
    for (var i = 512; i <= 4096; i++) {
        if (i % 5 != 0) continue;
        console.log(i);
        count++;
    }
    console.log("total = " + count);
}

function multipleSix() {
    var i = 0;
    while (i < 60000) {
        i += 6;
        console.log(i);
    }
}

function countDojo() {
    for (var i = 1; i <= 100; i++) {
        if (i % 10 == 0) {
            console.log(i + " Coding Dojo");
        }
        else if (i % 5 == 0) {
            console.log(i + " Coding");
        }
        else {
            console.log(i);
        }
    }
}

function printIncoming(incoming) {
    console.log(incoming);
}

function countHuge() {
    var sum = 0;
    for (var i = 0; i <= 300000; i++) {
        sum += i - i;  // sum == 0;
    }
    console.log(sum);
}

function countFour() {
    var i = 16;
    while (i > 0) {
        if (i % 4 == 0) {
            console.log(i);
        }
        i--;
    }
}

function flexCount(lowNum, highNum, mult) {
    if (highNum < lowNum)
        return;
    for (var i = highNum; i >= lowNum; i--) {
        if (i % mult == 0) {
            console.log(i);
        }
    }
}

function finalCount(param1, param2, param3, param4) {
    if (param2 == param3) {
        if (param2 % param1 == 0 && param2 != param4) {
            console.log(param2);
        }
        return;
    }
    while (param2 != param3) {
        if (param2 % param1 == 0 && param2 != param4) {
            console.log(param2);
        }
        if (param2 < param3) {
            param2++;
        }
        else {
            param2--;
        }
    }
}


/////////////    Page 20    /////////////////

function countDown(num) {
    var arr = [];
    if (!isInteger(num) || num < 0) return arr;
    while (num >= 0) {
        arr.push(num);
        num--;
    }
    console.log(arr);
    console.log(arr.length);
    return arr;
}

function printAndReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}

function firstPlusLength(arr) {
    return arr[0] + arr.length;
}

function GreaterThan2nd(arr) {
    if (arr.length < 2) return 0;
    var second = arr[1];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > second) count++;
    }
    return count;
}

function GreaterThan2ndG(arr) {
    var newArr = [];
    if (arr.length < 2) return newArr;
    var second = arr[1];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > second) {
            newArr.push(arr[i]);
            count++;
        }
    }
    return [newArr, count];
}

function lengthAndValue(num1, num2) {
    var arr = [];
    if (num1 <= 0) return arr;
    for (var i = 0; i < num1; i++) {
        arr.push(num2);
    }
    if (num1 == num2) {
        console.log("Jinx!");
    }
    return arr;
}

function fitFirstValue(arr) {
    var size = arr.length;
    if (size == 0) return;
    if (arr[0] > size) {
        console.log("Too big!");
    }
    else if (arr[0] < size) {
        console.log("Too small!");
    }
    else {
        console.log("Just right!");
    }
}

function fahrenheitToCelsius(degree) {
    return (degree - 32) * 5 / 9;
}

function celsiusToFahrenheit(degree) {
    return (9 / 5 * degree) + 32;
}

function sameCelsiusFahrenheit() {
    /*
    45*((x - 32) * 5 / 9) = 45* ( (9 / 5 * x) + 32)
    25*(x-32) = 81*x  +32*45
    (81-25)x=-32*25-32*45
    56x=-32*70
    x=-40
    */
    var x = -32 * 70 / 56;
    return x;
}


/////////////    Page 22    /////////////////

function biggieSize(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) continue;
        arr[i] = "big";
    }
    console.log(arr);
}

function printLowReturnHigh(arr) {

    if (arr.length < 1) return;
    var minNum = arr[0];
    var maxNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (minNum > arr[i]) {
            minNum = arr[i];
        }
        if (maxNum < arr[i]) {
            maxNum = arr[i];
        }
    }
    console.log(minNum);
    return maxNum;

}

function printOneReturnAnother(arr) {
    var size = arr.length;
    for (var i = 1; i < size; i++) {
        console.log(arr[i]);
    }
    for (var i = 0; i < size; i++) {
        if (arr[i] % 2 == 1) {
            return arr[i];
        }
    }
}

function doubleVision(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

function countPositives(arr) {
    var size = arr.length;
    var count = 0;
    for (var i = 0; i < size; i++) {
        if (arr[i] > 0) count++;
    }
    arr[size - 1] = count;
    return arr;
}

function evensAndOdds(arr) {
    var odd = arr[0] - 1;
    var count1 = 0;
    var even = arr[0] - 1;
    var count2 = 0;
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        if (cur % 2 == 1) {
            if (cur != odd) {
                count = 1;
            }
            else if (count == 2) {
                console.log("That’s odd!")
                count = 0;
            }
            else {
                count++;
            }
        }
        if (cur % 2 == 0) {
            if (cur != even) {
                count = 1;
            }
            else if (count == 2) {
                console.log("Even more so!")
                count = 0;
            }
            else {
                count++;
            }
        }
        odd = even = cur;
    }
}

function incrementSeconds(arr) {
    for (var i = 1; i < arr.length; i += 2) {
        arr[i] += 1;
    }
    return arr;
}

function previousLength(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (isText(arr[i])) {
            arr[i] = arr[i].length;
        }
    }
    return arr;
}

function addSevenToMost(arr) {
    var newArr = [];
    for (var i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

function reverseArray(arr) {
    var size = arr.length;
    for (var i = 0; i < size / 2; i++) {
        var tmp = arr[i];
        arr[i] = arr[size - 1 - i];
        arr[size - 1 - i] = tmp;
    }
    return arr;
}

function OutlookNegative(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) newArr.push(-arr[i]);
        else newArr.push(arr[i]);
    }
    return newArr;
}

function alwaysHungry(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            count++;
        }
    }
    if (!count) {
        console.log("I'm hungry");
    }
}

function swapToCenter(arr) {
    var size = arr.length;
    for (var i = 0; i < size / 2; i += 2) {
        var tmp = arr[i];
        arr[i] = arr[size - 1 - i];
        arr[size - 1 - i] = tmp;
    }
    console.log(arr);
}

function scaleArray(arr,num) {
    for(var i=0;i<arr.length;i++) {
        arr[i]*=num;
    }
    return arr;
}