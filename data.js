function obliczanie2()
{
var dzisiaj = new Date();
var dzien = dzisiaj.getDate();
if(dzien<10) dzien = "0"+dzien;
var miesiac = dzisiaj.getMonth()+1; // dodajemy +1, bo nie mamy miesiaca o liczbie 0
if(miesiac<10) miesiac = "0"+miesiac;
var rok = dzisiaj.getFullYear();
document.getElementById("data").innerHTML = dzien+"."+miesiac+"."+rok+"  "
setTimeout("obliczanie()",1000);
}