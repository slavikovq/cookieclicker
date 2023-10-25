const cookie = document.getElementById('cookie'); // Přidáme ID sušenky, buttonů a textů
const cookie_text = document.getElementById('cookie-text');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const clickPrice = document.getElementById('clickprice');
const farm1price = document.getElementById('farm1price');
const farm2price = document.getElementById('farm2price');
const farma1 = document.getElementById('farma1');
const farma2 = document.getElementById('farma2');

let cookies = 0;
let earnCookie = 1;
let clickUpgPrice = 100;
let farm1UpgPrice = 500;
let farm2UpgPrice = 1500;
let farm1Earn = 0;
let farm2Earn = 150;
let farma1auto;
let farma2auto;

cookie.onclick = () => {
    cookies += earnCookie; //Přidá daný počet sušenek z proměnné earnCookie
    cookie_text.innerText = "Sušenek: "+cookies; //Aktualizuje text
}

btn1.onclick = () => {
    if(cookies>=clickUpgPrice){ //Zkontroluje zda máme dostatek sušenek na nákup 
        cookies -= clickUpgPrice; //Odebere cenu z našich sušenek
        cookie_text.innerText = "Sušenek: "+cookies; 
        earnCookie += 2; //Přidá počet získání sušenek za jeden klik
        clickUpgPrice += 150; //Zvedne cenu upgradu o 150
        clickPrice.innerText = "Cena: "+clickUpgPrice+" sušenek"; //Aktualizuje text buttonu
    }
}

btn2.onclick = () => {
    if(cookies>=farm1UpgPrice){
        cookies -= farm1UpgPrice;
        cookie_text.innerText = "Sušenek: "+cookies; 
        farm1Earn += 70;
        clearInterval(farma1auto);
        farma1auto = setInterval(() => {
            cookies += farm1Earn;
            cookie_text.innerText = "Sušenek: "+cookies; 
        }, 1200);
        farm1UpgPrice += 250;
        farm1price.innerText = "Cena: "+farm1UpgPrice+" sušenek";
        farma1.style.display = "block"; //Změní styl farma1 na display block
    }
}

btn3.onclick = () => {
    if(cookies>=farm2UpgPrice){
        cookies -= farm2UpgPrice;
        cookie_text.innerText = "Sušenek: "+cookies; 
        farm2Earn += 150;
        clearInterval(farma2auto);
        farma2auto = setInterval(() => {
            cookies += farm2Earn;
            cookie_text.innerText = "Sušenek: "+cookies; 
        }, 1200);
        farm2UpgPrice += 1000;
        farm2price.innerText = "Cena: "+farm2UpgPrice+" sušenek";
        farma2.style.display = "block";
    }
}
