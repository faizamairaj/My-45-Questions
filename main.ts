// Question 1:
// console.log("Hello World!");

// Question 2:
// let myName = "Hello Faiza";
// let message ="would you like to learn some Python today?!";
// console.log(myName+ "" +message);
  
// // Question  3:
// let personName = "FaizaMairaj";
// //print in lowercase:
// console.log(personName.toLowerCase());
// //print in uppercase:
// console.log(personName.toUpperCase());
// //print in titlecase:
// console.log(personName.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase()));

// Question 4: 
// let famousPerson = "Albert Einstein";
// let message = ` ${famousPerson} once said, "A person who never made a mistake never tried anything new. ".`;
// console.log(message);

// Question 5:
// let famousPerson = "Nelson Mandela";
// let message = ` ${famousPerson} once said, "Education is the most powerful weapon which you can use to change the world".`;
// console.log(message);

// Question 6:
// let personName = "\t Nelson Mandela \n";
// console.log("original Name : "+ personName +" ");

// let strippingName = personName.trim();
// console.log("stripping Name : "+personName+" ");

// Question 7:
// Addition:
// console.log(5+3);
// // Subtraction:
// console.log(10-2);
// // Multiplication:
// console.log(2*4);
// // Division:
// console.log(16/2);

//  Question 8:
// console.log(5+3);
// console.log(10-2);
// console.log(2*4);
// console.log(16/2);

// Question 9:
// let favoriteNumber = 3;
// let message = My Favorite Number is :  ${favoriteNumber};
// console.log(message);

//  Question 10: --> Adding comments in atleast 2 programes.
// in question:8 I have made a program of addition, subtraction, multiplication and division such that the answer in each case 8. The program is repeateed here:
// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);
// // In question:9 i have made a program containing favorite number and a statement, which is once again repeated here:
// let favoriteNumber = 100;
// let message = 'I prefere ' + favoriteNumber + ' out of 100.';
// console.log(message);

// Question 11:
// let names = ['Saba','Zoha','Alishba','Nadia', 'Jannat'];
// names.forEach(array => {
//     console.log(array);
// });

// Question 12:
// let names = ['Saba','Zoha','Alishba','Nadia', 'Jannat'];
// names.forEach(array => {
//     console.log(Hello ${array}! Have a great day.);
// })

// Question 13:
// let motorcycleArray = ['Honda', 'Ducati','Harley Davidson','Yamaha','Kawasaki'];
// motorcycleArray.forEach(motorcycle => {
//     console.log(I Would like to own a "${motorcycle} motorcycle".);
// });

// Question 14:
// let gusetList =[
// {name: 'Tayyaba', statas: 'deceased'},
// {name: 'Maryam', statas:'deceased'},
// {name: 'Dua', statas:'living'},
// ];

// function printInvitation(person) {
//     if (person.statas === 'living') {
//         console.log(Dear ${person.name}, You are invite to dinner. Please join us an evening interesting conversation);
//     } else{
//         console.log(` In memory of ${person.name},  We  would have been honored to have you for dinner. Your legancy lives on. `);
//     }
// }
// gusetList.forEach(printInvitation);

// Question 15:
// let guestList =['Talbiya', 'Inaya','Faiza','Araj'];

// // Guset who can't make it
// let guestUnavailable = "Talbiya";

// // print the guset who can't make it
// console.log(`${guestUnavailable} can't make it to the dinner.`);

// // find index of the guest who can't make it
// let indexOfUnavailableGuest = guestList.indexOf(guestUnavailable);

// // New person to invite
// let newPerson = "Araj";

// // Replace the unavailable guest with the new person
// guestList[indexOfUnavailableGuest] = newPerson;

// // print second set of invitation Message
// guestList.forEach(guest =>{
//     console.log(`Dear ${guest}, you are invited to the dinner .Don't miss it!`);
// })

// Question 16:/ Your initial guest list
// let guests = ["Guest1", "Guest2", "Guest3"];

// // Informing about the bigger dinner table
// console.log("Good news! We found a bigger dinner table.");

// // Add a new guest to the beginning of the array
// guests.unshift("NewGuest1");

// // Add a new guest to the middle of the array
// const middleIndex = Math.floor(guests.length / 2);
// guests.splice(middleIndex, 0, "NewGuest2");

// // Use append() (push in JavaScript) to add a new guest to the end of the array
// guests.push("NewGuest3");

// // Print invitation messages
// guests.forEach(guest => {
//   console.log(`Dear ${guest}, you are invited to dinner.`);
// });

// Question 17:

// let guestList = ['Amna', 'Babi', 'Meerub', 'Daraiba', 'Iqra'];

// console.log("Due to a delay, I can only invite two people for dinner.")
// while (guestList.length > 2) {
//     let removedGuest = guestList.pop();
//     console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
// }

// guestList.forEach(guest => console.log(`You're still invited, ${guest}.`));

// guestList.pop();
// guestList.pop();

// console.log("Final guest list:", guestList);

// Question 18:
// Array of places to visit
// let placesToVisit = ['Saudi-Arab','Dubai','Istambul','Paris','Malasia'];

// // original order
// console.log("Original Order:",placesToVisit);

// // alphabetical order
// console.log("Alphabetical Order:",[...placesToVisit].sort() );

// // show the array is still orignal order
// console.log("Orginal Order after sorting:", placesToVisit);

// // print reverse alphabetical order 
// console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// //  show the array is still orignal order
// console.log("Original Order after Reversing:",placesToVisit);

// // Reverse order list
// console.log("Reversed Order:", placesToVisit);

// // Reverse order list again restore original order
// placesToVisit.reverse();
// console.log("Sorted Alphabetical Order:",placesToVisit);

// // Sort array alphabetical order
// placesToVisit.sort();
// console.log("Sorted Alphabetical Order:", placesToVisit);

// // sort array in reverse alphabetical order
// placesToVisit.sort((a,b) =>b.localeCompare(a));
// console.log("Sorted Reverse Alphabetical Order;",placesToVisit);

// Question 19:
// Define the number of guests in dinner
// let numberOfGuests = 5;

// // print the invitation message
// console.log(`You are inviting ${numberOfGuests} people to dinner.`);

// Question 20:
// let cities =['Karachi','Lahore','Islamabad','Faislabad','Quetta'];
// console.log(cities);

// Question 21:
// type Item = {
//     name: string;
//     category: string;
//     price: number;
// };

//  let item1: Item = {name: "Laptop", category: "Electronics", price: 999.99};
//  let item2: Item = {name: "Backpack", category: "Fashion",  price:50.99};
//  let item3: Item = {name: "jucer-machine", category: "Appliances", price: 79.99};

// console.log(item1);
// console.log(item2);
// console.log(item3);

// Question 22:
// let myArray =[1,3,5];
// // index error
// console.log(myArray[7]);

// Question 23:
// let car = 'corolla';

// // Test 1
// console.log("Is car == 'corolla'? I predict True.")
// console.log(car == 'corolla');

// // Test 2
// console.log("Is car != 'toyota'? I predict True.")
// console.log(car != 'toyota');

// // Test 3
// console.log("Is car === 'corolla'? I predict False.")
// console.log(car === 'corolla');

// // Test 4
// console.log("Is car !== 'corolla'? I predict True.")
// console.log(car !== 'corolla');

// // Test 5
// console.log("Is car.length > 3? I predict True.")
// console.log(car.length > 3);

// // Test 6
// console.log("Is car.startsWith('sub')? I predict True.")
// console.log(car.startsWith('sub'));

// // Test 7
// console.log("Is car.endsWith('')? I predict True.")
// console.log(car.endsWith('aru'));

// // Test 8
// console.log("Is car.includes('uba')? I predict True.")
// console.log(car.includes('uba'));

// // Test 9
// console.log("Is car.toLowerCase() == 'corolla'? I predict True.")
// console.log(car.toLowerCase() == 'corolla');

// // Test 10
// console.log("Is car.charAt(2) == 'b'? I predict True.")
// console.log(car.charAt(2) == 'b');

// Question 24:
//  1: Tests for equality and inequality with strings:
// let string1 = "Hello";
// let string2 = "Faiza";

// console.log(string1 === string2) //false
// console.log(string1 !== string2) //true

// // 2: Tests using the lower case function:
// let uppercaseString = "MEERUB-KHAN";
// let lowercaseString = "meerub-khan";

// console.log(uppercaseString.toLowerCase()===lowercaseString);//true
// console.log(uppercaseString.toLowerCase()!==uppercaseString);//false

// // 3:Numerical tests:
// let num1 = 10;
// let num2 = 20;

// console.log(num1 === num2); //false
// console.log(num1 !== num2); //true
// console.log(num1 > num2);//false
// console.log(num1 < num2); //true
// console.log(num1 >= num2); //false
// console.log(num1 <= num2); //true

// // 4: Tests using "and" and "or" operators:
// let a = 5;
// let b = 8;

// console.log(a > 5 && b < 8); //true (both conditions are true)
// console.log(a > 5 || b > 8); //true (at least one condition are true)

// // 5: Tests whether an items is in  a array
// let myArray = [1,2,3,4,5];

// console.log(myArray.includes(3)); //true
// console.log(myArray.includes(6)); //false

// // 6: Tests whether an item is not in an array
// let array = [1,2,3,4,5];

// console.log(!array.includes(3)); //false
// console.log(!array.includes(6)); //true

// Question 25:
// passing version:
// let alienColor = "yellow";

// if (alienColor === "yellow") {
// console.log("Congratulation! you just earnrd 5 points.");
// }
// // failing version:
// let aliencolor = "red";

// if (alienColor === "green" ) {
//     console.log("Congratulation! you just earned 5 points.");
// }

// Question 26:
// let alienColor = 'green';

// if (alienColor === 'green') {
//     console.log("Congratulations! you just earned 5 points for shooting the alien.");
// }else{
//     console.log("Congratulations! you just earned  10 points.");
// }

// let aliencolor = 'yellow';

// if (alienColor === 'red') {
//     console.log("Congratulations! you just earned 5 points for shooting the alien.");
// }else{
//       console.log("Congratulations! you just earned 10 points.");
// }

// Qiustion 27:
// let alienColor = 'green';

// if (alienColor === 'green') {
//    console.log("Congratulations! you earnrd 5 points.");
// }else if(alienColor === 'yellow'){
//     console.log("Congratulations! you earned 10 points.");
// }else if (alienColor === 'red'){
//     console.log("Congratulations! you just 15 points.");
// }

// let alienColor = 'red';

// if (alienColor === 'red') {
//    console.log("Congratulations! you earnrd 5 points.");
// }else if(alienColor === 'green'){
//     console.log("Congratulations! you earned 10 points.");
// }else if (alienColor === 'yellow'){
//     console.log("Congratulations! you just 15 points.");
// }

// let alienColor = 'yellow';

// if (alienColor === 'yellow') {
//    console.log("Congratulations! you earnrd 5 points.");
// }else if(alienColor === 'red'){
//     console.log("Congratulations! you earned 10 points.");
// }else if (alienColor === 'green'){
//     console.log("Congratulations! you just 15 points.");
// }

// // Question 28:
// let age = 32;

// if (age < 2) {
//  console.log("The person is a baby");  
// }else if (age < 4){
// console.log("The person is a toddler");
// }else if (age < 13){
// console.log("The person is a kid");
// }else if (age < 20) {
//     console.log("The person is a teenager");
// }else if (age < 65){
//     console.log("The person is a adult");
// }else{
//     console.log("The person is an elder");
// }

// Question 29:
// let favoriteFruits = ['Apples','Mangoes','Litchies'];

// if (favoriteFruits.includes("Apples")) {
//     console.log("You really like Apples");
// }

// if (favoriteFruits.includes("Mangoes")) {
//     console.log("You really like Mangoes");
// }

// if (favoriteFruits.includes("Litches")) {
//     console.log("You really like Litches");
// }

// if (favoriteFruits.includes("Oranges")) {
//     console.log("You really like Oranges");
// }

// if (favoriteFruits.includes("Strawberries")) {
//     console.log("You reaaly like Strawberries");
// }

// Question 30:
// let userNames =['Faiza','Saba','Zoha','Alishba'];

// for (let username of userNames ) {
//  if (username.toLowerCase() === 'faiza') {
//     console.log(`Hello Faiza Would you like to see a status report.`);
//  } else{
//     console.log(`Hello ${username}, thank you for logging in again.`);
//  }
// }
    
//  Question 31:
// let userList =[];

// if (userList.length > 0 ) {
//   for (let user of userList ) {
//   } 
// }else{
//     console.log("We need to find some users!");
// }

// Question 32:
// Make a list for current users
// let currentUsers = ['Zainab','Iqra','Hajra','Bisma','Habiba'];

// // Make a list for new users
// let newUsers =['Faiza','Rubab','Zoha','Saba','Aisha'];

// // Loop through new users to check for uniquenses
// for (let i = 0; i < newUsers.length; i++) {
//     // Check case insensitive uniqueneses
//     let usernameExists = currentUsers.some(user => user .toLowerCase() === newUsers[i].toLowerCase());
//     // print message
//     if (usernameExists) {
//       console.log(`Username '${newUsers[i]}'  is not available . Please choose a different one.`);
//     }else{
//         console.log(`Username '${newUsers[i]}' is not available.`);
//     }
// }

// Question 33:
// let numbers = [1,2,3,4,5,6,7,8,9];

// for (let i = 0; i<numbers.length; i++) {
//     let number = numbers[i];
//     let ordinalEnding;

//     if(number === 1){
//      ordinalEnding = "st";
//     }else if(number === 2){
//      ordinalEnding = "nd";
//     }else if(number === 3){
//      ordinalEnding = "rd";
//     }else if(number === 4){
//     ordinalEnding = "th";
//     }
//     console.log(`${number} ${ordinalEnding}`);
// }

// Question 34:
// // Array of favorite pizzas
// // let favoritePizzas = ['Fajita', 'BBQ Chicken', 'Pepperoni']; 

// // // print pizza for using loop
// // for (let i = 0; i <favoritePizzas.length; i++) {
// //    console.log(favoritePizzas[i]);    
// // }

// // // print a message for each pizza
// // for (let i = 0; i < favoritePizzas.length; i++ ) {
// //    console.log(`I like ${favoritePizzas[i]} pizza`) ;

// // //    Additional sentence
// // console.log(`I really love pizza`);  
// }

// Question 35:
// list of animals with the common characteristic
// let animals = ['cat','dog','monkey'];

// // print the name of each animal using for of loop
// for (let i = 0; i < animals.length; i++) {
//    console.log(animals[i]);
// }
    
// // print a statment about each animals
// for (let i = 0; i < animals.length; i++) {
//   console.log(`A ${animals[i]} would make a great pet`); 

// //   print a statement about what these animalshave in common
// console.log(`Any of these animals would a great pet`); 
// }

// Question 36:
// function makeShirt (size, message){
//     console.log(`shirt size: ${size.toUpperCase()}, message: "${message} "`);
//    makeShirt('medium','Hello Faiza');
// }
    
// Question 37 :
// function makeShirt(size ="large", message = "I Love Javascript"){
//     console.log(`creating a ${size} shirt with the message: " ${message}"`);
// }
// // creating a large shirt with the default message
// makeShirt();
// // creating a medium shirt with the default message
//  makeShirt('medium');

//  // creating a custom-sized shirt with the default message
//  makeShirt(` 'small' Javascript is owesome`);

// Question 38:
// function describeCity (city, country = "Default Country") {
//     console.log(`${city} is in ${country}`);
// }
// // calling the function for three different cities
// describeCity("Karachi","Pakistan");
// describeCity("Dubai","UAE");
// describeCity("New York","USA");

// Question 39:
// function cityCountry (city,country) {
// return city +', ' + country;
// }
// console.log(cityCountry('Lahore','Pakistan') );
// console.log(cityCountry ('Dubai','USE'));
// console.log(cityCountry('Tokyo','Japan'));

// Question 40:
// function makeAlbum ( artist, title, tracks){
//     let album = {
//         artist: artist,
//         title: title
//     };

//     if(tracks){
//       album.tracks = tracks;
//     }
//     return album;
// }

// // example function calls
// let album1 = makeAlbum("Artist1", "Album1",5);
// let album2 = makeAlbum("Artist2", "Album2", 15);
// let album3 = makeAlbum("Artist3", "Album3", 10);

// // print the album information
// console.log(album1);
// console.log(album2);
// console.log(album3);

// Question  41:
// function showMagicians ( magicians){
//   for (let i = 0; i < magicians.length;i++ ) {
//      console.log(magicians[i]);
//   }
// }

// // example of array magicians names
// let magicianNames = ['john','David','Elif','Merlin'];

// // calling the function to show magicians
// showMagicians(magicianNames);

// Question 42 :
// array of magicians names
// let magicianArray =['john','David','Elif','Merlin'];

// function to make magician great
// function makeGreat (magicianArray) {
// for (let i = 0; i< magicianArray.length; i++ ) {
//    magicianArray[i]  = 'the great' +  magicianArray[i];  
// }   
// }

// // function to show magician
// function showMagicians(magicianArray){
// console.log(magicianArray.join (" ,"));
// }

// // call makeGreat()
// makeGreat(magicianArray);

// // call showMagicians()
// showMagicians(magicianArray);

// Question 43:
//  Unchanged Magicians
// function showMagicians(magicians){
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// function makeGreat(magicians){
//     let greatMagicians =[];
//     for (let i=0; i<magicians.length; i++){
//         greatMagicians.push("The great " + magicians[i]);
//     }
//     return greatMagicians;
// }
// let magiciansNames=["David","Elif","Merlin"];
// let greatMagicians=makeGreat([...magiciansNames]);
// console.log("                Orignal Magicians:");
// showMagicians(magiciansNames);
// console.log("                Great Magicians:");
// showMagicians(greatMagicians)
// Question 44:
// function orderSandwich( ...topping) {
//   console.log("You order a sandwich with:", topping.join(','));
// }
// // call the function with different number of arguments
// orderSandwich('Cheese','pepperoni','Lettuce');
// orderSandwich('Turkey','Tomato');
// orderSandwich('BBQ-Chicken');

// Question 45:
// function createCar (manufacturer, model, ...options) {
//     let car = {
//      manufacturer : manufacturer,
//      model : model,
//     };

//     // Value pairs to the car object
//     for (let i = 0; i < options.length; i+= 2) {
//       let key = options[i]  ;
//       let value = options[i+1];
//       car[key] = value;  
//     }
//     return car;
// }

// let myCar = createCar ('Civic', '2023', 'Color', 'Silver', 'optionsFeature','Sunroof');
// console.log(myCar);

// ====================Complete '45'Questions==================================