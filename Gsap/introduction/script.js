// //  gsap ek js librari he jo animation perform karne ke liye use ki jati he :

// //  gsap.to : gsap.to method ka use hum tab karte he jab elem ko intial positon se final position par lanah hota he

// gsap.to("#box1", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   scale: 1,
// });

// // gsap.from : gsap.from ka use tab kiya jata he jab elem ko final position se initial position par lana ho ,
// gsap.from("#box2", {
//   x: 1000,
//   duration: 2, // duration means time jab tak elem animate hoga:
//   delay: 1, // delay means itne time ke bad elem anitmate hoga:
//   rotate: 360, // rotate hogo jo value di he usse
//   scale: 2, // scale means elem bada hoga jo value di gai ho
//   color: "red", // hum gsap me koi bhi css property de sakte he par hame property camelCase me deni hogi,

//   // background-colo:"pink" it is not allowed because js not understand - thats why we put jo - ke bad ka word he use camel case me karna hota he -> backgourdColor:
//    backgroundColor:"pink",
//   //  repeat:2  // repeat means how many time will elem reapeat if we want to repeat infinite just write -1 i will repeat infinite 
//     repeat:-1,
//     yoyo:true,  // yoyo means elem final position se initioal par and initial se final par wapas ana jaan karege
// });




// gsap.from("h1", {
//   y:500,
//   // x:500,
//   duration:3,
//   stagger:1,  // sttagger means elem har element kitne time ke bad animate hoga 


// });



//  timeline means hum bahut sare eleme ko animate karna hota he par unko jab ek element execute ho jaye uske bad dusre ka animation chalu ho to hum timelin ka us karte he : 

let timeline = gsap.timeline();
// console.log(timeline);

 timeline.to("#elem1",{
     x:1000,
    duration:1.3,
    rotate:360,
 })
 timeline.to("#elem2",{
     x:1000,
    duration:1.3,
    rotate:360,
 })
 timeline.to("#elem3",{
     x:1000,
    duration:1.3,
    rotate:360,
 })

 