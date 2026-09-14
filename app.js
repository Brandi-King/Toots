function calculateAverage(score1, score2, score3) {
    let average = (score1 + score2 + score3) / 3;

    return average;
}


// Function that creates the student object
function createStudent() {

    let name = document.getElementById("studentName").value;

    let score1 = Number(document.getElementById("score1").value);
    let score2 = Number(document.getElementById("score2").value);
    let score3 = Number(document.getElementById("score3").value);


    // Parameters INTO the function
    let average = calculateAverage(score1, score2, score3);


    // Multiple properties
    let student = {
        name: name,
        test1: score1,
        test2: score2,
        test3: score3,
        average: average.toFixed(2)
    };


    // Display the object's properties
    document.getElementById("result").innerHTML =
        "<h2>Student Results</h2>" +
        "<p><strong>Name:</strong> " + student.name + "</p>" +
        "<p><strong>Test 1:</strong> " + student.test1 + "</p>" +
        "<p><strong>Test 2:</strong> " + student.test2 + "</p>" +
        "<p><strong>Test 3:</strong> " + student.test3 + "</p>" +
        "<p><strong>Average:</strong> " + student.average + "%</p>";
}
