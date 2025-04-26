let unit = Number(prompt("Enter The Amount : "));
// var unit = 950;
let totalUnitPrice = 0;

if (isNaN(unit) || unit < 0) {
    alert("Please enter a valid positive number for units.");
}

if (unit > 400) {
    let unitUseMoreThan400 = unit - 400;
    totalUnitPrice = 2620;
    totalUnitPrice += (unitUseMoreThan400 * 13);
} else if (unit > 200) {
    let unitUseMoreThan200 = unit - 200;
    totalUnitPrice = 1020;
    totalUnitPrice += (unitUseMoreThan200 * 8);
} else if (unit > 100) {
    let unitUseMoreThan100 = unit - 100;
    totalUnitPrice = 420;
    totalUnitPrice += (unitUseMoreThan100 * 6);
} else if (unit <= 100) {
    totalUnitPrice += (unit * 4.2);
}

console.log(totalUnitPrice);
alert(`Your Total Bill Is : ${totalUnitPrice}`);

// Static Values Comes From :
// 100 * 4.2 = 420
// 100 * 6 = 600
// 200 * 8 = 1600
