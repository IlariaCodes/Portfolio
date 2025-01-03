//Displey more info logic//
let moreInfoLink = document.getElementById('link');
let moreInfoContent = document.getElementById('more-info');
let displayLess = document.getElementById('display-less');

let lastScrollPosition = 0;

function displayMoreInfo(event) {
    event.preventDefault();

    // Save the current scroll position
    lastScrollPosition = window.scrollY;
    
    moreInfoLink.style.display = 'none';
    moreInfoContent.style.display = 'block';
    displayLess.style.display = 'block';

}

moreInfoLink.addEventListener('click', displayMoreInfo);


//display less info logic//


function displayLessInfo(event) {
    event.preventDefault();
    moreInfoLink.style.display = 'block';
    moreInfoContent.style.display = 'none';
    displayLess.style.display = 'none';
    
    // Restore the scroll position
    window.scrollTo({ top: lastScrollPosition, behavior: 'auto' });
}

displayLess.addEventListener('click', displayLessInfo)


//Hamburger menu logic//

let hamburgerMenuBtn = document.getElementById('hamburger-menu');
let smallScreenMenu = document.getElementById('side-drawer');
function toggleHamburgerMenu(event) {
    event.preventDefault();
    if (smallScreenMenu.style.display === 'flex') {
        smallScreenMenu.style.display = 'none';
    } else {

        smallScreenMenu.style.display = 'flex';
    }

}

hamburgerMenuBtn.addEventListener('click', toggleHamburgerMenu);


//Making the hamburger menu link working//
let aboutBtnLink = document.getElementById('aboutBtn');
 function getAbout(event) {
    smallScreenMenu.style.display = 'none';
 }

 aboutBtnLink.addEventListener('click', getAbout);

 let projectBtnLink = document.getElementById('projectBtn');
 function getProject(event) {
    smallScreenMenu.style.display = 'none';
 }

 projectBtnLink.addEventListener('click', getProject);


 let contactBtnLink = document.getElementById('contactBtn');
 function getContact(event) {
    smallScreenMenu.style.display = 'none';
 }

 contactBtnLink.addEventListener('click', getContact);

