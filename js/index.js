var speed = 500;
var printing = true;

const messages = [
    "archuu",
    "freak penne",
    "chalil",
    "romense kween",
    "thalaivi",
    "achukutty",
    "oppuu",
    "chellam",
    "ultimate human / genius",
    "tharkootharam",
    "rosamma",
    "chana",
    "Archana :)"
];

var count=1;
var player=document.getElementById('landing-video');
var mp4Vid = document.getElementById('mp4Source');
player.addEventListener('ended', playNext, false);

function playNext(e)
{
    if(count === 6) {
        count = 0;
    }
    if(!e) {
        e = window.event; 
    }
    count++;
    mp4Vid.setAttribute("src", "./assets/vid"+count+".mp4");
    player.load();
    player.play();
}

setMessage = (text) => {
    document.getElementById("anim-placeholder").innerText = text;
}

window.addEventListener('load', () => {
    showMessages();
});

var i = 0;

showMessages = () => {
    setTimeout(() => {
        setMessage(messages[i]);
        i++;
        if (i < messages.length) {
            showMessages();
        }
    }, speed);
};