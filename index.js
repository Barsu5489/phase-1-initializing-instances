class Breakfast{
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}
class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}
class Dinner{
    #desert;
    constructor(salad, soup, entree, desert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#desert = desert
    }
}





// class Dog{
//     constructor(name,breed){
//         this.name = name;
//         this.breed = breed
//     }
// }

// let bigfluffyDog1 = new Dog('Roxy','Dogy Safi');
// let bigfluffyDog2 = new Dog('simba','yaKibonge')
// console.log(bigfluffyDog1.name, `, `+  bigfluffyDog2.name)