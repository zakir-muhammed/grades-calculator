function checkResult () {
    const name = document.getElementById("studentName").value;
    const marks = parseFloat(document.getElementById("studentMarks").value);
    console.log(marks);
    let grade , status;

    if (marks >= 90) {
        grade = "A+";
    }else if (marks >= 80){
        grade = "A";
    }else if (marks >= 70){
        grade = "B";
    }else if (marks >= 60){
        grade = "B+";
    }else {
        grade = "F";
    }

    if (marks >= 50){
        status = "PASS"
    }else{
        status = "FAILED"
    }

    const result = `
Name: ${name} <br>
Marks: ${marks} <br>
Grade: ${grade} <br>
Status: ${status}
`;


document.getElementById("output").innerHTML = result;
}

