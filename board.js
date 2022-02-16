var str = "Hello!!"
var color = ['red','orange','yellow','green','blue','purple'];
var i = 0;
var h1 = document.getElementsByTagName('h1');

function printBoard(){
    if(i < str.length){
        h1[0].innerHTML += str[i];
        h1[0].style.color = color[i];
        i++;
    }
    else{
        i = 0;
        h1[0].innerHTML = "";
    }
}