// console.log("Jack Ma maslahatlari!!!")
// const list = [
//     "Yaxshi talaba bo'ling", // 0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//     "O'zingiz ishlashni boshlang", // 30-40
//     "Siz kuchli bo'lgan narsani qiling", // 40 - 50
//     "Yoshlarga investitsiya qiling", // 50 - 60
//     "Endi dam oling. Foydasi yo'q baribir" // 60
// ]

// console.log("================= CALLBACK FUNKSIYA =================")
// function maslahatBering(a, callback) {
//     if (typeof a !== 'number' || a <= 0) callback("insert a proper number", null);
//     else if (a > 0 && a <= 20) callback(null, list[0]);
//     else if (a >= 21 && a <= 30) callback(null, list[1]);
//     else if (a >= 31 && a <= 40) callback(null, list[2]);
//     else if (a >= 41 && a <= 50) callback(null, list[3]);
//     else if (a >= 51 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(()=> {
//             callback(null, list[5]);
//         }, 2000);
//     }
// };
// console.log("Passed 1")
// maslahatBering(31, (err, data) => {
//     if (err) console.log("Error:", err);
//     else {
//         console.log("Data:", data)
//     }
// });
// console.log("Passed 2")


/////////////////-------------------------Asynchronous functionlarni qo'llash -------------------------/////////////////
// console.log("================= ASYNCHRONOUS FUNKSIYA =================")
// async function maslahatBering2(a) {
//     if (typeof a !== 'number' || a <= 0) throw new Error("insert a proper number");
//     else if (a > 0 && a <= 20) return list[0];
//     else if (a >= 21 && a <= 30) return list[1];
//     else if (a >= 31 && a <= 40) return list[2];
//     else if (a >= 41 && a <= 50) return list[3];
//     else if (a >= 51 && a <= 60) return list[4];
//     else { 
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000); 
//         });
// };
// };

// // Call via then/catch 
// console.log("Passed 1")
// maslahatBering2(25).then((data) => {
//     console.log('Then dagi javob:', data);

// }).catch((err) => {
//     console.log("xatolik:", err);
// })
// console.log("Passed 2")

// // Call via asyn / await 
// async function run() {
//     let javob = await maslahatBering2(20);
//     console.log(javob);
//     javob = await maslahatBering2(31);
//     console.log(javob);
//     javob = await maslahatBering2(70);
//     console.log(javob);
//     javob = await maslahatBering2(52);
//     console.log(javob);
//     javob = await maslahatBering2(65);
//     console.log(javob);
// };
// run()

// // SET interval va SetTime out funksiyalarni callback bilan ishlatilishi

// function maslahatBering3(a, callback) {
//     if (typeof a !== 'number' || a <= 0) callback("insert a proper number", null);
//     else if (a > 0 && a <= 20) callback(null, list[0]);
//     else if (a >= 21 && a <= 30) callback(null, list[1]);
//     else if (a >= 31 && a <= 40) callback(null, list[2]);
//     else if (a >= 41 && a <= 50) callback(null, list[3]);
//     else if (a >= 51 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(()=> {
//             callback(null, list[5]);
//         }, 1000);
//     }
// };
// console.log("Passed 1")
// maslahatBering3(65, (err, data) => {
//     if (err) console.log("Error:", err);
//     else {
//         console.log("Callback via setInterval:", data)
//     }
// });
// console.log("Passed 2")


// /////////////////-------------------------A-TASK -------------------------/////////////////
// console.log("================= A-TASK =================")
// // /* Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// // MASALAN countLetter("e", "engineer") 3ni return qiladi. */
// const result = (letter, word) => {
//     let count = 0;
//     for (let i = 0; i <= word.length; i++) {
//         if (word[i] === letter) count ++;
//     }
//     console.log(`${word} so'zida ${letter} ${count} marta qatnashgan!!!`);
//     return count;
// };
// console.log(result("e", "engineer"));


// /////////////////-------------------------A-TASK -------------------------/////////////////
// console.log("================= B-TASK =================")
 /* Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
string tarkibidagi sonlar miqdorini qaytarsin Masalan: countDigits("ad2a54y79wet0sfgb9")
Yuqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi */

// function countDigits(a) {
//     let count = 0;
//     for (const val of a) {
//         if (val >= 0 && val <=9) {
//             count++;
//         }
//     }
//     return count;
// }
// const a = 'ad2a54y79wet0sfgb9'
// digits = countDigits("ad2a54y79wet0sfgb9")
// console.log(`${a} string tarkibida ${digits} ta raqam mavjud`)


// function raqamlarniSanash(string) {
//     let sanoq = 0;
//     for(let char of string) {
//         // isNaN bu berilgan qiymatni songa convert qilsa boladimi yoqmi tekshirib beradi agar convert qilib bolsa false aks holda true qiymat qaytaradi
//         if(!isNaN(char)) {
//             sanoq++;
//         }
//     }
//     console.log(sanoq);
// }

// raqamlarniSanash("asfafaf-2-2,1-2");


// console.log("================= C-TASK =================")
 /* TASK-C

Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
Hamda classning quyidagdek 3'ta metodi bo'lsin:

1) qoldiq
2) sotish
3) qabul

Har bir metod ishga tushgan vaqtda log qilinsin

MASALAN:
const shop = new Shop(4, 5, 2)

shop.qoldiq();
natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud! */

// const moment = require("moment");

// class Shop {
//     constructor(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

//     show_remains() {
//         let vaqt = moment().format("HH:mm");

//         console.log(
//             `Hozirgi ${vaqt} da Non: ${this.non} ta, Lagmon: ${this.lagmon} kg, Cola: ${this.cola} ta`
//         );
//     }

//     sell(product, soni) {
//         if (product === "non") {
//             this.non -= soni;
//         }

//         if (product === "lagmon") {
//             this.lagmon -= soni;
//         }

//         if (product === "cola") {
//             this.cola -= soni;
//         }

//         console.log(`${product} - ${soni} ta sotildi`);
//     }

//     accept(product, soni) {
//         if (product === "non") {
//             this.non += soni;
//         }

//         if (product === "lagmon") {
//             this.lagmon += soni;
//         }

//         if (product === "cola") {
//             this.cola += soni;
//         }

//         console.log(`${product} - ${soni} ta qabul qilindi`);
//     }
// }

// const shop = new Shop(12, 15, 8);

// shop.show_remains();

// shop.sell("non", 6);
// shop.accept("cola", 7);

// shop.show_remains();


console.log("================= D-TASK =================")
/*Ikkita parametra ega function tuzing, va functioning berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq mos kelsa true qiymat qaytarsin.
Masalan: checkContent("mitgroup", "gmtiprou") return true */
function checkContent(word1, word2) {
    console.log(`Tekshiralayotgan so'zlar: 1-${word1} 2-${word2}`)
    const array1 = word1.split("").sort().join();
    const array2 = word2.split("").sort().join();

    return array1 === array2
}
const result2 = checkContent("mitgroup", "gmtiprou");
console.log(result2);

