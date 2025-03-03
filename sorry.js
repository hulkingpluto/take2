
// Function to show the special message and the love question
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

    // Show the "Do you still love me?" section
    document.getElementById("loveQuestion").style.display = "block";
}

// Function to toggle audio on and off
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

// Function when clicking 'No' (show sad face)
function noMove() {
    // Create a sad face element
    let sadFace = document.createElement("div");
    sadFace.innerHTML = "😢";  // Sad face emoji
    sadFace.style.position = "absolute";
    sadFace.style.fontSize = "50px";
    sadFace.style.color = "#ff4d6d";
    sadFace.style.top = Math.random() * 100 + "vh";  // Random vertical position
    sadFace.style.left = Math.random() * 100 + "vw";  // Random horizontal position
    sadFace.style.animationDuration = (Math.random() * 2 + 2) + "s";  // Random animation duration
    sadFace.style.animationName = "floating";  // Apply animation
    document.body.appendChild(sadFace);

    // After 3 seconds, remove the sad face
    setTimeout(() => {
        sadFace.remove();
    }, 3000);
}

// Function to show the neon heart page when clicking 'Yes'
function showNeonHeart() {
    localStorage.setItem('userClickedYes', 'true');
    window.location.href = "love.html"; // Redirect to love.html
}


// Add the floating animation keyframe
document.styleSheets[0].insertRule(`
    @keyframes floating {
        0% { transform: translateY(0); opacity: 1; }
        50% { transform: translateY(-20px); opacity: 0.7; }
        100% { transform: translateY(0); opacity: 1; }
    }
`, 0);
