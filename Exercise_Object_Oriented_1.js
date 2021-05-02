// Meal Maker
// As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.
// In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!
//1. Create an empty object called menu .
//2. Add _course property to our menu object. This should be an empty object.
//3. Add three properties inside the _course object. These properties will be appetizers, mains and desserts
//4. Create getter and setter methods for the appetizers, mains and desserts
//5. Inside menu, create an empty getter method for the course property
//6. Whitin this getter method, return an object that contains key/value pairs for _course
//7. Inside menu, create a method called .addDishToCourse. This new method should take three parameters courseName,DishName,DishPrice.
//8. The .addDhisToCourse method should create an object called dish which has *name and price properties. The method should then push this dish object into the appropriate array in your menu‘s _courses object based on what courseName was passed in.
//9. Inside menu, create a method called .getRandomDishFromCourse(). This method should take one parameter called courseName.
//10. Inside the method .getRandomDishFromCourse, retrieve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes. Additionally, create a random index using length of the dishes array. Remember to use Math.floor. Then, return the dish located at that index in dishes.
//11. Create a function called .generateRandomMeal(). This funcion will generate a three-course meals and it does not take any parameters. This function should create three variables appetizer, main, dessert. For each of them we just have to call the .getRandomDishFromCourse() method. Then, create a new variable with the total price and return a sentenc with the variables and the total price.
//12. Now, we just have create a menu by adding some appetizers, mains and desserts. Try your program.


const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []    
  },
  get appetizers(){ 
    return this._courses.appetizers;
  },
  get mains(){ 
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
   },
  set appetizers(appetizerInput){ 
   this._courses.appetizers = appetizerInput;
  },
  set mains(mainsInput){
    this._courses.mains = mainsInput;
   },
  set desserts(dessertInput){
    this._courses.desserts = dessertInput;
   },

  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
          name: dishName,
          price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
      let dishes = this._courses[courseName];
      let index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
  },
generateRandomMeal(){
 let AppetizerItem = this.getRandomDishFromCourse('appetizers');
 let MainItem = this.getRandomDishFromCourse('mains');
 let DessertItem = this.getRandomDishFromCourse('desserts');

const totalPrice = AppetizerItem.price + MainItem.price + DessertItem.price;
return `The meal include: ${AppetizerItem.name}, ${MainItem.name}, ${DessertItem.name} \n----------\n Price = ${totalPrice}`;
}
};

//Creating a menu object by adding some dishes
menu.addDishToCourse('appetizers', 'Chips', 2.50);
menu.addDishToCourse('appetizers', 'Mushroom Soup', 3.00);
menu.addDishToCourse('appetizers', 'Ceviche', 4.50);
menu.addDishToCourse('mains', 'Fish and Chips', 12.50);
menu.addDishToCourse('mains', 'Sunday roast', 13.50);
menu.addDishToCourse('mains', 'Pizza', 20.00);
menu.addDishToCourse('desserts', 'Tiramisu', 5.00);
menu.addDishToCourse('desserts', 'Ice cream', 7.50);

//Random meal
const meal = menu.generateRandomMeal();
//Print the meal
console.log(meal);
