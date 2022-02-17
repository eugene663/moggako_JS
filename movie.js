var title = document.getElementsByClassName("title")[0];
var engtitle = document.getElementsByClassName("engtitle")[0];
var img = document.getElementsByClassName("img")[0];
var date = document.getElementsByClassName("date")[0];


function movie(korName, engName, year, imgsrc){
    this.korName = korName;
    this.engName = engName;
    this.year = year;
    this.imgsrc = imgsrc;
}

function spiderman(){
    var m1 = new movie("스파이더맨:노 웨이 홈", "Spider-Man: No Way Home", "2021", 
    "./movie_src/spiderman.gif")

    title.innerHTML = m1.korName;
    engtitle.innerHTML = m1.engName;
    date.innerHTML = m1.year;
    img.src = m1.imgsrc;
}

function harrypotter(){
var m2 = new movie("해리포터 시리즈", "Harry Potter", "2001 ~", 
    "./movie_src/harrypotter.gif")

    title.innerHTML = m2.korName;
    engtitle.innerHTML = m2.engName;
    date.innerHTML = m2.year;
    img.src = m2.imgsrc;
}

function twilight(){
    var m3 = new movie("트와일라잇", "Twilight", "2008", 
    "./movie_src/twilight.gif")

    title.innerHTML = m3.korName;
    engtitle.innerHTML = m3.engName;
    date.innerHTML = m3.year;
    img.src = m3.imgsrc;
}

function summer500(){
    var m4 = new movie("500일의 썸머", "(500) Days of Summer", "2009", 
    "./movie_src/summer.gif")

    title.innerHTML = m4.korName;
    engtitle.innerHTML = m4.engName;
    date.innerHTML = m4.year;
    img.src = m4.imgsrc;
}