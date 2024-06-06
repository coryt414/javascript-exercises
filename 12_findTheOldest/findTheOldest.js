const findTheOldest = function(people) {
    let oldest = ''
    let date = new Date();
    year = date.getFullYear();
    people.forEach(function(person) {
        if (person.yearOfDeath === undefined) {
            person['age'] = year - person.yearOfBirth;
        }
        else {
            person['age'] = person.yearOfDeath - person.yearOfBirth;
        }
        if (oldest === '' || person['age'] > oldest['age']) {
            oldest = person;
        }
    })
    return oldest
    }; 


/*
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

findTheOldest(people)
*/
// Do not edit below this line
module.exports = findTheOldest;
