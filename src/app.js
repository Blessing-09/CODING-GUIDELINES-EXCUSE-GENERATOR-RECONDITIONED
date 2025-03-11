import "bootstrap";
import "./style.css";


// import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



//! DOM elements are marked with $
const $ = selector => document.querySelector(selector);
const $excuse = $("#excuse"); 
const $nameText = $("#name"); 
const $button1 = $("#button1");
const $button2 = $("#button2");
const $text = $("#text");
const $image = $("#image");

// Window function 
window.onload = () => {
    $image.src = "https://i.ibb.co/20QcB9pW/Its-Game-Time.jpg";
    $button2.hidden = true;
  
    $button1.addEventListener('click', () => {
      $image.src = "https://i.ibb.co/MDL5XBzn/start.png";
      $text.hidden = true;
      $excuse.textContent = "On your mark...get set... ⬇";
      $button2.hidden = false;
  });

    $button2.addEventListener('click', () => {
      let greeting = ['Hello!', 'Hey!', 'Hi!', 'Hey you!', 'Hi everyone!'];
      let introduction = ['My name is', 'They call me', 'I go by the name', 'Just call me'];
      let namePers =['Hulk', 'Catwoman', 'Gamora', 'Ironman','Spiderman','Wonderwoman'];
      let action = ['I love to', 'I like to', 'I hate to'];
      let what = ['cook 🍳', 'dance 🪩', 'travel ✈️', 'sleep 😴', 'fight villains🦹‍♂️', 'save the world🌍', 'code 👩‍💻', 'eat 🍽', 'play 🛝', 'read 📖', 'watch movies 🍿', 'listen to music 🎵'];
      let bgColor = ['pink', 'grey', 'tomato'];
      let textColor =["white", "blue", "green", "purple"];
      let imageSrc = [
        "https://i.ibb.co/YTdNjv4r/5eb241180c6dba55cd27d57d6bc34239.jpg", 
        "https://i.ibb.co/WWhYMtRf/878840125767.jpg", 
        "https://i.ibb.co/0pM0RL54/Gamora.webp", 
        "https://i.ibb.co/XxjCGJwt/Iron-Man-AOU-Render.webp", 
        "https://i.ibb.co/Q7pFLY06/spiderman-art-design-icon-vector-600nw-2404385831.webp", 
        "https://i.ibb.co/s9kKwvSM/Wonder-Woman-DC-Comics-Justice-League-Lifesize-Cardboard-Cutout-available-now-at-starstills-73279.jpg"
        ];

function getRandomItem(arr){
  return Math.floor(Math.random() * arr.length);
}

      let randomGreeting = getRandomItem(greeting);
      let randomIntroduction = getRandomItem(introduction);
      let randomName = getRandomItem(namePers);
      let randomAction = getRandomItem(action);
      let randomWhat = getRandomItem(what);
      let randomImage = getRandomItem(imageSrc);
      let randomColor = getRandomItem(bgColor);
      let randomTextColor = getRandomItem(textColor);
      
      $nameText.innerText = greeting[randomGreeting];
      $excuse.style.backgroundColor = bgColor[randomColor];
      $excuse.style.color = textColor[randomTextColor];
      $excuse.innerHTML= `
        ${introduction[randomIntroduction]} 
        <h5 style="color:black; display:inline;">${namePers[randomName]}⚡️.</h5> 
        ${action[randomAction]} 
        ${what[randomWhat]}
      `;
      $image.src = imageSrc[randomImage];
      
      if (randomName === randomImage) {
        setTimeout(() => {
          $button2.textContent = "Let's play again!";
          alert('YAY!!!🥳 We found a MATCH!!!! 🎉🥳🎊'); 
        }, 10); 
      }
      else {
          $button2.textContent = "SHUFFLE!";
      }

    });

  };



