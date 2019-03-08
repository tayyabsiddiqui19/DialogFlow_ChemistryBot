import { dialogflow } from "actions-on-google";
import * as functions from "firebase-functions"
// Import the appropriate class
const { WebhookClient } = require('dialogflow-fulfillment');

 //Create an instance
const agent = new WebhookClient({request: req, response: res});

const app = dialogflow();

// app.intent("Default Welcome Intent", (conv) => {
//     conv.ask("Hi, I am Chemistry Bot");
// })

app.intent("GetAtomicNumber", (conv, { element }) => {
    let atomicNumber;
    switch (element) {
        case 'Hydrogen': {
            atomicNumber = 1;
            break;
        }

        case 'Helium': {
            atomicNumber = 2;
            break;
        }

        case 'Lithium': {
            atomicNumber = 3;
            break;
        }

        case 'Beryllium': {
            atomicNumber = 4;
            break;
        }

        case 'Boron': {
            atomicNumber = 5;
            break;
        }

        case 'Carbon': {
            atomicNumber = 6;
            break;
        }

        case 'Nitrogen': {
            atomicNumber = 7;
            break;
        }

        case 'Oxygen': {
            atomicNumber = 8;
            break;
        }

        case 'Fluorine': {
            atomicNumber = 9;
            break;
        }

        case 'Neon': {
            atomicNumber = 10;
            break;
        }

        case 'Sodium': {
            atomicNumber = 11;
            break;
        }

        case 'Magnesium': {
            atomicNumber = 12;
            break;
        }

        case 'Aluminum': {
            atomicNumber = 13;
            break;
        }

        case 'Silicon': {
            atomicNumber = 14;
            break;
        }

        case 'Phosphorus': {
            atomicNumber = 15;
            break;
        }

        case 'Sulfur': {
            atomicNumber = 16;
            break;
        }

        case 'Chlorine': {
            atomicNumber = 17;
            break;
        }

        case 'Argon': {
            atomicNumber = 18;
            break;
        }

        case 'Potassium': {
            atomicNumber = 19;
            break;
        }

        case 'Calcium': {
            atomicNumber = 20;
            break;
        }

        case 'Scandium': {
            atomicNumber = 21;
            break;
        }

        case 'Titanium': {
            atomicNumber = 22;
            break;
        }

        case 'Vanadium': {
            atomicNumber = 23;
            break;
        }

        case 'Chromium': {
            atomicNumber = 24;
            break;
        }

        case 'Manganese': {
            atomicNumber = 25;
            break;
        }

        case 'Iron': {
            atomicNumber = 26;
            break;
        }

        case 'Cobalt': {
            atomicNumber = 27;
            break;
        }

        case 'Nickel': {
            atomicNumber = 28;
            break;
        }

        case 'Copper': {
            atomicNumber = 29;
            break;
        }

        case 'Zinc': {
            atomicNumber = 30;
            break;
        }

        case 'Gallium': {
            atomicNumber = 31;
            break;
        }

        case 'Germanium': {
            atomicNumber = 32;
            break;
        }

        case 'Arsenic': {
            atomicNumber = 33;
            break;
        }

        case 'Selenium': {
            atomicNumber = 34;
            break;
        }

        case 'Bromine': {
            atomicNumber = 35;
            break;
        }

        case 'Krypton': {
            atomicNumber = 36;
            break;
        }

        case 'Rubidium': {
            atomicNumber = 37;
            break;
        }

        case 'Strontium': {
            atomicNumber = 38;
            break;
        }

        case 'Yttrium': {
            atomicNumber = 39;
            break;
        }

        case 'Zirconium': {
            atomicNumber = 40;
            break;
        }

        case 'Niobium': {
            atomicNumber = 41;
            break;
        }

        case 'Molybdenum': {
            atomicNumber = 42;
            break;
        }

        case 'Technetium': {
            atomicNumber = 43;
            break;
        }

        case 'Ruthenium': {
            atomicNumber = 44;
            break;
        }

        case 'Rhodium': {
            atomicNumber = 45;
            break;
        }

        case 'Palladium': {
            atomicNumber = 46;
            break;
        }

        case 'Silver': {
            atomicNumber = 47;
            break;
        }

        case 'Cadmium': {
            atomicNumber = 48;
            break;
        }

        case 'Indium': {
            atomicNumber = 49;
            break;
        }

        case 'Tin': {
            atomicNumber = 50;
            break;
        }

        case 'Antimony': {
            atomicNumber = 51;
            break;
        }

        case 'Tellurium': {
            atomicNumber = 52;
            break;
        }

        case 'Iodine': {
            atomicNumber = 53;
            break;
        }

        case 'Xenon': {
            atomicNumber = 54;
            break;
        }

        case 'Cesium': {
            atomicNumber = 55;
            break;
        }

        case 'Barium': {
            atomicNumber = 56;
            break;
        }

        case 'Lanthanum': {
            atomicNumber = 57;
            break;
        }

        case 'Cerium': {
            atomicNumber = 58;
            break;
        }

        case 'Praseodymium': {
            atomicNumber = 59;
            break;
        }

        case 'Neodymium': {
            atomicNumber = 60;
            break;
        }

        case 'Promethium': {
            atomicNumber = 61;
            break;
        }

        case 'Samarium': {
            atomicNumber = 62;
            break;
        }

        case 'Europium': {
            atomicNumber = 63;
            break;
        }

        case 'Gadolinium': {
            atomicNumber = 64;
            break;
        }

        case 'Terbium': {
            atomicNumber = 65;
            break;
        }

        case 'Dysprosium': {
            atomicNumber = 66;
            break;
        }

        case 'Holmium': {
            atomicNumber = 67;
            break;
        }

        case 'Erbium': {
            atomicNumber = 68;
            break;
        }

        case 'Thulium': {
            atomicNumber = 69;
            break;
        }

        case 'Ytterbium': {
            atomicNumber = 70;
            break;
        }

        case 'Lutetium': {
            atomicNumber = 71;
            break;
        }

        case 'Hafnium': {
            atomicNumber = 72;
            break;
        }

        case 'Tantalum': {
            atomicNumber = 73;
            break;
        }

        case 'Tungsten': {
            atomicNumber = 74;
            break;
        }

        case 'Rhenium': {
            atomicNumber = 75;
            break;
        }

        case 'Osmium': {
            atomicNumber = 76;
            break;
        }

        case 'Iridium': {
            atomicNumber = 77;
            break;
        }

        case 'Platinum': {
            atomicNumber = 78;
            break;
        }

        case 'Gold': {
            atomicNumber = 79;
            break;
        }

        case 'Mercury': {
            atomicNumber = 80;
            break;
        }

        case 'Thallium': {
            atomicNumber = 81;
            break;
        }

        case 'Lead': {
            atomicNumber = 82;
            break;
        }

        case 'Bismuth': {
            atomicNumber = 83;
            break;
        }

        case 'Polonium': {
            atomicNumber = 84;
            break;
        }

        case 'Astatine': {
            atomicNumber = 85;
            break;
        }

        case 'Radon': {
            atomicNumber = 86;
            break;
        }

        case 'Francium': {
            atomicNumber = 87;
            break;
        }

        case 'Radium': {
            atomicNumber = 88;
            break;
        }

        case 'Actinium': {
            atomicNumber = 89;
            break;
        }

        case 'Thorium': {
            atomicNumber = 90;
            break;
        }

        case 'Protactinium': {
            atomicNumber = 91;
            break;
        }

        case 'Uranium': {
            atomicNumber = 92;
            break;
        }

        case 'Neptunium': {
            atomicNumber = 93;
            break;
        }

        case 'Plutonium': {
            atomicNumber = 94;
            break;
        }

        case 'Americium': {
            atomicNumber = 95;
            break;
        }

        case 'Curium': {
            atomicNumber = 96;
            break;
        }

        case 'Berkelium': {
            atomicNumber = 97;
            break;
        }

        case 'Californium': {
            atomicNumber = 98;
            break;
        }

        case 'Einsteinium': {
            atomicNumber = 99;
            break;
        }

        case 'Fermium': {
            atomicNumber = 100;
            break;
        }

        case 'Mendelevium': {
            atomicNumber = 101;
            break;
        }

        case 'Nobelium': {
            atomicNumber = 102;
            break;
        }

        case 'Lawrencium': {
            atomicNumber = 103;
            break;
        }

        case 'Rutherfordium': {
            atomicNumber = 104;
            break;
        }

        case 'Dubnium': {
            atomicNumber = 105;
            break;
        }

        case 'Seaborgium': {
            atomicNumber = 106;
            break;
        }

        case 'Bohrium': {
            atomicNumber = 107;
            break;
        }

        case 'Hassium': {
            atomicNumber = 108;
            break;
        }

        case 'Meitnerium': {
            atomicNumber = 109;
            break;
        }

        case 'Darmstadtium': {
            atomicNumber = 110;
            break;
        }

        case 'Roentgenium': {
            atomicNumber = 111;
            break;
        }

        case 'Ununbium': {
            atomicNumber = 112;
            break;
        }

        case 'Ununtrium': {
            atomicNumber = 113;
            break;
        }

        case 'Ununquadium': {
            atomicNumber = 114;
            break;
        }

        case 'Ununpentium': {
            atomicNumber = 115;
            break;
        }

        case 'Ununhexium': {
            atomicNumber = 116;
            break;
        }

        case 'Ununseptium': {
            atomicNumber = 117;
            break;
        }

        case 'Ununoctium': {
            atomicNumber = 118;
            break;
        }

    }
    console.log("Log is Start");
    console.log("Atomic Number", atomicNumber);
    console.log("Log is End");
    conv.ask(`Atomic number of an element "${element}" is "${atomicNumber}"`);

})

app.intent("GetAtomicNumberForKnownElement", (conv, { element }) => {
    let atomicNumber;
    switch (element) {
        case 'Hydrogen': {
            atomicNumber = 1;
            break;
        }

        case 'Helium': {
            atomicNumber = 2;
            break;
        }

        case 'Lithium': {
            atomicNumber = 3;
            break;
        }

        case 'Beryllium': {
            atomicNumber = 4;
            break;
        }

        case 'Boron': {
            atomicNumber = 5;
            break;
        }

        case 'Carbon': {
            atomicNumber = 6;
            break;
        }

        case 'Nitrogen': {
            atomicNumber = 7;
            break;
        }

        case 'Oxygen': {
            atomicNumber = 8;
            break;
        }

        case 'Fluorine': {
            atomicNumber = 9;
            break;
        }

        case 'Neon': {
            atomicNumber = 10;
            break;
        }

        case 'Sodium': {
            atomicNumber = 11;
            break;
        }

        case 'Magnesium': {
            atomicNumber = 12;
            break;
        }

        case 'Aluminum': {
            atomicNumber = 13;
            break;
        }

        case 'Silicon': {
            atomicNumber = 14;
            break;
        }

        case 'Phosphorus': {
            atomicNumber = 15;
            break;
        }

        case 'Sulfur': {
            atomicNumber = 16;
            break;
        }

        case 'Chlorine': {
            atomicNumber = 17;
            break;
        }

        case 'Argon': {
            atomicNumber = 18;
            break;
        }

        case 'Potassium': {
            atomicNumber = 19;
            break;
        }

        case 'Calcium': {
            atomicNumber = 20;
            break;
        }

        case 'Scandium': {
            atomicNumber = 21;
            break;
        }

        case 'Titanium': {
            atomicNumber = 22;
            break;
        }

        case 'Vanadium': {
            atomicNumber = 23;
            break;
        }

        case 'Chromium': {
            atomicNumber = 24;
            break;
        }

        case 'Manganese': {
            atomicNumber = 25;
            break;
        }

        case 'Iron': {
            atomicNumber = 26;
            break;
        }

        case 'Cobalt': {
            atomicNumber = 27;
            break;
        }

        case 'Nickel': {
            atomicNumber = 28;
            break;
        }

        case 'Copper': {
            atomicNumber = 29;
            break;
        }

        case 'Zinc': {
            atomicNumber = 30;
            break;
        }

        case 'Gallium': {
            atomicNumber = 31;
            break;
        }

        case 'Germanium': {
            atomicNumber = 32;
            break;
        }

        case 'Arsenic': {
            atomicNumber = 33;
            break;
        }

        case 'Selenium': {
            atomicNumber = 34;
            break;
        }

        case 'Bromine': {
            atomicNumber = 35;
            break;
        }

        case 'Krypton': {
            atomicNumber = 36;
            break;
        }

        case 'Rubidium': {
            atomicNumber = 37;
            break;
        }

        case 'Strontium': {
            atomicNumber = 38;
            break;
        }

        case 'Yttrium': {
            atomicNumber = 39;
            break;
        }

        case 'Zirconium': {
            atomicNumber = 40;
            break;
        }

        case 'Niobium': {
            atomicNumber = 41;
            break;
        }

        case 'Molybdenum': {
            atomicNumber = 42;
            break;
        }

        case 'Technetium': {
            atomicNumber = 43;
            break;
        }

        case 'Ruthenium': {
            atomicNumber = 44;
            break;
        }

        case 'Rhodium': {
            atomicNumber = 45;
            break;
        }

        case 'Palladium': {
            atomicNumber = 46;
            break;
        }

        case 'Silver': {
            atomicNumber = 47;
            break;
        }

        case 'Cadmium': {
            atomicNumber = 48;
            break;
        }

        case 'Indium': {
            atomicNumber = 49;
            break;
        }

        case 'Tin': {
            atomicNumber = 50;
            break;
        }

        case 'Antimony': {
            atomicNumber = 51;
            break;
        }

        case 'Tellurium': {
            atomicNumber = 52;
            break;
        }

        case 'Iodine': {
            atomicNumber = 53;
            break;
        }

        case 'Xenon': {
            atomicNumber = 54;
            break;
        }

        case 'Cesium': {
            atomicNumber = 55;
            break;
        }

        case 'Barium': {
            atomicNumber = 56;
            break;
        }

        case 'Lanthanum': {
            atomicNumber = 57;
            break;
        }

        case 'Cerium': {
            atomicNumber = 58;
            break;
        }

        case 'Praseodymium': {
            atomicNumber = 59;
            break;
        }

        case 'Neodymium': {
            atomicNumber = 60;
            break;
        }

        case 'Promethium': {
            atomicNumber = 61;
            break;
        }

        case 'Samarium': {
            atomicNumber = 62;
            break;
        }

        case 'Europium': {
            atomicNumber = 63;
            break;
        }

        case 'Gadolinium': {
            atomicNumber = 64;
            break;
        }

        case 'Terbium': {
            atomicNumber = 65;
            break;
        }

        case 'Dysprosium': {
            atomicNumber = 66;
            break;
        }

        case 'Holmium': {
            atomicNumber = 67;
            break;
        }

        case 'Erbium': {
            atomicNumber = 68;
            break;
        }

        case 'Thulium': {
            atomicNumber = 69;
            break;
        }

        case 'Ytterbium': {
            atomicNumber = 70;
            break;
        }

        case 'Lutetium': {
            atomicNumber = 71;
            break;
        }

        case 'Hafnium': {
            atomicNumber = 72;
            break;
        }

        case 'Tantalum': {
            atomicNumber = 73;
            break;
        }

        case 'Tungsten': {
            atomicNumber = 74;
            break;
        }

        case 'Rhenium': {
            atomicNumber = 75;
            break;
        }

        case 'Osmium': {
            atomicNumber = 76;
            break;
        }

        case 'Iridium': {
            atomicNumber = 77;
            break;
        }

        case 'Platinum': {
            atomicNumber = 78;
            break;
        }

        case 'Gold': {
            atomicNumber = 79;
            break;
        }

        case 'Mercury': {
            atomicNumber = 80;
            break;
        }

        case 'Thallium': {
            atomicNumber = 81;
            break;
        }

        case 'Lead': {
            atomicNumber = 82;
            break;
        }

        case 'Bismuth': {
            atomicNumber = 83;
            break;
        }

        case 'Polonium': {
            atomicNumber = 84;
            break;
        }

        case 'Astatine': {
            atomicNumber = 85;
            break;
        }

        case 'Radon': {
            atomicNumber = 86;
            break;
        }

        case 'Francium': {
            atomicNumber = 87;
            break;
        }

        case 'Radium': {
            atomicNumber = 88;
            break;
        }

        case 'Actinium': {
            atomicNumber = 89;
            break;
        }

        case 'Thorium': {
            atomicNumber = 90;
            break;
        }

        case 'Protactinium': {
            atomicNumber = 91;
            break;
        }

        case 'Uranium': {
            atomicNumber = 92;
            break;
        }

        case 'Neptunium': {
            atomicNumber = 93;
            break;
        }

        case 'Plutonium': {
            atomicNumber = 94;
            break;
        }

        case 'Americium': {
            atomicNumber = 95;
            break;
        }

        case 'Curium': {
            atomicNumber = 96;
            break;
        }

        case 'Berkelium': {
            atomicNumber = 97;
            break;
        }

        case 'Californium': {
            atomicNumber = 98;
            break;
        }

        case 'Einsteinium': {
            atomicNumber = 99;
            break;
        }

        case 'Fermium': {
            atomicNumber = 100;
            break;
        }

        case 'Mendelevium': {
            atomicNumber = 101;
            break;
        }

        case 'Nobelium': {
            atomicNumber = 102;
            break;
        }

        case 'Lawrencium': {
            atomicNumber = 103;
            break;
        }

        case 'Rutherfordium': {
            atomicNumber = 104;
            break;
        }

        case 'Dubnium': {
            atomicNumber = 105;
            break;
        }

        case 'Seaborgium': {
            atomicNumber = 106;
            break;
        }

        case 'Bohrium': {
            atomicNumber = 107;
            break;
        }

        case 'Hassium': {
            atomicNumber = 108;
            break;
        }

        case 'Meitnerium': {
            atomicNumber = 109;
            break;
        }

        case 'Darmstadtium': {
            atomicNumber = 110;
            break;
        }

        case 'Roentgenium': {
            atomicNumber = 111;
            break;
        }

        case 'Ununbium': {
            atomicNumber = 112;
            break;
        }

        case 'Ununtrium': {
            atomicNumber = 113;
            break;
        }

        case 'Ununquadium': {
            atomicNumber = 114;
            break;
        }

        case 'Ununpentium': {
            atomicNumber = 115;
            break;
        }

        case 'Ununhexium': {
            atomicNumber = 116;
            break;
        }

        case 'Ununseptium': {
            atomicNumber = 117;
            break;
        }

        case 'Ununoctium': {
            atomicNumber = 118;
            break;
        }

    }
    console.log("Log is Start");
    console.log("Atomic Number", atomicNumber);
    console.log("Log is End");
    conv.ask(`Atomic number of an element "${element}" is "${atomicNumber}"`);

})

app.intent("GetChemicalSymbol", (conv, { element }) => {
    let chemicalSymbol;
    switch (element) {
        case 'Hydrogen': {
            chemicalSymbol = "H";
            break;
        }

        case 'Helium': {
            chemicalSymbol = "He";
            break;
        }

        case 'Lithium': {
            chemicalSymbol = "Li";
            break;
        }

        case 'Beryllium': {
            chemicalSymbol = "Be";
            break;
        }

        case 'Boron': {
            chemicalSymbol = "B";
            break;
        }

        case 'Carbon': {
            chemicalSymbol = "C";
            break;
        }

        case 'Nitrogen': {
            chemicalSymbol = "N";
            break;
        }

        case 'Oxygen': {
            chemicalSymbol = "O";
            break;
        }

        case 'Fluorine': {
            chemicalSymbol = "F";
            break;
        }

        case 'Neon': {
            chemicalSymbol = "Ne";
            break;
        }

        case 'Sodium': {
            chemicalSymbol = "Na";
            break;
        }

        case 'Magnesium': {
            chemicalSymbol = "Mg";
            break;
        }

        case 'Aluminum': {
            chemicalSymbol = "Al";
            break;
        }

        case 'Silicon': {
            chemicalSymbol = "Si";
            break;
        }

        case 'Phosphorus': {
            chemicalSymbol = "P";
            break;
        }

        case 'Sulfur': {
            chemicalSymbol = "S";
            break;
        }

        case 'Chlorine': {
            chemicalSymbol = "Cl";
            break;
        }

        case 'Argon': {
            chemicalSymbol = "Ar";
            break;
        }

        case 'Potassium': {
            chemicalSymbol = "K";
            break;
        }

        case 'Calcium': {
            chemicalSymbol = "Ca";
            break;
        }

        case 'Scandium': {
            chemicalSymbol = "Sc";
            break;
        }

        case 'Titanium': {
            chemicalSymbol = "Ti";
            break;
        }

        case 'Vanadium': {
            chemicalSymbol = "V";
            break;
        }

        case 'Chromium': {
            chemicalSymbol = "Cr";
            break;
        }

        case 'Manganese': {
            chemicalSymbol = "Mn";
            break;
        }

        case 'Iron': {
            chemicalSymbol = "Fe";
            break;
        }

        case 'Cobalt': {
            chemicalSymbol = "Co";
            break;
        }

        case 'Nickel': {
            chemicalSymbol = "Ni";
            break;
        }

        case 'Copper': {
            chemicalSymbol = "Cu";
            break;
        }

        case 'Zinc': {
            chemicalSymbol = "Zn";
            break;
        }

        case 'Gallium': {
            chemicalSymbol = "Ga";
            break;
        }

        case 'Germanium': {
            chemicalSymbol = "Ge";
            break;
        }

        case 'Arsenic': {
            chemicalSymbol = "As";
            break;
        }

        case 'Selenium': {
            chemicalSymbol = "Se";
            break;
        }

        case 'Bromine': {
            chemicalSymbol = "Br";
            break;
        }

        case 'Krypton': {
            chemicalSymbol = "Kr";
            break;
        }

        case 'Rubidium': {
            chemicalSymbol = "Rb";
            break;
        }

        case 'Strontium': {
            chemicalSymbol = "Sr";
            break;
        }

        case 'Yttrium': {
            chemicalSymbol = "Y";
            break;
        }

        case 'Zirconium': {
            chemicalSymbol = "Zr";
            break;
        }

        case 'Niobium': {
            chemicalSymbol = "Nb";
            break;
        }

        case 'Molybdenum': {
            chemicalSymbol = "Mo";
            break;
        }

        case 'Technetium': {
            chemicalSymbol = "Tc";
            break;
        }

        case 'Ruthenium': {
            chemicalSymbol = "Ru";
            break;
        }

        case 'Rhodium': {
            chemicalSymbol = "Rh";
            break;
        }

        case 'Palladium': {
            chemicalSymbol = "Pd";
            break;
        }

        case 'Silver': {
            chemicalSymbol = "Ag";
            break;
        }

        case 'Cadmium': {
            chemicalSymbol = "Cd";
            break;
        }

        case 'Indium': {
            chemicalSymbol = "In";
            break;
        }

        case 'Tin': {
            chemicalSymbol = "Sn";
            break;
        }

        case 'Antimony': {
            chemicalSymbol = "Sb";
            break;
        }

        case 'Tellurium': {
            chemicalSymbol = "Te";
            break;
        }

        case 'Iodine': {
            chemicalSymbol = "I";
            break;
        }

        case 'Xenon': {
            chemicalSymbol = "Xe";
            break;
        }

        case 'Cesium': {
            chemicalSymbol = "Cs";
            break;
        }

        case 'Barium': {
            chemicalSymbol = "Ba";
            break;
        }

        case 'Lanthanum': {
            chemicalSymbol = "La";
            break;
        }

        case 'Cerium': {
            chemicalSymbol = "Ce";
            break;
        }

        case 'Praseodymium': {
            chemicalSymbol = "Pr";
            break;
        }

        case 'Neodymium': {
            chemicalSymbol = "Nd";
            break;
        }

        case 'Promethium': {
            chemicalSymbol = "Pm";
            break;
        }

        case 'Samarium': {
            chemicalSymbol = "Sm";
            break;
        }

        case 'Europium': {
            chemicalSymbol = "Eu";
            break;
        }

        case 'Gadolinium': {
            chemicalSymbol = "Gd";
            break;
        }

        case 'Terbium': {
            chemicalSymbol = "Tb";
            break;
        }

        case 'Dysprosium': {
            chemicalSymbol = "Dy";
            break;
        }

        case 'Holmium': {
            chemicalSymbol = "Ho";
            break;
        }

        case 'Erbium': {
            chemicalSymbol = "Er";
            break;
        }

        case 'Thulium': {
            chemicalSymbol = "Tm";
            break;
        }

        case 'Ytterbium': {
            chemicalSymbol = "Yb";
            break;
        }

        case 'Lutetium': {
            chemicalSymbol = "Lu";
            break;
        }

        case 'Hafnium': {
            chemicalSymbol = "Hf";
            break;
        }

        case 'Tantalum': {
            chemicalSymbol = "Ta";
            break;
        }

        case 'Tungsten': {
            chemicalSymbol = "W";
            break;
        }

        case 'Rhenium': {
            chemicalSymbol = "Re";
            break;
        }

        case 'Osmium': {
            chemicalSymbol = "Os";
            break;
        }

        case 'Iridium': {
            chemicalSymbol = "Ir";
            break;
        }

        case 'Platinum': {
            chemicalSymbol = "Pt";
            break;
        }

        case 'Gold': {
            chemicalSymbol = "Au";
            break;
        }

        case 'Mercury': {
            chemicalSymbol = "Hg";
            break;
        }

        case 'Thallium': {
            chemicalSymbol = "Tl";
            break;
        }

        case 'Lead': {
            chemicalSymbol = "Pb";
            break;
        }

        case 'Bismuth': {
            chemicalSymbol = "Bi";
            break;
        }

        case 'Polonium': {
            chemicalSymbol = "Po";
            break;
        }

        case 'Astatine': {
            chemicalSymbol = "At";
            break;
        }

        case 'Radon': {
            chemicalSymbol = "Rn";
            break;
        }

        case 'Francium': {
            chemicalSymbol = "Fr";
            break;
        }

        case 'Radium': {
            chemicalSymbol = "Ra";
            break;
        }

        case 'Actinium': {
            chemicalSymbol = "Ac";
            break;
        }

        case 'Thorium': {
            chemicalSymbol = "Th";
            break;
        }

        case 'Protactinium': {
            chemicalSymbol = "Pa";
            break;
        }

        case 'Uranium': {
            chemicalSymbol = "U";
            break;
        }

        case 'Neptunium': {
            chemicalSymbol = "Np";
            break;
        }

        case 'Plutonium': {
            chemicalSymbol = "Pu";
            break;
        }

        case 'Americium': {
            chemicalSymbol = "Am";
            break;
        }

        case 'Curium': {
            chemicalSymbol = "Cm";
            break;
        }

        case 'Berkelium': {
            chemicalSymbol = "Bk";
            break;
        }

        case 'Californium': {
            chemicalSymbol = "Cf";
            break;
        }

        case 'Einsteinium': {
            chemicalSymbol = "Es";
            break;
        }

        case 'Fermium': {
            chemicalSymbol = "Fm";
            break;
        }

        case 'Mendelevium': {
            chemicalSymbol = "Md";
            break;
        }

        case 'Nobelium': {
            chemicalSymbol = "No";
            break;
        }

        case 'Lawrencium': {
            chemicalSymbol = "Lr";
            break;
        }

        case 'Rutherfordium': {
            chemicalSymbol = "Rf";
            break;
        }

        case 'Dubnium': {
            chemicalSymbol = "Db";
            break;
        }

        case 'Seaborgium': {
            chemicalSymbol = "Sg";
            break;
        }

        case 'Bohrium': {
            chemicalSymbol = "Bh";
            break;
        }

        case 'Hassium': {
            chemicalSymbol = "Hs";
            break;
        }

        case 'Meitnerium': {
            chemicalSymbol = "Mt";
            break;
        }

        case 'Darmstadtium': {
            chemicalSymbol = "Ds";
            break;
        }

        case 'Roentgenium': {
            chemicalSymbol = "Rg";
            break;
        }

        case 'Ununbium': {
            chemicalSymbol = "Uub";
            break;
        }

        case 'Ununtrium': {
            chemicalSymbol = "Uut";
            break;
        }

        case 'Ununquadium': {
            chemicalSymbol = "Uuq";
            break;
        }

        case 'Ununpentium': {
            chemicalSymbol = "Uup";
            break;
        }

        case 'Ununhexium': {
            chemicalSymbol = "Uuh";
            break;
        }

        case 'Ununseptium': {
            chemicalSymbol = "Uus";
            break;
        }

        case 'Ununoctium': {
            chemicalSymbol = "Uuo";
            break;
        }

    }
    console.log("Log is Start");
    console.log("Chemical Symbol", chemicalSymbol);
    console.log("Log is End");
    conv.ask(`Chemical Symbol of an element "${element}" is "${chemicalSymbol}"`);



})


app.intent("GetChemicalSymbolForKnownElement", (conv, { element }) => {
    
    agent.getContext('context-name');
    console.log(agent.getContext('context-name'))
    
    let chemicalSymbol;
    switch (element) {
        case 'Hydrogen': {
            chemicalSymbol = "H";
            break;
        }

        case 'Helium': {
            chemicalSymbol = "He";
            break;
        }

        case 'Lithium': {
            chemicalSymbol = "Li";
            break;
        }

        case 'Beryllium': {
            chemicalSymbol = "Be";
            break;
        }

        case 'Boron': {
            chemicalSymbol = "B";
            break;
        }

        case 'Carbon': {
            chemicalSymbol = "C";
            break;
        }

        case 'Nitrogen': {
            chemicalSymbol = "N";
            break;
        }

        case 'Oxygen': {
            chemicalSymbol = "O";
            break;
        }

        case 'Fluorine': {
            chemicalSymbol = "F";
            break;
        }

        case 'Neon': {
            chemicalSymbol = "Ne";
            break;
        }

        case 'Sodium': {
            chemicalSymbol = "Na";
            break;
        }

        case 'Magnesium': {
            chemicalSymbol = "Mg";
            break;
        }

        case 'Aluminum': {
            chemicalSymbol = "Al";
            break;
        }

        case 'Silicon': {
            chemicalSymbol = "Si";
            break;
        }

        case 'Phosphorus': {
            chemicalSymbol = "P";
            break;
        }

        case 'Sulfur': {
            chemicalSymbol = "S";
            break;
        }

        case 'Chlorine': {
            chemicalSymbol = "Cl";
            break;
        }

        case 'Argon': {
            chemicalSymbol = "Ar";
            break;
        }

        case 'Potassium': {
            chemicalSymbol = "K";
            break;
        }

        case 'Calcium': {
            chemicalSymbol = "Ca";
            break;
        }

        case 'Scandium': {
            chemicalSymbol = "Sc";
            break;
        }

        case 'Titanium': {
            chemicalSymbol = "Ti";
            break;
        }

        case 'Vanadium': {
            chemicalSymbol = "V";
            break;
        }

        case 'Chromium': {
            chemicalSymbol = "Cr";
            break;
        }

        case 'Manganese': {
            chemicalSymbol = "Mn";
            break;
        }

        case 'Iron': {
            chemicalSymbol = "Fe";
            break;
        }

        case 'Cobalt': {
            chemicalSymbol = "Co";
            break;
        }

        case 'Nickel': {
            chemicalSymbol = "Ni";
            break;
        }

        case 'Copper': {
            chemicalSymbol = "Cu";
            break;
        }

        case 'Zinc': {
            chemicalSymbol = "Zn";
            break;
        }

        case 'Gallium': {
            chemicalSymbol = "Ga";
            break;
        }

        case 'Germanium': {
            chemicalSymbol = "Ge";
            break;
        }

        case 'Arsenic': {
            chemicalSymbol = "As";
            break;
        }

        case 'Selenium': {
            chemicalSymbol = "Se";
            break;
        }

        case 'Bromine': {
            chemicalSymbol = "Br";
            break;
        }

        case 'Krypton': {
            chemicalSymbol = "Kr";
            break;
        }

        case 'Rubidium': {
            chemicalSymbol = "Rb";
            break;
        }

        case 'Strontium': {
            chemicalSymbol = "Sr";
            break;
        }

        case 'Yttrium': {
            chemicalSymbol = "Y";
            break;
        }

        case 'Zirconium': {
            chemicalSymbol = "Zr";
            break;
        }

        case 'Niobium': {
            chemicalSymbol = "Nb";
            break;
        }

        case 'Molybdenum': {
            chemicalSymbol = "Mo";
            break;
        }

        case 'Technetium': {
            chemicalSymbol = "Tc";
            break;
        }

        case 'Ruthenium': {
            chemicalSymbol = "Ru";
            break;
        }

        case 'Rhodium': {
            chemicalSymbol = "Rh";
            break;
        }

        case 'Palladium': {
            chemicalSymbol = "Pd";
            break;
        }

        case 'Silver': {
            chemicalSymbol = "Ag";
            break;
        }

        case 'Cadmium': {
            chemicalSymbol = "Cd";
            break;
        }

        case 'Indium': {
            chemicalSymbol = "In";
            break;
        }

        case 'Tin': {
            chemicalSymbol = "Sn";
            break;
        }

        case 'Antimony': {
            chemicalSymbol = "Sb";
            break;
        }

        case 'Tellurium': {
            chemicalSymbol = "Te";
            break;
        }

        case 'Iodine': {
            chemicalSymbol = "I";
            break;
        }

        case 'Xenon': {
            chemicalSymbol = "Xe";
            break;
        }

        case 'Cesium': {
            chemicalSymbol = "Cs";
            break;
        }

        case 'Barium': {
            chemicalSymbol = "Ba";
            break;
        }

        case 'Lanthanum': {
            chemicalSymbol = "La";
            break;
        }

        case 'Cerium': {
            chemicalSymbol = "Ce";
            break;
        }

        case 'Praseodymium': {
            chemicalSymbol = "Pr";
            break;
        }

        case 'Neodymium': {
            chemicalSymbol = "Nd";
            break;
        }

        case 'Promethium': {
            chemicalSymbol = "Pm";
            break;
        }

        case 'Samarium': {
            chemicalSymbol = "Sm";
            break;
        }

        case 'Europium': {
            chemicalSymbol = "Eu";
            break;
        }

        case 'Gadolinium': {
            chemicalSymbol = "Gd";
            break;
        }

        case 'Terbium': {
            chemicalSymbol = "Tb";
            break;
        }

        case 'Dysprosium': {
            chemicalSymbol = "Dy";
            break;
        }

        case 'Holmium': {
            chemicalSymbol = "Ho";
            break;
        }

        case 'Erbium': {
            chemicalSymbol = "Er";
            break;
        }

        case 'Thulium': {
            chemicalSymbol = "Tm";
            break;
        }

        case 'Ytterbium': {
            chemicalSymbol = "Yb";
            break;
        }

        case 'Lutetium': {
            chemicalSymbol = "Lu";
            break;
        }

        case 'Hafnium': {
            chemicalSymbol = "Hf";
            break;
        }

        case 'Tantalum': {
            chemicalSymbol = "Ta";
            break;
        }

        case 'Tungsten': {
            chemicalSymbol = "W";
            break;
        }

        case 'Rhenium': {
            chemicalSymbol = "Re";
            break;
        }

        case 'Osmium': {
            chemicalSymbol = "Os";
            break;
        }

        case 'Iridium': {
            chemicalSymbol = "Ir";
            break;
        }

        case 'Platinum': {
            chemicalSymbol = "Pt";
            break;
        }

        case 'Gold': {
            chemicalSymbol = "Au";
            break;
        }

        case 'Mercury': {
            chemicalSymbol = "Hg";
            break;
        }

        case 'Thallium': {
            chemicalSymbol = "Tl";
            break;
        }

        case 'Lead': {
            chemicalSymbol = "Pb";
            break;
        }

        case 'Bismuth': {
            chemicalSymbol = "Bi";
            break;
        }

        case 'Polonium': {
            chemicalSymbol = "Po";
            break;
        }

        case 'Astatine': {
            chemicalSymbol = "At";
            break;
        }

        case 'Radon': {
            chemicalSymbol = "Rn";
            break;
        }

        case 'Francium': {
            chemicalSymbol = "Fr";
            break;
        }

        case 'Radium': {
            chemicalSymbol = "Ra";
            break;
        }

        case 'Actinium': {
            chemicalSymbol = "Ac";
            break;
        }

        case 'Thorium': {
            chemicalSymbol = "Th";
            break;
        }

        case 'Protactinium': {
            chemicalSymbol = "Pa";
            break;
        }

        case 'Uranium': {
            chemicalSymbol = "U";
            break;
        }

        case 'Neptunium': {
            chemicalSymbol = "Np";
            break;
        }

        case 'Plutonium': {
            chemicalSymbol = "Pu";
            break;
        }

        case 'Americium': {
            chemicalSymbol = "Am";
            break;
        }

        case 'Curium': {
            chemicalSymbol = "Cm";
            break;
        }

        case 'Berkelium': {
            chemicalSymbol = "Bk";
            break;
        }

        case 'Californium': {
            chemicalSymbol = "Cf";
            break;
        }

        case 'Einsteinium': {
            chemicalSymbol = "Es";
            break;
        }

        case 'Fermium': {
            chemicalSymbol = "Fm";
            break;
        }

        case 'Mendelevium': {
            chemicalSymbol = "Md";
            break;
        }

        case 'Nobelium': {
            chemicalSymbol = "No";
            break;
        }

        case 'Lawrencium': {
            chemicalSymbol = "Lr";
            break;
        }

        case 'Rutherfordium': {
            chemicalSymbol = "Rf";
            break;
        }

        case 'Dubnium': {
            chemicalSymbol = "Db";
            break;
        }

        case 'Seaborgium': {
            chemicalSymbol = "Sg";
            break;
        }

        case 'Bohrium': {
            chemicalSymbol = "Bh";
            break;
        }

        case 'Hassium': {
            chemicalSymbol = "Hs";
            break;
        }

        case 'Meitnerium': {
            chemicalSymbol = "Mt";
            break;
        }

        case 'Darmstadtium': {
            chemicalSymbol = "Ds";
            break;
        }

        case 'Roentgenium': {
            chemicalSymbol = "Rg";
            break;
        }

        case 'Ununbium': {
            chemicalSymbol = "Uub";
            break;
        }

        case 'Ununtrium': {
            chemicalSymbol = "Uut";
            break;
        }

        case 'Ununquadium': {
            chemicalSymbol = "Uuq";
            break;
        }

        case 'Ununpentium': {
            chemicalSymbol = "Uup";
            break;
        }

        case 'Ununhexium': {
            chemicalSymbol = "Uuh";
            break;
        }

        case 'Ununseptium': {
            chemicalSymbol = "Uus";
            break;
        }

        case 'Ununoctium': {
            chemicalSymbol = "Uuo";
            break;
        }

    }
    console.log("Log is Start");
    console.log("Chemical Symbol", chemicalSymbol);
    console.log("Log is End");
    conv.ask(`Chemical Symbol of an element "${element}" is "${chemicalSymbol}" `);



})



exports.fulfillment = functions.https.onRequest(app);




