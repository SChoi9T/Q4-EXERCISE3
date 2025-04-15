// EnterGrade
    function checkGrade() {
        let grade = parseInt(document.getElementById("inputGrade").value);

        if (grade <= 74) {
            window.alert('FAILED :(');
        }
        else if (grade >= 75 && grade <= 79) {
            window.alert('BELOW AVERAGE :[');
        }
        else if (grade >= 80 && grade <= 84) {
            window.alert('AVERAGE :/');
        }
        else if (grade >= 85 && grade <= 89) {
            window.alert('ABOVE AVERAGE :)');
        }
        else if (grade >= 90) {
            window.alert('EXCELLENT :D');
        }
        else {
            window.alert('Please enter a valid number.');
        }
    }