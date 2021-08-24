const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.background');

let loadNumber = 0;

let blurring = setInterval(blurrImage,30)
function blurrImage(){
    loadNumber++;

    if(loadNumber > 99){
        clearInterval(blurring)
    }
loadText.innerHTML = `${loadNumber}%`;

//when the loadText goes from 0 -100, the opacity should go from 1-0
loadText.style.opacity = scale(loadNumber, 0, 100, 1, 0)
background.style.filter =`blur(${scale(loadNumber, 0, 100, 30, 0 )}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
