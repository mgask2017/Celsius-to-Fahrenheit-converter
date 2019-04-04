//Listen for submit button
document.getElementById('converter-form').addEventListener('submit', function(e){
    
    calculateResults();
    e.preventDefault();
});

//Calculate the results
function calculateResults(e) {
    console.log('calculate conversion...')

    //UI Vars
    const celsiusTemp = document.getElementById('celsius-temp');
    const fahrenheitTemp = document.getElementById('fahrenheit-temp');
    const convertedCelsiusTemp = document.getElementById('converted-celsius-temp');
    const convertedFahrenheitTemp = document.getElementById('converted-fahren-temp');

    //Temp calculations
    const calculateCelsius = parseFloat(celsiusTemp.value) * 9 / 5 + 32;
    const calculateFahrenheit = parseFloat((fahrenheitTemp.value) - 32) * 5 / 9;

    if(calculateCelsius) {
        convertedCelsiusTemp.value = calculateCelsius;
        console.log('Celsius converted = ', calculateCelsius);
    }

    if (calculateFahrenheit) {
        convertedFahrenheitTemp.value = calculateFahrenheit.toFixed(2);
        console.log('Fahrenheit converted = ', calculateFahrenheit.toFixed(2));
    } 
    else {
        console.log('Please check your number values');
    }
    
    

} //end calc func