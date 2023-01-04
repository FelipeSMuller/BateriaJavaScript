

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'q':
        case 'Q':
            let ButtonCrash = document.querySelectorAll("h1")[1];
            ButtonCrash.classList.add("animation-color");

            let crash = new Audio("sounds/crash.mp3");
            crash.play();

            setTimeout(function () {
                ButtonCrash.classList.remove("animation-color");
            }, 1000);
            break;

        case 'w':
        case 'W':
            let ButtonKick = document.querySelectorAll("h1")[2];
            ButtonKick.classList.add("animation-color")
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();

            setTimeout(function () {
                ButtonKick.classList.remove("animation-color");
            }, 1000);
            break;

        case 'e':
        case 'E':
            let buttonSnare = document.querySelectorAll("h1")[3];
            buttonSnare.classList.add("animation-color")
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            setTimeout(function () {
                buttonSnare.classList.remove("animation-color");
            }, 1000);

            break;

        case 'r':
        case 'R':

            let tom_1 = document.querySelectorAll("h1")[4];
            tom_1.classList.add("animation-color");
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();

            setTimeout(function () {
                tom_1.classList.remove("animation-color");
            }, 1000);
            break;

        case 't':
        case 'T':
            let tom_2 = document.querySelectorAll("h1")[5];
            tom_2.classList.add("animation-color");
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            setTimeout(function () {
                tom_2.classList.remove("animation-color");
            }, 1000);

            break;

        case 'y':
        case 'Y':
            let tom_3 = document.querySelectorAll("h1")[6];
            tom_3.classList.add("animation-color")
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            setTimeout(function () {
                tom_3.classList.remove("animation-color");
            }, 1000);
            break;

        case 'u':
        case 'U':
            let tom_4 = document.querySelectorAll("h1")[7];
            tom_4.classList.add("animation-color")
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            setTimeout(function () {
                tom_4.classList.remove("animation-color");
            }, 1000);
            break;
        default:
            console.log("Nenhum efeito foi específicado!!")
    }
});



