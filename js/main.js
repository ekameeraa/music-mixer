// monsters have two functions - 1. click and change background 2. drop zone
// when drag instruments and drop on monsters, play music

// variable - click, drag and drop
let theButtons = document.querySelectorAll(".monsters img"),
    container = document.getElementById("container"),
    theInstruments = document.querySelectorAll("#instruments img"),
    draggedPiece = document.querySelectorAll("#draggedPiece");

// variable - audio 
// define audio elements and sources
let audioElements = {
    'monster1': new Audio('music/piano.mp3'),
    'monster2': new Audio('music/funnysong.mp3'),
    'monster3': new Audio('music/guitar.mp3'),
    'monster4': new Audio('music/shaker.mp3'),
    'monster5': new Audio('music/drum.mp3'),
    'monster6': new Audio('music/xylophone.mp3')
  };

// function -click, drag, and drop
function changeBGImage() {
    container.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() {
    console.log('started dragging this piece:', this);
    draggedPiece = this;
}

function handleDragOver(e) {
    // debugger
    e.preventDefault();
    console.log('dropped something on me!');
    // e.target.appendChild(draggedPiece);
    
}

// function for playing music when an instrument is dropped on a monster
function handleDrop(e) {
    debugger
    e.preventDefault();
    console.log('dropped something on me!');
    e.target.appendChild(draggedPiece);
    // let monsterId = e.target.id;
    // let instrumentId = draggedPiece.id;
    const audioKey = draggedPiece.getAttribute("data-key");
    const audioElement = document.querySelector(`music[data-key="${audioKey}"]`);
  
        audioElement.currentTime = 0;
        audioElement.play();
      
      
    // audioElement.currentTime = 0;
    
    // audioElement.play();
    // if (audioElements.hasOwnProperty(monsterId) && audioElements.hasOwnProperty(instrumentId)) {
    //   let audioElement = audioElements[monsterId];
      
    //   if (!audioElement.paused) {
    //     audioElement.pause();
    //     audioElement.currentTime = 0;
    //   }
      
    //   audioElement.play();
    // }
  }
  
// Event
theButtons.forEach(button => button.addEventListener('click', changeBGImage));
theInstruments.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
theButtons.forEach(zone => zone.addEventListener('dragover', handleDragOver));

theButtons.forEach(zone => zone.addEventListener('dragover', handleDragOver));
draggedPiece.forEach(zone => zone.addEventListener('drop', handleDrop));
