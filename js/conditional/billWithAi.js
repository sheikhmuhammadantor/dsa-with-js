// Define pricing tiers in descending order
const tiers = [
    { threshold: 400, rate: 13 },
    { threshold: 200, rate: 8 },
    { threshold: 100, rate: 6 },
    { threshold: 0, rate: 4.2 }
];

// Get and validate user input
// let units = parseFloat(prompt("Enter electricity units consumed:"));
let units = 300;
if (isNaN(units) || units < 0) {
    console.log("Invalid input. Please enter a non-negative number.");
} else {
    let total = 0;
    let remainingUnits = units;
    
    // Iterate through tiers from highest to lowest
    for (const tier of tiers) {
        if (remainingUnits <= 0) break;
        const unitsInTier = Math.max(remainingUnits - tier.threshold, 0);
        if (unitsInTier > 0) {
            total += unitsInTier * tier.rate;
            remainingUnits -= unitsInTier;
        }
    }
    
    // Handle the base tier (0-100 units)
    total += remainingUnits * tiers[tiers.length - 1].rate;
    
    console.log(`Total Electricity Bill: ₹${total.toFixed(2)}`);
}