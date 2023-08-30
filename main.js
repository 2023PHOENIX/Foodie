/*
- [ ]  list all the food items
- [ ]  list all the food items with category vegetables
- [ ]  list all the food items with category fruit
- [ ]  list all the food items with category protien
- [ ]  list all the food items with category nuts
- [ ]  list all the food items with category grains
- [ ]  list all the food items with category dairy
- [ ]  list all the food items with calorie above 100
- [ ]  list all the food items with calorie below 100
- [ ]  list all the food items with highest protien content to lowest
- [ ]  list all the food items with lowest cab content to highest
*/

import FoodJson from './Food.json' assert {type: 'json'};




// function to get all the unique food items.

const uniqueFoodItems = () => {

    const unqiueFoodSet = new Set();
    FoodJson.forEach(food => {
        unqiueFoodSet.add(food.foodname);
    })


    return Array.from(unqiueFoodSet);

}


console.log("unique Food Item", uniqueFoodItems());


const vegetablesFood = () => {

    return FoodJson.filter(food => food.category === 'Vegetable');
}

console.log("vegetable food " ,vegetablesFood());

const fruitsFood = () => {
    return FoodJson.filter(food=>food.category === 'Fruit');
}

console.log("Fruit Food ",fruitsFood());

const nutsFood = () => {
    return FoodJson.filter(food => food.category === 'Nuts');
}
console.log("Nuts Food", nutsFood());


const grainsFood = () => {

    return FoodJson.filter(food => food.category === 'Grain');
}
console.log("grain Food" ,grainsFood())


const dairyFood = () => {   
    return FoodJson.filter(food => food.category === 'Dairy');
}

console.log("dairy food ",dairyFood())

const calorieAbove100 = () => {
    return FoodJson.filter(food => food.calorie >= 100);
}

console.log("calories above 100 ",calorieAbove100())
const calorieBelow100 = () => {
    return FoodJson.filter(food => food.calorie < 100);
}

console.log("calories below 100 ",calorieBelow100())


const sortedProtein = () => {

    return FoodJson.sort((a,b)=> b.protiens - a.protiens );

}

console.log('sorted protien', sortedProtein());


const sortedCarbs = () => {

    return FoodJson.sort((a,b) => a.cab - b.cab);
}

console.log("Sorted Carb",sortedCarbs());