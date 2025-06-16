const giftBox = document.getElementById('giftBox');  
let isOpen = false;

giftBox.addEventListener('click', function() {  
  if (!isOpen) {  
    this.classList.add('open');  
    createConfetti();  
    isOpen = true;

    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3');  
    audio.volume = 0.3;  
    audio.play().catch(e => console.log("Audio playback failed:", e));  
  }  
});  

function createConfetti() {  
  const colors = ['#e84393', '#fd79a8', '#fdcb6e', '#00b894', '#0984e3', '#6c5ce7'];  
    
  for (let i = 0; i < 150; i++) {  
    setTimeout(() => {  
      const confetti = document.createElement('div');  
      confetti.className = 'confetti';  
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];  
      confetti.style.left = Math.random() * window.innerWidth + 'px';  
      confetti.style.top = -10 + 'px';  
      confetti.style.width = (5 + Math.random() * 10) + 'px';  
      confetti.style.height = (5 + Math.random() * 10) + 'px';  
      document.body.appendChild(confetti);  

      animateConfetti(confetti);  
    }, i * 20);  
  }  
}  

function animateConfetti(element) {  
  let pos = -10;  
  const speed = 2 + Math.random() * 3;  
  const drift = Math.random() * 6 - 3;  
  const spin = Math.random() * 360;  
  const spinSpeed = 1 + Math.random() * 3;  

  const fall = setInterval(() => {  
    pos += speed;  
    const currentLeft = parseFloat(element.style.left) || 0;  

    element.style.top = pos + 'px';  
    element.style.left = (currentLeft + drift) + 'px';  
    element.style.transform = `rotate(${spin * (pos / 100 * spinSpeed)}deg)`;  

    if (pos > window.innerHeight) {  
      clearInterval(fall);  
      element.remove();  
    }  
  }, 20);  
        }
