let numbers = [70, 68, 74, 98, 91, 100]
alert("Numbers: " + numbers)

let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
let avg = total / numbers.length;
alert("Rounded Average: " + Math.round(avg))