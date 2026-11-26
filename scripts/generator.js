
console.log("Loaded script")

const objects = ['Shoe', 'Screwdriver', 'Egg'];

function generateWord()
{
  const newWord = document.querySelector(".randWord");
  newWord.style.color = "black";
  //newWord.textContent = objects; 
  
  let i = Math.floor(Math.random() * objects.length);
  let r = objects[i];
  newWord.textContent = r;


  
}

