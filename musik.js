function toggleLagu(){
    const audio = document.getElementById("musik");
    if(audio.paused){
        audio.play();
    } else {
        musik.pause();
    }
}