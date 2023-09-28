// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  document.addEventListener('DOMContentLoaded', () => { // Ensure js loads only after our content is loaded
    console.log('After DOM Loaded');
    console.log(document.querySelector('div')); // these two execute only after DOM is loaded
    
    const changedText = document.querySelector('#text');
  changedText.textContent = 'This is really cool!';
  changedText;
  
});
    console.log('Before DOM Loads');
    console.log(document.querySelector('div'));

  