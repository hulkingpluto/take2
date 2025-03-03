function showMessage() {
    let message = document.getElementById("message");
    message.style.display = "block";
    setTimeout(() => {
        message.style.opacity = "1";
    }, 100);

    // Change background color smoothly
    document.body.style.backgroundColor = "#ffccd5";

    // Create floating hearts
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 2) + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

function toggleAudio() {
    let song = document.getElementById("apologySong");
    let muteButton = document.getElementById("muteButton");

    if (song.paused) {
        song.play();
        muteButton.textContent = "🔊 Mute";
    } else {
        song.pause();
        muteButton.textContent = "🔈 Unmute";
    }
}