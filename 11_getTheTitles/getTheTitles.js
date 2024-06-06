const getTheTitles = function(books) {
    answer = [];
    books.forEach((element) => {
        answer.push(element.title);
        console.log(element);
    });
    return answer
};

// Do not edit below this line
module.exports = getTheTitles;
