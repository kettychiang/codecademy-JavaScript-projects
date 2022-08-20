// The forcast today is 293 Kelvin
const kelvin = 293;
// Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;
// Fahrenheit = celsius*(9/5)+32
let fahrenheit = celsius * (9 / 5) + 32;
// Convert to Newton
let newton = celsius * (33 / 100);
// Round down Newton
newton = Math.floor(newton);
// Round down fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees newton.`);