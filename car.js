document.addEventListener('DOMContentLoaded', function () {
    const car = document.getElementById('car');
    const playButton = document.getElementById('button');
    const audioPlayer = document.getElementById('audio');

    // Play or pause audio on button click
    playButton.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });

    // Move car with arrow keys and jump with up arrow
    let positionX = 0; // Horizontal position
    let positionY = 0; // Vertical position
    const moveDistance = 20; // Distance to move in pixels
    const jumpHeight = 100; // Height of the jump in pixels

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            positionX += moveDistance;
        } else if (e.key === 'ArrowLeft') {
            positionX -= moveDistance;
        } else if (e.key === 'ArrowUp') {
            jump();
        } else if (e.key === ' ') { // Spacebar key
            e.preventDefault(); // Prevent default action (scrolling down)
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        }
        car.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });

    function jump() {
        const originalPositionY = positionY;
        positionY -= jumpHeight;
        car.style.transform = `translate(${positionX}px, ${positionY}px)`;

        // Return to original position after the jump
        setTimeout(function () {
            positionY = originalPositionY;
            car.style.transform = `translate(${positionX}px, ${positionY}px)`;
        }, 500); // Duration of the jump in milliseconds
    }
});
