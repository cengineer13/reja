// Listen for clicks on the entire page
document.addEventListener('click', function(event) {
  // event.target is the specific element that was clicked
  console.log('You clicked on:', event.target);
  
  // You can read properties or modify it directly
  if (event.target.document === 'BUTTON') {
    event.target.style.backgroundColor = 'blue';
  }
});