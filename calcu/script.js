var mem = [];

function inputNumber(a){
    display = document.getElementById("textDisplay")

    if(display.value != "0"){
        display.value = display.value + a.toString();
    }
    else{
        display.value = a.toString()
    }
}

function clearInput(){
    display = document.getElementById("textDisplay");

    display.value = " ";
}


function addNums(){
    display = document.getElementById("textDisplay");
    mem.push(parseInt(display.value));
    display.value = "0";

    mem.push(1);
}

function subNums(){
    display = document.getElementById("textDisplay");
    mem.push(parseInt(display.value));
    display.value = "0";

    mem.push(2);
}

function mulNums(){
    display = document.getElementById("textDisplay");
    mem.push(parseInt(display.value));
    display.value = "0";

    mem.push(3);
}

function divNums(){
    display = document.getElementById("textDisplay");
    mem.push(parseInt(display.value));
    display.value = "0";

    mem.push(4);
}

function delDisplay(){
    display = docuement.getElementByID("textDisplay");
    mem.pop(parseInt(display.value));
}

function equalDisplay(){
    display = document.getElementById("textDisplay");
    
    op = mem.pop();
    var res;

    switch(op){
        case 1:
            res = mem.pop() + parseInt(display.value);
            display.value = res.toString();
            break;
        case 2:
            res = mem.pop() - parseInt(display.value);
            display.value = res.toString();
            break;
        case 3:
            res = mem.pop() * parseInt(display.value);
            display.value = res.toString();
            break;
        case 4:
            res = mem.pop() / parseInt(display.value);
            display.value = res.toString();
            break;
    }
}


