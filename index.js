// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
function jsNR1(a, b) {
    if (a < b || a > b) {
        return Math.max(a, b);
    } else {
        return 'abu skaiciai yra lygus '
    }
}
console.log(jsNR1(0, 0));
console.log(jsNR1(-4, -5));
console.log(jsNR1(-5, 6));

// 1. END ^^^^^
console.log('1. END ^^^^');
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// 2. END ^^^^
console.log('2. END ^^^^');
//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}
// 3. END ^^^^
console.log('3. END ^^^^');
//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
for (let i = 0; i < 5; i++) {
    console.log(Math.round(Math.random(i) * 10))
};
// console.log(Math.round(Math.random(i) * 10));
// 4. END ^^^^
console.log('4. END ^^^^');
//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
for (let i = 0; i < 10; i++) {
    console.log(Math.round(Math.random(i) * 10))
    while ((i === i[9]) === 5) {

    }
};
// 5. END ^^^^
console.log('5. END ^^^^');
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

// 6. END ^^^^

