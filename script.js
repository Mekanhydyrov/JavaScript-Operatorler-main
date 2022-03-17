// Kişi Bilgileri 
// Oporatörler

let IndexMekan;
let IndexAda;

const kgMekan = 71;
const kgAda = 45;

const heightMekan = 1.72;
const heightAda = 1.55;

IndexAda = (kgAda) / (heightAda * heightAda);
IndexMekan = (kgMekan) / (heightMekan * heightMekan);

console.log(IndexAda, IndexMekan);


// Karşılaştır

let adaHigherIndex = IndexAda > IndexMekan;
let MekanHigherIndex = IndexMekan > IndexAda;

console.log("Adanın kilo indeksi Kivanç'ın kilo Indeksinden daha büyük : " + adaHigherIndex);

console.log("Kıvanç'ın kilo indeksi Ada'nın kilo indeksinden daha büyük: " + MekanHigherIndex);



// Pozisyon
let AdaZayif = (IndexAda >= 0) && (IndexAda <= 18.4);
let AdaNormal = (IndexAda >= 18.5) && (IndexAda <= 24.9);
let AdaKilolu = (IndexAda >= 25) && (IndexAda <= 29.9);
let AdaSisman = (IndexAda >= 30) && (IndexAda <= 34.9);

console.log("Ada Zayıf : " + AdaZayif);
console.log("Ada Normal : " + AdaNormal);
console.log("Ada Kilolu: " + AdaKilolu);
console.log("Ada Şişman : " + AdaSisman);