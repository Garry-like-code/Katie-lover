document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for fade-in sections and cards
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });


  // Flirty messages with special effects
  const flirtButtons = document.querySelectorAll('.flirt-btn');
  const flirtText = document.getElementById('flirt-text');
  const nextFlirt = document.querySelector('.next-flirt');
  
  flirtButtons.forEach(button => {
    button.addEventListener('click', () => {
      const message = button.getAttribute('data-message');
      flirtText.textContent = message;
      flirtText.classList.remove('hidden');
      flirtText.classList.add('visible');
      nextFlirt.classList.remove('hidden');
      nextFlirt.classList.add('visible');
      createFloatingHearts(2);
    });
  });

  // Next flirty message functionality
  const nextFlirtBtn = document.getElementById('next-flirt');
  const flirtyMessages = [
    "Are you made of copper and tellurium? Because you're Cu-Te! 🧪",
    "You must be tired because you've been running through my mind all day. 🏃‍♀️",
    "If you were a vegetable, you'd be a cute-cumber! 🥒",
    "Are you a magician? Because whenever I look at you, everyone else disappears. 🎩✨",
    "Is it just me, or is it getting warmer in here? Because you're on fire! 🔥",
    "Are you a Wi-Fi signal? Because I'm feeling a strong connection. 📶",
    "You're the reason I look down at my phone and smile. 💌",
    "If beauty were time, you'd be an eternity. ⏳",
    "You have a smile that lights up my world like the sun. ☀️",
    "Are you a shooting star? Because you make my wishes come true. 🌠",
    "Are you a bank loan? Because you have my interest! 💰",
    "Can you lend me a map? Because I just got lost in your eyes. 🗺️",
    "If I had a star for every time you brightened my day, I'd have a galaxy. 🌟",
    "You're sweeter than candy and more refreshing than a glass of lemonade. 🍋🍭",
    "Are you the ocean? Because I feel waves of emotion every time I think about you. 🌊",
    "I must be a snowflake, because I've fallen for you. ❄️",
    "Do you like coffee? Because I can't espresso how much I like you. ☕",
    "Are you a puzzle? Because you complete me. 🧩",
    "If you were a book, you'd be my favorite chapter. 📖",
    "Are you a painting? Because you're a masterpiece. 🎨",
    "You're like sunshine on a rainy day, making everything better. 🌦️",
    "Are you made of stardust? Because you sparkle wherever you go. ✨",
    "You're like my favorite song—catchy and unforgettable. 🎶",
    "Are you a diamond? Because you're flawless. 💎",
    "If you were a rose, I'd never stop admiring your beauty. 🌹",
    "You must be a keyboard because you're just my type. ⌨️",
    "Are you gravity? Because you keep pulling me toward you. 🌍",
    "If I were a genie, I'd grant your every wish. 🪄",
    "You're the cherry on top of everything wonderful in my life. 🍒",
    "Can you teach me your secret? How do you make everyone smile? 😊",
    "You must be a campfire because you make me feel all warm and cozy inside. 🔥",
    "Are you the moon? Because you light up my darkest nights. 🌕",
    "If smiles were money, yours would make you a billionaire. 💵",
    "Is your name Google? Because you've got everything I've been searching for. 🔎",
    "You're like my favorite dream—too good to be real but impossible to forget. 💤",
    "Are you a garden? Because you're blooming with beauty. 🌸",
    "If I could rearrange the alphabet, I'd put U and I together. 🅰️",
    "You're like a piece of art—unique, priceless, and captivating. 🎭",
    "Are you a flame? Because you've ignited something in me. 🔥",
    "You must be the reason love songs were invented. 🎼",
    "If love were a sport, you'd be the gold medalist. 🏅",
    "Are you a rainbow? Because you bring color to my life. 🌈",
    "You're like the perfect cup of tea—soothing, warm, and irresistible. 🍵",
    "If hearts could speak, mine would say your name every second. ❤️",
    "You're like dessert—sweet and irresistible. 🍰",
    "Do you have a Band-Aid? Because you just healed my broken heart. 💔",
    "Are you a light bulb? Because you brighten every room you walk into. 💡",
    "If I were a flower, I'd bloom every time you smile. 🌼",
    "Are you an artist? Because you just created a masterpiece in my heart. 🎨",
    "You're like my favorite season—everything feels better with you around. 🍂❄️🌸☀️",
    "If life is a journey, then you're the best stop I've ever made. 🗺️",
    "Are you my destiny? Because every path seems to lead to you. 🔮",
    "You're like a ray of sunshine—warm, beautiful, and full of life. 🌞"
  ];
  let flirtIndex = 0;

  nextFlirtBtn.addEventListener('click', () => {
    flirtText.textContent = flirtyMessages[flirtIndex];
    flirtIndex = (flirtIndex + 1) % flirtyMessages.length;
    createFloatingHearts(1);
  });

  // Enhanced surprise message with special effects
  const revealBtn = document.getElementById('reveal-btn');
  const hiddenMessage = document.getElementById('hidden-message');

  revealBtn.addEventListener('click', () => {
    hiddenMessage.classList.toggle('hidden');
    hiddenMessage.classList.toggle('visible');
    revealBtn.textContent = hiddenMessage.classList.contains('visible')
      ? 'Hide Surprise ✨'
      : 'Click for a Surprise ✨';
  });

  // Contact Button Functionality
  const contactBtn = document.getElementById('contact-btn');
  const contactInfo = document.getElementById('contact-info');

  contactBtn.addEventListener('click', () => {
    contactInfo.textContent = "02041719313";
    contactInfo.classList.toggle('hidden');
    contactInfo.classList.toggle('visible');
    contactBtn.textContent = contactInfo.classList.contains('visible')
      ? 'Hide Contact'
      : 'How to Reach Me';
  });

  // Guess Functionality
  const guessInput = document.getElementById('guess-input');
  const submitGuess = document.getElementById('submit-guess');
  const guessFeedback = document.getElementById('guess-feedback');

  submitGuess.addEventListener('click', () => {
    const guess = guessInput.value.toLowerCase();
    let feedback = '';

    if (guess.includes('star') || guess.includes('night')) {
      feedback = '✨ You got it! I do love watching the stars!';
    } else {
      feedback = 'Not quite! But keep guessing, you might discover something special!';
    }

    guessFeedback.textContent = feedback;
    guessFeedback.style.opacity = '0';
    setTimeout(() => {
      guessFeedback.style.opacity = '1';
    }, 100);
  });

  // Thoughts textarea enhancement
  const textarea = document.getElementById('thoughts');
  if (textarea) {
    textarea.addEventListener('input', function() {
      if (this.value.length > 0) {
        createFloatingHearts(1);
      }
    });
  }
});

function createFloatingHearts(count) {
  const heartsContainer = document.createElement('div');
  heartsContainer.className = 'floating-hearts';
  document.body.appendChild(heartsContainer);

  const emojis = ['❤️', '✨', '🌟', '💫', '💖', '🌸', '🦋', '🎭', '🎪', '🎨', '🎬', '🎡'];
  const positions = ['left', 'right', 'center'];
  const speeds = ['slow', 'medium', 'fast'];

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      heart.className = 'floating-heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 0.5})`;
      heartsContainer.appendChild(heart);

      heart.addEventListener('click', () => {
        heart.style.transform = 'scale(1.5) rotate(360deg)';
        setTimeout(() => heart.remove(), 200);
      });

      setTimeout(() => {
        heart.style.opacity = '0';
        setTimeout(() => heart.remove(), 500);
      }, 2500);
    }, i * 200);
  }

  setTimeout(() => heartsContainer.remove(), count * 200 + 3000);
}

// Enhanced hover effects for sections
document.querySelectorAll('section').forEach(section => {
  let timeout;

  section.addEventListener('mousemove', (e) => {
    if (timeout) clearTimeout(timeout);

    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    section.style.background = `
      linear-gradient(
        rgba(255, 255, 255, 0.95),
        rgba(255, 255, 255, 0.95)
      ),
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(147, 112, 219, 0.2),
        transparent 50%
      )
    `;
  });

  section.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      section.style.background = 'rgba(255, 255, 255, 0.95)';
    }, 300);
  });
});
