
console.log("Loaded script")

const objects = [
  'Shoe', 
  'Screwdriver', 
  'Egg',

  "sports car", "pickup truck", "school bus", "motorbike", "vintage car",
  "monster truck", "ice cream van", "taxi", "tractor", "fire engine",
  "ambulance", "police car", "scooter", "camper van", "go-kart",

  // Vehicles - air
  "biplane", "helicopter", "jumbo jet", "fighter jet", "airship",
  "glider", "seaplane", "drone",

  // Vehicles - water
  "pirate ship", "rowing boat", "speedboat", "canoe", "cruise ship",
  "submarine", "sailboat", "jet ski",

  // Vehicles - rail & other
  "steam train", "tram", "bicycle", "unicycle", "tank",
  "forklift", "bulldozer", "rocket", "lunar rover",

  "teapot", "coffee mug", "toaster", "frying pan", "kettle",
  "rolling pin", "blender", "wine glass", "cheese grater", "salt shaker",

  // Furniture & home
  "armchair", "desk lamp", "bookshelf", "grandfather clock", "rocking chair",
  "candle holder", "picture frame", "vase", "alarm clock", "umbrella",

  // Tech & gadgets
  "retro TV", "game controller", "headphones", "camera", "typewriter",
  "radio", "computer mouse", "microphone", "walkie-talkie", "flashlight",

  // Tools & workshop
  "hammer", "wrench", "toolbox", "lantern", "padlock",
  "hourglass", "compass", "magnifying glass", "anvil", "watering can",

  // Fun & miscellaneous
  "treasure chest", "skateboard", "guitar", "rubber duck", "hot air balloon",
  "fire hydrant", "mailbox", "potion bottle", "sword", "telescope"];

function generateWord()
{
  const newWord = document.querySelector(".randWord");
  
  //newWord.textContent = objects; 
  
  let i = Math.floor(Math.random() * objects.length);
  let r = objects[i];
  newWord.textContent = r;


  
}

