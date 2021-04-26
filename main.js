var arabic = document.getElementById("arabic");
var english = document.getElementById("english");
var title = document.getElementById("title");
var welcome = document.getElementById("welcome");
var myname = document.getElementById("name");
var name2 = document.getElementById("name2");
var age = document.getElementById("age");
var country = document.getElementById("country");
var itemText = document.getElementById("item-text");

arabic.onclick = ()=>{
    run_Lang("arabic");
    localStorage.setItem("Lang" , "arabic");
}
english.onclick = ()=>{
    run_Lang("english");
    localStorage.setItem("Lang" , "english");
}
onload = ()=>{
    run_Lang(localStorage.getItem("Lang"));
}
function run_Lang(langues) {
    if (langues === "arabic") {
    title.innerHTML = "يوبا الواليدي";
    welcome.innerHTML = ".مرحبا بكم في موقعي";
    myname.innerHTML = "يوبا الواليدي";
    name2.innerHTML = "الإسم : يوبا الواليدي ";
    age.innerHTML = "العمر : 14 سنة";
    country.innerHTML = " البلد : المغرب";
    itemText.innerHTML = ".أحب البرمجة و الغرافيك ديزاين";
    }
    else if(langues === "english"){
        title.innerHTML = "Y.Eloualidi";
        welcome.innerHTML = "Welcome To My Website.";
        myname.innerHTML = "Yuba Eloualidi";
        name2.innerHTML = "Yuba Eloualidi";
        age.innerHTML = "14 ans";
        country.innerHTML = "Morroco";
        itemText.innerHTML = "I love Coding and Grafic Design.";
    } 
}