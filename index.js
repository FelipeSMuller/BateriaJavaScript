
/**
 * All sounds and theirs specif durations
 */
let soundNames = {
    'crash': 600,
    'kick-bass': 600,
    'snare':600,
    'tom-1':600,
    'tom-2':600,
    'tom-3':600,
    'tom-4':600
}

let sounds = {}

window.onload = function() {
    let buttons = document.querySelectorAll(".instrumentos button")
    buttons.forEach((button,index)=>{
        try {
            let image = button.querySelector("h1")
            //Get the soundName from classList
            let soundName = button.classList[1].replace('button-', '')
            image.setAttribute("sound", soundName)
            image.setAttribute("soundDuration", soundNames[soundName])  
            
            //createSound for performance             
            sounds[soundName] = new Audio(`sounds/${soundName}.mp3`)
             
            addClick(button,soundName)
        } catch (error) {
            console.log("Não foi encontrado o som para imagem especificada", error)
        }
        
    })
}

function addClick(button,soundName) {
    button.addEventListener('click', (event)=>{
        playDrum(soundName)
    })
}

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'q':
        case 'Q':            
            playDrum('crash')
            break;

        case 'w':
        case 'W':            
            playDrum('kick-bass')
            break;

        case 'e':
        case 'E':            
            playDrum('snare')
            break;

        case 'r':
        case 'R':
            playDrum('tom-1')
            break;

        case 't':
        case 'T':
            playDrum('tom-2')
            break;

        case 'y':
        case 'Y':
            playDrum('tom-3')
            break;

        case 'u':
        case 'U':            
            playDrum('tom-4')
            break;
        default:
            console.log("Nenhum efeito foi especificado!!")
    }
});



/**
 * Play the correspondent instrument
 * @param {number} drumIndex 
 * @param {string} soundName 
 */
function playDrum(soundName) {
    let image = document.querySelector(`h1[sound=${soundName}]`);
    image.classList.add("animation-color")
    let soundDuration =  parseInt(image.getAttribute("soundDuration"))
    //let audio = new Audio(`sounds/${soundName}.mp3`)
    let audio = sounds[soundName]
    audio.play()

    setTimeout(function () {
        image.classList.remove("animation-color");        
    }, soundDuration);

}

