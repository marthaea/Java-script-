// a function that takes a students name and portrays a message
function greetstudent(name) {
    console.log(`Hello ${name}, you are attending the javascript class!`);
}
//example
greetstudent("Martha");

// a function that takes the number of meals and costs per meal, returning the total food expense
function calculateFoodExpense(numMeals, costPerMeal) {
    return numMeals * costPerMeal;
}
//example
const totalExpense = calculateFoodExpense(3,5000);
console.log(totalExpense);

// A FUNCTION THAT CALCULATES THE AVERAGE DAILY WATER USAGE FOR A HOUSEHOLD IN Uganda
function calculateAverageDailyWaterUsage(totalWaterUsage, numPeople) {
    const totalDays = 7
    const averageDailyWaterUsage = totalWaterUsage /totalDays;
    return averageDailyWaterUsage;
}
const totalWaterUsage = 1000;
const numPeople = 4;
const averageDailyWaterUsage = calculateAverageDailyWaterUsage(totalWaterUsage, numPeople)
console.log(averageDailyWaterUsage);

//An arrow function to calculate the area of a plot of land in Kampala
const calculateArea = (length, width) => {
    return length * width;
}
const area = calculateArea(10, 5);
console.log('The Area of the given plot of land in Uganda is', area)

// A function that returns a profit for a small business
function calculateProfit(sellingPrice, costPrice, numUnitssold) {
    const revenue = sellingPrice * numUnitssold;
    const cost = costPrice * numUnitssold;
    const profit = revenue - cost;
    return profit;
}
// usage example
const sellingPrice = 500;
const costPrice = 300;
const numUnitssold = 20;
const profit = calculateProfit(sellingPrice, costPrice, numUnitssold);
console.log('the profit of the small business is', profit)

//javascript function that calculates the total cost for a given number of data bundles
function calculateinternetCost(numBundles = 1) {
    const costPerBundle = 50000;
    const totalCost = numBundles * costPerBundle;

    return totalCost;
}
//example
console.log(calculateinternetCost(2));

//a recursive function countdown that prints countdown from a given number to 0

function countdown(num) {
    if (num < 0) {
        return;
    }
    console.log(num);
    countdown(num - 1);
}
//example usage
countdown(10);

//A JAVASCRIPT PROGRAM THAT DEMONSTRATES THE DIFFERENCE BETWEEN LOCAL AND GLOBAL VARIABLES
// THE national population of uganda(global variable)
letnationalPopulation = 150; //million people

function calculateRegionalpopulation(RegionalPopulation) {
    // A local variable for the regional population
    let regionalPopulationPercentage;
    regionalPopulationPercentage = (regionalPopulation / nationalPopulation) * 100;

    //print the result
    console.log(`The regional population percentage is ${regionalPopulationPercentage}% of the national population`);
    // modifying the global variable
    nationalPopulation = 95; //million people

    //Print the updated global variable
    console.log(`The updated national population is ${nationalPopulation} million people`);
}
//Call the function with a regional population
calculateRegionalpopulation(10);
//accessing the global variable outside the function
console.log(`The national population is ${nationalPopulation} million people. `);

//an IIFE(immediately invoked function expression) that prints a message
(function() {
    console.log('Welcome to Javascript in Uganda!');
})();

function fetchData(callback) {
    console.log("Fetching data from the server...");
    
    // Simulating a delay using setTimeout
    setTimeout(() => {
        const data = "Sample Data"; // Simulated data from server
        
        // Calling the provided callback function
        callback(data);
    }, 2000); // 2 seconds delay to simulate server response time
}

// Example usage:
fetchData((data) => {
    console.log("Data successfully retrieved from the server:", data);
});

//Calculating income for rush hour
function calculateIncome(kilometers, isRushHour) {
    const ratePerKilometer = 2000; // UGX 2,000 per kilometer
    const rushHourBonusMultiplier = 1.25; // 25% bonus during rush hour(stating the percentage bonus)
    
    let totalIncome = kilometers * ratePerKilometer;
    
    // Applying rush hour bonus 
    if (isRushHour) {
        totalIncome *= rushHourBonusMultiplier;
    }
    
    return totalIncome;
}

// Example usage:
const kilometersTraveled = 30; // an example-30 kilometers traveled in a day
const isRushHour = true; // Boolean value to show that the trip was durin rush hour
const totalIncome = calculateIncome(kilometersTraveled, isRushHour);
console.log(`Total income for the day: UGX ${totalIncome}`);

