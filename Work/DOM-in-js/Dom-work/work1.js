function reverseString() {
    let a = document.getElementById("vv").value;
    let b = "";

    for (let i=a.length-1; i>=0; i--){
        b+=a[i];
    }

    document.getElementById("o1").innerText = "" + b ;
}