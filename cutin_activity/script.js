// select HTML elements 
const themeButton = document.getElementById('theme-btn');
const body = document.body;

//Listen for clicks events
themeButton.addEventListener('click', () => {
//Togle's dark-mode class on body tag
 body.classList.toggle('dark-mode');

//Update button label dynamically
if (body.classList.contains('dark-mode')){
    themeButton.textContent = 'Switched to Light Mode';
}else {
    themeButton.textContent = 'Switched to Dark Mode';
}
});
 