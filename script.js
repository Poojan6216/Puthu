document.getElementById('yesButton').addEventListener('click', function() {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.querySelector('.container').style.display = 'block'; // Show the main content
    //document.getElementById('confirmationPage').style.display = 'block';
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('responseMessage').textContent = "Who cares? I'm coming!";
    setTimeout(function() {
        document.querySelector('.welcome-screen').style.display = 'none';
        document.querySelector('.container').style.display = 'block'; // Show the main content after message
    }, 2000); // Wait 2 seconds before showing main content
});

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const buttonContainer = document.querySelector('.button-container');

noBtn.addEventListener('mouseover', function() {
    const containerWidth = buttonContainer.clientWidth;
    const containerHeight = buttonContainer.clientHeight;
    const maxX = containerWidth - noBtn.offsetWidth;
    const maxY = containerHeight - noBtn.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener('click', function() {
    message.textContent = 'Hey, you just placed your order, and I really appreciate it!';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});