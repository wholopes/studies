
//var setup
const kelvin = 0;

//calculate Celsius
const celsius = kelvin - 273.15;
console.log(`The temperature in Celsius is ${celsius.toFixed(2)} degrees Celsius.`);

//calculate Fahrenheit
let fahrenheit = celsius * 9/5 + 32;

//round fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is  ${fahrenheit} degrees Fahrenheit.`);

//calculate Newton
let newton = celsius * 33/100;

//round Newton
newton = Math.floor(newton);
console.log(`The temperature is  ${newton} degrees Newton.`);