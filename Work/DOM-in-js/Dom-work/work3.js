function add(){
    let a = document.getElementById("input1").value;
    console.log(a);
    
    let b = document.getElementById("input2").value;
    console.log(b);

    let c = document.getElementById("input3").value;
    console.log(c);

    document.getElementById("o1").innerText = "no:" + a;
    document.getElementById("o2").innerText = "name:" + b;
    document.getElementById("o3").innerText = "age:" + c;

}       