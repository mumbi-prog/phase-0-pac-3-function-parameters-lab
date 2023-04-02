//Task1
function introduction(name = "Aki"){
    return(`Hi, my name is ${name}.`)
}
console.log(introduction());
console.log(introduction("Samip"));

//Task2
function introductionWithLanguage(name = "Aki", language = "Ember.js"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
console.log(introductionWithLanguage());
console.log(introductionWithLanguage("Samip" ,"React"));

//Task3
function introductionWithLanguageOptional(name, language = "JavaScript"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
console.log(introductionWithLanguageOptional("Gracie"))