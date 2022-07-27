"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Months_1 = require("./Months");
const Seasons_1 = require("./Seasons");
const monthsNames = Object.values(Months_1.Months);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const seasonsSouth = {
    [Seasons_1.Seasons.OUTONO]: [Months_1.Months.MARCO, Months_1.Months.ABRIL, Months_1.Months.MAIO, Months_1.Months.JUNHO],
    [Seasons_1.Seasons.INVERNO]: [Months_1.Months.JUNHO, Months_1.Months.JULHO, Months_1.Months.AGOSTO, Months_1.Months.SETEMBRO],
    [Seasons_1.Seasons.PRIMAVERA]: [Months_1.Months.SETEMBRO, Months_1.Months.OUTUBRO, Months_1.Months.NOVEMBRO, Months_1.Months.DEZEMBRO],
    [Seasons_1.Seasons.VERAO]: [Months_1.Months.DEZEMBRO, Months_1.Months.JANEIRO, Months_1.Months.FEVEREIRO, Months_1.Months.MARCO],
};
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const seasonsNorth = {
    [Seasons_1.Seasons.PRIMAVERA]: seasonsSouth[Seasons_1.Seasons.OUTONO],
    [Seasons_1.Seasons.VERAO]: seasonsSouth[Seasons_1.Seasons.INVERNO],
    [Seasons_1.Seasons.OUTONO]: seasonsSouth[Seasons_1.Seasons.PRIMAVERA],
    [Seasons_1.Seasons.INVERNO]: seasonsSouth[Seasons_1.Seasons.VERAO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const month = Object.values(Months_1.Months)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
