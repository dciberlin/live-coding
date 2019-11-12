//Revealing Module Pattern
//This approach ensures all the methods and variables are kept private until explicitly exposed.
var myGradesCalculate = (function () {
    //we keep these variables private inside this closure scope
    let myGrades = [93, 95, 88, 0, 55, 91];

    let average = function () {
        let total = myGrades.reduce(function (accumulator, item) { return accumulator + item; }, 0);
        return 'Your average grade is ' + total / myGrades.length + '.';
    }

    let failing = function () {
        let failingGrades = myGrades.filter(function (item) {
            return item < 70;
        });

        return 'You failed ' + failingGrades.length + ' times.';
    }

    //Explicitly reveal public pointers to the private method/functions that we want to reveal publicly.

    return {
        average: average,
        failing: failing
    }
})();
console.log(myGradesCalculate.average());
console.log(myGradesCalculate.failing());