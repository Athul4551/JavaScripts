function reverseString(str) {
    return str.split('').reverse().join('');
}

let a = document.getElementById("vv");
let b = reverseString(a.value);

document.getElementById("o1").innerHTML = (b);
