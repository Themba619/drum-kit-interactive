// Detect button press
// Select all elements with class name of drum 
var buttons = document.querySelectorAll(".drum").length;

// Loop through the buttons
for(var i = 0; i < buttons; i++){

    // Add event listener to each button
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        //  Tie each button to a letter
        var btnInnerHTML = this.innerHTML;

        // Call function to play sound
        sound(btnInnerHTML)

        btnAnimation(btnInnerHTML);
    });
}

// Detect keyboard press
document.addEventListener("keydown", function(event){
    // Call function to play to sound
    sound(event.key);

    btnAnimation(event.key);
})

// Call relevant sound
function sound(key){
    switch(key){
        case "w":
            var audio1 = new Audio("./sounds/crash.mp3");
            audio1.play();
        break;
        case "a":
            var audio2 = new Audio("./sounds/kick-bass.mp3");
            audio2.play();
        break;
        case "s":
            var audio3 = new Audio("./sounds/snare.mp3");
            audio3.play();
        break;
        case "d":
            var audio4 = new Audio("./sounds/tom-1.mp3");
            audio4.play();
        break;
        case "j":
            var audio5 = new Audio("./sounds/tom-2.mp3");
            audio5.play();
        break;
        case "k":
            var audio6 = new Audio("./sounds/tom-3.mp3");
            audio6.play();  
        break;
        case "l":
            var audio7 = new Audio("./sounds/tom-4.mp3");
            audio7.play();
        break;
        default:
    }
}

function btnAnimation(currentKey){

    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 100);
}