var h3 = document.getElementsByTagName('h3')

var num1 = 10;
console.log(typeof num1)
h3[0].innerHTML += "<br>"+"<br>"+num1

var str1 = "문자열";
console.log(typeof str1)
h3[0].innerHTML += "<br>"+str1

var trueValue = true;
console.log(typeof trueValue)
h3[0].innerHTML += "<br>"+trueValue

var me = {name: "이유진", age: 23};
console.log(typeof me)
h3[0].innerHTML += "<br>"+me

var nullValue = null; 
console.log(typeof nullValue)
//초기 자바스크립트의 오류로, null의 타입은 object로 출력된다.
h3[0].innerHTML += "<br>"+nullValue

var undefinedValue;
console.log(typeof undefinedValue)
h3[0].innerHTML += "<br>"+undefinedValue