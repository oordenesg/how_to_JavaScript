// Meal Maker
// As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

// In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!


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
