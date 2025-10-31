let isDrunk; // Can be true or false.
let wearsCoolClothes; // Can be true or false.
let clubIsFull; // Can be true or false.

// Zafar
// isDrunk = false;
// wearsCoolClothes = true;
// clubIsFull = true;

//Storm;
// isDrunk = true;
// wearsCoolClothes = true;
// clubIsFull = true;

// Carla
// isDrunk = false;
// wearsCoolClothes = false;
// clubIsFull = true;

// Alice
isDrunk = false;
wearsCoolClothes = false;
clubIsFull = false;

if (isDrunk) {
  console.log("Please come back when you are sober");
} else {
  if (clubIsFull) {
    if (wearsCoolClothes) {
      console.log("Wow, cool clothes, come in");
    } else {
      console.log("No, too busy right now");
    }
  } else {
    console.log("Welcome");
  }
}
