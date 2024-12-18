function calculateBMI() {
   
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid positive numbers for weight and height.');
        return false;
    }

    
    const bmi = (weight / (height * height)).toFixed(2);

    
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else if (bmi >= 30 && bmi < 39.9) {
        category = 'Obesity';
    } else {
        category = 'Severe Obesity';
    }

 
    document.getElementById('bmiValue').innerText = bmi;
    document.getElementById('bmiCategory').innerText = category;
    document.getElementById('result').classList.remove('hidden');

    return false; 
}
