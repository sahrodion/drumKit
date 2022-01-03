for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
 document.querySelectorAll(".drum")[i].addEventListener("click", handleClick );
 function handleClick(){
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
        case "w":
            var crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            var tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;    

        case "d":
            var snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;

        case "j":
            var kickBass = new Audio("/sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "k":
            var tom4 = new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;

         case "l":
            var tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;
        default: console.log(buttonInnerHTML)
    }}        




}
// document.addEventListener("keydown", function(event){
//     pressedKey(event.key);});
// function pressedKey(key){
    document.onkeydown = (event) => {
    switch (event.key) {
        case "w":
            var crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            var tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;    

        case "d":
            var snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;

        case "j":
            var kickBass = new Audio("/sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "k":
            var tom4 = new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;

         case "l":
            var tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;
        default: console.log(event)

    }}
// function HouseKeeper(name,age,yearsOfExperience ,cleaningRepetoire){
//     this.name = name;
//     this.age = age;
//     this.yearsOfExperience = yearsOfExperience;
//     this.cleaningRepetoire = cleaningRepetoire;
//     this.clean = function cleanHouse(){
//         alert("cleaning in progress");
//     }
// }

// var houseKeeper1 = new HouseKeeper("jane", 19, 12, ["English", "French"] );