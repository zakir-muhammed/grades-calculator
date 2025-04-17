function checkResult () {
    const name = document.getElementById("studentName").value;
    const marks = parseFloat(document.getElementById("studentMarks").value);
    console.log(marks);
    let grade , status;

    if (name === "") { errorDiv.textContent = "Name cannot be empty.";
        return;
      }

    if (marks >= 90 && marks <= 100) {
        grade = "A+";
    }else if (marks >= 80){
        grade = "A";
    }else if (marks >= 70){
        grade = "B";
    }else if (marks >= 60){
        grade = "B+";
    }else if (marks >=50) {
        grade = "C"
    }else {
        grade = "F";
    }

    if (marks >= 50){
        status = "PASS"
    }else{
        status = "FAILED"
    }

    if (marks > 100) {
        alert("Marks cannot be more than 100!");
        return;
      }

    const result = `
Name: ${name} <br>
Marks: ${marks} <br>
Grade: ${grade} <br>
Status: ${status}
`;


document.getElementById("output").innerHTML = result;
}

