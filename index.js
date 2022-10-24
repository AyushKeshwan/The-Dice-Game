// Generate random number between 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  

// Pick a random image between (dice1.png - dice6.png)
var randomImage = "dice" + randomNumber1 + ".png";

//Creates a random image resource between (images/ .. dice1.png - dice6.png) 
var randomImageSource = "images/" + randomImage ;

// Manipulate the Dice1 Image using (document.querySelectorall and giving the index of image[0])
// Changing source of image using setAttribute() with the new randomImage resource
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Changing InnerHtml w.r.t the condition
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins ! 🚩";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins ! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw ";
}
