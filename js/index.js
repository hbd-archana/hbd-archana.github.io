var speed = 3000; /* The speed/duration of the effect in milliseconds */
const messages = [
    "romense kween",
    "freak penne",
    "thalaivi"
];

function setText(text) {
    setTimeout(function () {
        console.log(text);
        document.getElementById("anim-placeholder").innerHTML = text;
    }, speed);
}

function typeWriter() {
    let i = 0;
    let text = '';
    messages.map(function (message) {
        document.getElementById("anim-placeholder").innerHTML = message;
        setTimeout(function () { }, 2000);
    });
}

showMessages = () => {
			
    setTimeout(() => {
        const toPrint = messages[i].splice(0, char+1);
        char++;

        // document.getElementById("anim-placeholder").innerText = toPrint;
        // i++;
        // if (i < messages.length) {
        // 	showMessages();
        // }
    }, speed);
};