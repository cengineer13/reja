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
console.log("================= A-TASK =================")
// /* Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi. */
const result = (letter, word) => {
    let count = 0;
    for (let i = 0; i <= word.length; i++) {
        if (word[i] === letter) count ++;
    }
    console.log(`${word} so'zida ${letter} ${count} marta qatnashgan!!!`);
    return count;
};
console.log(result("e", "engineer"));


// /////////////////-------------------------A-TASK -------------------------/////////////////
console.log("================= B-TASK =================")
 /* Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
string tarkibidagi sonlar miqdorini qaytarsin Masalan: countDigits("ad2a54y79wet0sfgb9")
Yuqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi */

function countDigits(a) {
    let count = 0;
    for (const val of a) {
        if (val >= 0 && val <=9) {
            count++;
        }
    }
    return count;
}
const a = 'ad2a54y79wet0sfgb9'
digits = countDigits("ad2a54y79wet0sfgb9")
console.log(`${a} string tarkibida ${digits} ta raqam mavjud`)