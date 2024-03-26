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




document.addEventListener('DOMContentLoaded', function () {
  const animatedCursor = document.getElementById('animated-cursor');
  const joinNow = document.querySelector('.colorful-link');

  joinNow.addEventListener('mouseover', () => {
      animatedCursor.style.display = 'block';
      animatedCursor.style.left = (event.clientX - 25) + 'px'; // Adjust position based on cursor size
      animatedCursor.style.top = (event.clientY - 25) + 'px'; // Adjust position based on cursor size
      setTimeout(() => {
          animatedCursor.style.display = 'none';
      }, 1000);
  });
});

