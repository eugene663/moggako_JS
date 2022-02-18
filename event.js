var mogakko = new phoneNum("모각코", "010-2222-4444");
var phoneName = document.getElementsByTagName("h1")[0];
var number = document.getElementsByTagName("h2")[0];

function phoneNum(name, num){
    this.name = name;
    this.num = num;
}

function call(){
    setTimeout(printNum, 2000);
}

function printNum(){
    phoneName.innerHTML = mogakko.name;
    number.innerHTML = mogakko.num;
}