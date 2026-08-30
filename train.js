console.log("Jack Ma maslahatlari!!!")
const list = [
    "Yaxshi talaba bo'ling", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
    "O'zingiz ishlashni boshlang", // 30-40
    "Siz kuchli bo'lgan narsani qiling", // 40 - 50
    "Yoshlarga investitsiya qiling", // 50 - 60
    "Endi dam oling. Foydasi yo'q baribir" // 60
]

function maslahatBering(a, callback) {
    if (typeof a !== 'number' || a <= 0) callback("insert a proper number", null);
    else if (a > 0 && a <= 20) callback(null, list[0]);
    else if (a >= 21 && a <= 30) callback(null, list[1]);
    else if (a >= 31 && a <= 40) callback(null, list[2]);
    else if (a >= 41 && a <= 50) callback(null, list[3]);
    else if (a >= 51 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(()=> {
            callback(null, list[5]);
        }, 3000);
    }
};
console.log("Passed 1")
maslahatBering(65, (err, data) => {
    if (err) console.log("Error:", err);
    else {
        console.log("Data:", data)
    }
});
console.log("Passed 2")


/////////////////-------------------------A-TASK -------------------------/////////////////
/* Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi. */
const result = (letter, word) => {
    let count = 0;
    for (let i = 0; i <= word.length; i++) {
        if (word[i] === letter) count ++;
    }
    console.log(`${word} so'zida ${letter} ${count} marta qatnashgan!!!`);
    return count;
};
console.log(result("e", "engineer"));