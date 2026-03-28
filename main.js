// 1. Promptlar orqali ma'lumotlarni yig'ish
let name = prompt("Ismingizni kiriting:");
let id = prompt("Space ID kiriting:");
let password = prompt("Space parolingizni kiriting:");

// 2. Ma'lumotlarni object holatiga keltirish
let userSpace = {
    name: name,
    id: id,
    password: password
};

// 3. Konsolga object ko'rinishida chiqarish
console.log(userSpace);
