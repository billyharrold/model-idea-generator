
console.log("Loaded script")
const timerText = document.querySelector(".timer");

// Timer Variables
let endTime;
const timeLength = 2 * 60;
let timerID = null;
let timeLeft = timeLength;


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
  startTimer();
}

function startTimer() 
{
  clearInterval(timerID);
  endTime = Date.now() + timeLength * 1000;
  
  timerID = setInterval(tick, 1000);
  showTime()
}

function tick()
{
  timeLeft = Math.round(endTime - Date.now()) / 1000;
  
  if (timeLeft <= 0)
  {
    clearInterval(timerID);
    timerText.textContent = "Time UP!";
  }
  else
  {
    showTime();
  }

}

function showTime()
{
  const minsLeft = Math.floor(timeLeft/60);
  const secsLeft = Math.round(timeLeft % 60);
  timerText.textContent = `${String(minsLeft)}:${String(secsLeft).padStart(2, "0")}`;

}



