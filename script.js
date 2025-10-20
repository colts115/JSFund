
// 1. Create an array called favoriteFoods with at least 6 foods you love.

const fav_foods = ["steak", "cereal", "doughnuts", "pizza", "chicken", "tacos"];



// 2. Loop through the list and print: "One of my favorite foods is ______."

for (let i = 0; i < fav_foods.length; i++){
  console.log("One of my favorite foods is", fav_foods[i]);
}


// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
for (let i = 0; i < fav_foods.length; i++){
  console.log('my #' + [i+1] + ' favorite food is ' + fav_foods[i]);
}





// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."

function printFoodRecommendation(foodname){
  console.log("Have you ever tried " + foodname+ "?");
  console.log("I always reccomend " + foodname + " to friends.");
  console.log("Trust me, " + foodname + " is delicious.");
  

}



// 4b. Call the function at least 3 times
printFoodRecommendation("steak");
printFoodRecommendation("long john doughnuts");
printFoodRecommendation("cinnamon toast crunch");

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.
let foodWithA = friendFavorites.filter(food => food.includes("a"));
console.log(foodWithA)


// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = [foodWithA];
console.log(foodswithA);


