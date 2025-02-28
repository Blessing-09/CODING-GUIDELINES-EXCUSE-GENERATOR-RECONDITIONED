import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// I called all the HTML elements that I want to work with by their id and stored them in a variable
let excuse = document.getElementById("excuse");
let name = document.getElementById("name");
let image = document.getElementById("image");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let text = document.getElementById("text");
// I declared my arrays in a variable with the values I would like to work with
let greeting = ['Hello!', 'Hey!', 'Hi!', 'Hey you!', 'Hi everyone!'];
let introduction = ['My name is', 'They call me', 'I go by the name', 'Just call me'];
let namePers =['Wonderwoman', 'Hulk', 'Spiderman', 'Gamora', 'Ironman', 'Catwoman'];
let action = ['I love to', 'I like to', 'I hate to'];
let what = ['cook 🍳', 'dance 🪩', 'travel ✈️', 'sleep 😴', 'code 👩‍💻', 'eat 🍽', 'play 🛝', 'read 📖', 'watch movies 🍿', 'listen to music 🎵'];
let bgColor = ['pink', 'grey', 'black'];
let textColor =["white", "blue", "green", "purple"];
 let imageSrc = ["https://i.ibb.co/YTdNjv4r/5eb241180c6dba55cd27d57d6bc34239.jpg", "https://i.ibb.co/WWhYMtRf/878840125767.jpg", "https://i.ibb.co/0pM0RL54/Gamora.webp", "https://i.ibb.co/XxjCGJwt/Iron-Man-AOU-Render.webp", "https://i.ibb.co/Q7pFLY06/spiderman-art-design-icon-vector-600nw-2404385831.webp", "https://i.ibb.co/s9kKwvSM/Wonder-Woman-DC-Comics-Justice-League-Lifesize-Cardboard-Cutout-available-now-at-starstills-73279.jpg"];

// Window function 
window.onload = function() {
  //When the window loads, the button2 is hidden, to be used later. We can only make use of the button1
  image.src = "https://i.ibb.co/20QcB9pW/Its-Game-Time.jpg";
  button2.style.display = "none";
  button1.addEventListener('click', function () {
    //When the button1 is clicked, the button2 is shown, and the initial text is hidden
    image.src = "https://i.ibb.co/MDL5XBzn/start.png";
    text.style.display = "none";
    excuse.textContent = "On your mark...get set... ⬇";
    button2.style.display = "inline-block";
    button2.addEventListener('click', function () {
      //When the button2 is clicked, the following takes place:
      // However, for easier manipulation, I have stored the random values generated in a function in variables for easy manipulation
      let randomGreeting = getRandomItem(greeting);
      let randomIntroduction = getRandomItem(introduction);
      let randomName = getRandomItem(namePers);
      let randomAction = getRandomItem(action);
      let randomWhat = getRandomItem(what);
      let randomImage = getRandomItem(imageSrc);
      let randomColor = getRandomItem(bgColor);
      let randomTextColor = getRandomItem(textColor);
      // When the button2 is clicked, random values are generated and displayed
      name.innerText = randomGreeting;
      excuse.style.backgroundColor = randomColor;
      excuse.style.color = randomTextColor;
      excuse.innerText= `${randomIntroduction} ${randomName}. ${randomAction} ${randomWhat}`;
      image.src = randomImage;
      
      // The if condition creates a match between each character and their name. If that happens, an alert is shown and the match is displayed after clicking the "ok"
      if (
        (randomName === namePers[0] && randomImage === imageSrc[5])|| 
        (randomName === namePers[1] && randomImage === imageSrc[0])|| 
        (randomName === namePers[2] && randomImage === imageSrc[4])|| 
        (randomName === namePers[3] && randomImage === imageSrc[2])||
        (randomName === namePers[4] && randomImage === imageSrc[3])|| 
        (randomName === namePers[5] && randomImage === imageSrc[1])
      )
        {
          alert('YAY!!!🥳 We found a MATCH!!!! 🎉🥳🎊');
          button2.textContent = "Let's play again!";
         }
         else {
          button2.textContent = "SHUFFLE!";
         }
   
    });
  });
};

function getRandomItem(arr){
  let randomIndex=Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}