
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

