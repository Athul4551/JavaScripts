
function add(){
    let a = document.getElementById("input1")
    let b = document.getElementById("input2")
    let c = parseInt(a.value) + parseInt(b.value)
    console.log(c.value);
    console.log(isNaN(c) ? "143" : c);
    
    document.getElementById("o1").innerHTML=(c)
}

function sub(){
    let a = document.getElementById("input1")
    let b = document.getElementById("input2")
    let c = parseInt(a.value) - parseInt(b.value)
    console.log(c.value);
    document.getElementById("o1").innerHTML=(c)
}

function mul(){
    let a = document.getElementById("input1")
    let b = document.getElementById("input2")
    let c = parseInt(a.value) * parseInt(b.value)
    console.log(c.value);
    document.getElementById("o1").innerHTML=(c)
}

function div(){
    let a = document.getElementById("input1")
    let b = document.getElementById("input2")
    let c = parseInt(a.value) / parseInt(b.value)
    console.log(c.value);
    document.getElementById("o1").innerHTML=(c)
}

function mod(){
    let a = document.getElementById("input1")
    let b = document.getElementById("input2")
    let c = parseInt(a.value) % parseInt(b.value)
    console.log(c.value);
    document.getElementById("o1").innerHTML=(c)
}