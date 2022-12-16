// Pirma užduotis
// ---------------------------------------------------------------------------------------------------------
let studentas_arr = ["Kostas", "Ereksonas", 1, "CodeAcademy", [6, 7, 8]];

function isvedimas(arr) {
    return arr[0] + ' ' + arr[1] + ', mokosi ' + arr[3] + ', ' + arr[2] + ' kurse, jo pažymiai: ' + arr[4];
}

document.getElementById("pirma").innerHTML = isvedimas(studentas_arr);
// ---------------------------------------------------------------------------------------------------------

// Antra užduotis
// ---------------------------------------------------------------------------------------------------------
function tipai(arr) {
    let ats = '';
    for (let i = 0; i < arr.length; i++) {
        ats += 'Parametro \'' + arr[i] + '\' tipas yra \'' + typeof arr[i] + '\'<br>\n';
    }
    return ats;
}

document.getElementById("antra").innerHTML = tipai(studentas_arr);
// ---------------------------------------------------------------------------------------------------------

// Trečia - penkta užduotys
// ---------------------------------------------------------------------------------------------------------
let studentas_obj = {
    vardas: "Kostas",
    pavarde: "Ereksonas",
    kursas: 1,
    istaiga: "CodeAcademy",
    pazymiai: [6, 7, 8]
}
console.log(studentas_obj);
document.getElementById("trecia").innerHTML = "Studento duomenys gali būti pamatyti konsolėje";
// ---------------------------------------------------------------------------------------------------------

// Septinta užduotis
// ---------------------------------------------------------------------------------------------------------
function isvedimas_dot(obj) {
    return obj.vardas + ' ' + obj.pavarde + ', mokosi ' + obj.istaiga + ', ' + obj.kursas + ' kurse, jo pažymiai: ' + obj.pazymiai;
}

function isvedimas_bracket(obj) {
    return obj["vardas"] + ' ' + obj["pavarde"] + ', mokosi ' + obj["istaiga"] + ', ' + obj["kursas"] +
        ' kurse, jo pažymiai: ' + obj["pazymiai"];
}

document.getElementById("septinta_dot").innerHTML = isvedimas_dot(studentas_obj);
document.getElementById("septinta_bracket").innerHTML = isvedimas_bracket(studentas_obj);
// ---------------------------------------------------------------------------------------------------------

// Aštunta užduotis
// ---------------------------------------------------------------------------------------------------------
function pazymiai(obj) {
    let ats = 'Studento pažymiai yra: ';
    for (let i = 0; i < obj["pazymiai"].length; i++) {
        if (i === obj["pazymiai"].length - 1) {
            ats += obj.pazymiai[i] + '.';
        } else {
            ats += obj.pazymiai[i] + ', ';
        }
    }
    return ats;
}

document.getElementById("astunta").innerHTML = pazymiai(studentas_obj);
// ---------------------------------------------------------------------------------------------------------

// Devinta užduotis
// ---------------------------------------------------------------------------------------------------------
function kelimas(obj) {
    let ats = 'Pakelti studento pažymiai yra: ';
    let kiekis = obj["pazymiai"].length;
    for (let i = 0; i < kiekis; i++) {
        if (obj.pazymiai[i] < 10 && i !== kiekis - 1) {
            ats += obj.pazymiai[i] + 1 + ', ';
        } else if (obj.pazymiai[i] < 10 && i === kiekis - 1) {
            ats += obj.pazymiai[i] + 1 + '.';
        } else if (obj.pazymiai[i] === 10 && i !== kiekis - 1) {
            ats += obj.pazymiai[i] + ', ';
        } else if (obj.pazymiai[i] === 10 && i === kiekis - 1) {
            ats += obj.pazymiai[i] + '.';
        }
    }
    return ats;
}

document.getElementById("devinta").innerHTML = kelimas(studentas_obj);
// ---------------------------------------------------------------------------------------------------------

// Dešimta užduotis
// ---------------------------------------------------------------------------------------------------------
function pazymiuSuma(obj) {
    let sum = 0;
    for (let i = 0; i < obj["pazymiai"].length; i++) {
        sum += obj.pazymiai[i];
    }
    let ats = 'Studento pažymių suma yra: ' + sum + '.';
    return ats;
}

document.getElementById("desimta").innerHTML = pazymiuSuma(studentas_obj);
// ---------------------------------------------------------------------------------------------------------

// Vienuolikta užduotis
// ---------------------------------------------------------------------------------------------------------
function sandauga(obj) {
    let mult = 1;
    for (let i = 0; i < obj["pazymiai"].length; i++) {
        mult *= obj.pazymiai[i];
    }
    let ats = 'Studento pažymių sandauga yra: ' + mult + '.';
    return ats;
}

document.getElementById('vienuolikta').innerHTML = sandauga(studentas_obj);
// ---------------------------------------------------------------------------------------------------------

// Dvylikta užduotis
// ---------------------------------------------------------------------------------------------------------
function typeCheck(obj) {
    let ats = '';
    if (typeof obj.kursas === "number") {
        ats = 'Kursas ' + obj["kursas"] + ' yra numeral tipo.';
    } else {
        ats = 'Kursas ' + obj["kursas"] + ' nėra numeral tipo.';
    }
    return ats;
}

document.getElementById("dvylikta").innerHTML = typeCheck(studentas_obj);
// ---------------------------------------------------------------------------------------------------------

// Trylikta užduotis
// ---------------------------------------------------------------------------------------------------------
function check(obj) {
    let ats = '';
    if (obj.kursas === 4 && typeof obj.kursas === "number") {
        ats = 'Studentas mokosi 4 kurse, o kurso reikšmė yra numeral tipo.';
    } else if (obj.kursas !== 4 && typeof obj.kursas === "number") {
        ats = 'Studentas mokosi ne 4, o ' + obj["kursas"] + ' kurse, o kurso reikšmė yra numeral tipo.';
    } else if (obj.kursas === 4 && typeof obj.kursas !== "number") {
        ats = 'Studentas mokosi 4 kurse, o kurso reikšmė yra ne numeral, o ' + typeof obj["kursas"] + ' tipo.';
    } else if (obj.kursas === 4 && typeof obj.kursas !== "number") {
        ats = 'Studentas mokosi ne 4, o ' + obj["kursas"] + ' kurse, o kurso reikšmė yra ne numeral, o ' + typeof obj["kursas"] + ' tipo.';
    }
    return ats;
}

document.getElementById("trylikta").innerHTML = check(studentas_obj);
// ---------------------------------------------------------------------------------------------------------

// Keturiolikta užduotis
// ---------------------------------------------------------------------------------------------------------
function paskutinis(obj) {
    if (obj.kursas === 4) {
        ats = 'Studentas ' + obj["vardas"] + ' ' + obj["pavarde"] + ' yra abiturientas.';
    } else {
        ats = 'Studentui ' + obj["vardas"] + ' ' + obj["pavarde"] + ' dar toli iki mokslų baigimo.';
    }
    return ats;
}

document.getElementById("keturiolikta").innerHTML = paskutinis(studentas_obj);
// ---------------------------------------------------------------------------------------------------------

// Penkiolikta užduotis
// ---------------------------------------------------------------------------------------------------------
function suma(a, b) {
    return a + b;
}

document.getElementById("penkiolikta").innerHTML = 'Skaičių 1 ir 2 suma yra: ' + suma(1, 2);
// ---------------------------------------------------------------------------------------------------------

function suma100() {
    let ats = 0;
    for (let i = 1; i <= 100; i += 2) {
        ats += suma(i, i + 1);
    }
    return ats;
}

document.getElementById("sesiolikta").innerHTML = 'Skaičių nuo 1 iki 100 suma yra: ' + suma100() + '.';
// ---------------------------------------------------------------------------------------------------------

// Šešiolikta užduotis
// ---------------------------------------------------------------------------------------------------------
function elementuSuma(arr, numType) { //even || odd
    let sum = 0;
    if (numType === "even") {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sum += arr[i];
            }
        }
    } else if (numType === "odd") {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                sum += arr[i];
            }
        }
    }
    return sum;
}
// ---------------------------------------------------------------------------------------------------------

// Septyniolikta užduotis
// ---------------------------------------------------------------------------------------------------------
let A = [1, 3, 6, 5, 7, 2, 2, 4, 4, 8];
document.getElementById("septyniolikta_even").innerHTML = 'Lyginių skaičių suma yra: ' + elementuSuma(A, "even") + '.';
document.getElementById("septyniolikta_odd").innerHTML = 'Nelyginių skaičių suma yra: ' + elementuSuma(A, "odd") + '.';
// ---------------------------------------------------------------------------------------------------------