function calcBMI() {
    var weight = document.getElementById('w').value;
    var heightCm = document.getElementById('h').value;

    if (weight > 0 && heightCm > 0) {
        var heightM = heightCm / 100;
        var bmi = weight / (heightM * heightM);

        document.getElementById('res').innerHTML = "Your BMI Result is: " + bmi.toFixed(2);
    } else {
        alert("Please enter weight and height!");
    }
}

function calcCalories() {
    var w = document.getElementById('cw').value;
    var a = document.getElementById('age').value;
    var isMale = document.getElementById('m').checked;
    
    var bmr;
    if(isMale) {
        bmr = (10 * w) + 625 - (5 * a) + 5;
    } else {
        bmr = (10 * w) + 625 - (5 * a) - 161;
    }
    
    document.getElementById('cres').innerHTML = "Estimated Daily Calories: " + bmr;
}