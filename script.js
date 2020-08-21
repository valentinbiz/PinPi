const videoBox = document.getElementById('video');
const start = document.getElementById('button2');
const select = document.getElementById('button1');
//Select media stream, pass video element, then play

async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoBox.srcObject = mediaStream;
        videoBox.onloadedmetadata = () => {
            videoBox.play();
        }
    } catch (error) {
        console.log('sorry boss, ai o eroare:', error)
    }
}
button1.addEventListener('click', async () => {
    button1.disable = true;
    await selectMediaStream();
    button1.disable = false;
})

button2.addEventListener('click', async () => {
    //Disable the button when we click on it
    button2.disable = true;
    //Start Picture in Picture
    await videoBox.requestPictureInPicture();
    //Reset the button
    button2.disable = false;
});

