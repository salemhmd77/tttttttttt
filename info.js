// file: script.js
const loveText = document.querySelector('.love-text');

loveText.addEventListener('click', () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    loveText.style.color = randomColor;
    loveText.style.textShadow = `
        0 0 5px ${randomColor},
        0 0 10px ${randomColor},
        0 0 15px ${randomColor}`;
});