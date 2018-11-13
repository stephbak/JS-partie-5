var languagesArrayCreation = function (array) {

  return array = ['Html', 'CSS', 'Java', 'PHP'];//possibilité d'utiliser une variable (var languages = ['Html', ...])
}//création nouveau tableau

var numbersArrayCreation = function (array) {

    return array = [0, 1, 2, 3, 4, 5];
}

var ElementReplacement = function (array) {
array.splice(2, 1, 'Javascript');//splice supprime a partir du 3eme élément(un tableau commence par'0), 1 élément et le remplace par "javascrip"
  return array;//autre solution languages[2]= 'Javascript'
}

var AddElementToLanguagesArray = function (languages) {
languages.push('Ruby', 'Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
numbers.unshift(-2, -1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
languages.pop()
  return languages;
}

var stringToArray = function (socialMediaInString) {

  return socialMediaInString.split(',');
}

var arrayToString = function (languages) {

  return languages.join(',');
}

var arraySort = function (socialMedia) {

  return socialMedia.sort();//tri par ordre alphabetique
}

var arrayInvert = function (languages){


  return languages.reverse();
}
