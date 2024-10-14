const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".center", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".footer", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__image__content ", {
  duration: 1000,
  delay: 1500,
});

ScrollReveal().reveal(".product__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});


ScrollReveal().reveal(".product", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centerSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 250,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },

  pagination: {
    el: ".swiper-pagination",
  },
});

function sendMessage() {
  const userMessage = document.getElementById('userInput').value;
  if (userMessage.trim() === "") return;

  const chatMessages = document.getElementById('chatMessages');

  // Append user message
  const userDiv = document.createElement('div');
  userDiv.className = 'user-message';
  userDiv.innerText = userMessage;
  chatMessages.appendChild(userDiv);

  // Clear input field
  document.getElementById('userInput').value = '';

  // Simulate bot response
  setTimeout(() => {
      const botDiv = document.createElement('div');
      botDiv.className = 'bot-reply';
      botDiv.innerText = "Innovizer Bot: How can I assist you?";
      chatMessages.appendChild(botDiv);

      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);
}
