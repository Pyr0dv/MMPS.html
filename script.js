document.addEventListener('DOMContentLoaded', function() {
  const texts = document.querySelectorAll('.text');
  let index = 0;

  function changeText() {
      texts.forEach(text => text.classList.remove('active'));
      texts[index].classList.add('active');
      index = (index + 1) % texts.length;
  }

  // Initially display the first text immediately
  texts[index].classList.add('active');

  setInterval(changeText, 3500); // Adjust the interval to 3.5 seconds
});

